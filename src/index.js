import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css'

// Rotas da aplicação:
// Ainda não aplciadas 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Páginas
import InitialPage from './pages/InitialPage/InitialPage.jsx';
import Login from './pages/Login/Login.jsx';
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



]);


ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));




