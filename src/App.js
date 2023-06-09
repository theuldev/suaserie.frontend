import React from "react"
import './App.css';


// Rotas da aplicação:
import { RouterProvider } from 'react-router-dom';
import { router } from "./Router";


// -------






const App = () => {
  
  return (
    <>
      <RouterProvider router={router} />
    </>

  )
};

export default App