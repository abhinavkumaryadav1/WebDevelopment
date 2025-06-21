import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/ContactUs.jsx'
import User from './Component/User/User.jsx'


const router=  createBrowserRouter([{
  path: '/',
  element:<Layout />,

  
  children:[
    {
  index: true,
  element: <Home />      //this is to default land to home page after the router routes to just empty outlet (outlrt is in layout)
},
  {
    path:'Home',
    element:<Home />
  },
  {
    path:'About',
    element:<About />
  },
{
  path:'Contact',
  element: <Contact />
},
{
  path:'User/:Userid',
  element: <User/>
}
]

  }])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
