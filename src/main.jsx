import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Homepage from './pages/Homepage.jsx'
import Header from './components/Header.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,//App is a layout
    children:[
      {
        index: true,
        element:<Homepage />
      },
      {
        path: "header",
        element: <Header />
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
