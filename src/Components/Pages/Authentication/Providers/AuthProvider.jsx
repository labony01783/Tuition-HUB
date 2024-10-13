import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Import Firestore functions
import { firestore,app } from '../../../../Firebase/firebase.config'; // Import Firestore config
//import { Firestore } from 'firebase/firestore/lite';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState(null); // Add userRole state
    const [loading, setLoading] = useState(true);

    // Create a new user and store their role in Firestore
    
    const createUser = async (email, password, role ) => {
      setLoading(true);
      try {
          const result = await createUserWithEmailAndPassword(auth, email, password);
          const newUser = result.user;
  
          // Save user role in Firestore
          await setDoc(doc(firestore, 'users', newUser.uid), {
              email: email,
              role: role,
          });
  
          setLoading(false);
          return result;
      } catch (error) {
          console.error("Error creating user:", error);
          setLoading(false);
          throw error; // Rethrow error to handle it in the component if needed
      }
  };
  

    // Sign in a user
    const signIn = async (email, password) => {
        setLoading(true);
        const result = await signInWithEmailAndPassword(auth, email, password);
        const currentUser = result.user;

        // Fetch user role from Firestore
        const userDoc = await getDoc(doc(firestore, 'users', currentUser.uid));
        if (userDoc.exists()) {
            setUserRole(userDoc.data().role); // Set the user role
        }

        setLoading(false);
        return result;
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            setUserRole(null); // Clear user role on logout
            setLoading(false);
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // Fetch user role if logged in
                const userDoc = await getDoc(doc(firestore, 'users', currentUser.uid));
                if (userDoc.exists()) {
                    setUserRole(userDoc.data().role);
                }
            } else {
                setUserRole(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        userRole, // Provide userRole to the context
        loading,
        createUser,
        signIn,
        logout,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
