import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Login} from "./pages/Login.tsx";
import {Homepage} from "./pages/Homepage.tsx";

function App() {

    const routes = createBrowserRouter([
        { path: '/login', element : <Login /> },
        { path: '/login', element : <Homepage /> },
    ])

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
