import React from "react"

import './App.css';   


// Rotas da aplicação:
import { RouterProvider } from 'react-router-dom';
import { router } from "./Router";


// -------






const App = () => (
  <>
   <RouterProvider router={router} />
  </>

);

export default App