import React from "react"

import './App.css';   


// Rotas da aplicação:
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Páginas
import InitialPage from './pages/InitialPage/InitialPage.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
// -------

// Rotas:
const router = createBrowserRouter([
  {
    path: '/',
    element: <InitialPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Register />
  },


]);




const App = () => (
  <>
   <RouterProvider router={router} />
  </>

);

export default App