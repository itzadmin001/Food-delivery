import React from 'react'
import GlassBugurCard from "./Components/Website/GlassBurgurCard"
import Login from "./Components/Website/Login"
import Signup from "./Components/Website/Signup"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'




function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <GlassBugurCard />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
