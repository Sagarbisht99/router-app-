import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Github, { githubinfo } from './Component/Github.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
       path : "",
       element : <Home/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      } ,
      {
        loader : githubinfo , 
        path : "/github",
        element : <Github/>,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router = {router}/>
  </React.StrictMode>
)
