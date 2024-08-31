import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Roots from './Components/Roots/Roots.jsx';
import Home from './Components/Pages/Home.jsx';

import Teachers_info from './Components/Pages/Teachers_info.jsx';
import Contact_us from './Components/Pages/Contact_us.jsx';
import About_us from './Components/Pages/About_us.jsx';

import Teacher_login from './Components/Pages/teacher_login.jsx';
import Student_login from './Components/Pages/student_login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/teacher_info",
        element: <Teachers_info></Teachers_info>
        
      },
      {
        path: "/contact",
        element:<Contact_us></Contact_us>
        
      },
      {
        path: "/about",
        element:<About_us></About_us>
        
      },
      {
        path: "/teacher_login",
    element:<Teacher_login></Teacher_login>, 
       
      },
      {
        path: "/student_login",
    element:<Student_login></Student_login>, 
       
      },
      
     
    
    ],
    
    
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
