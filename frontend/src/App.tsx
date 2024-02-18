import { useState } from 'react'
import './App.css'
import { Login } from "./Components/Login.tsx"
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import Routes from "./Components/Routes.tsx"

const router = createBrowserRouter(Routes);

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
