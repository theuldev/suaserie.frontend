import { createBrowserRouter } from 'react-router-dom';



// Páginas
import InitialPage from './pages/InitialPage/InitialPage.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Profile from "./pages/Profile/Profile";
import Series from "./pages/Series/Series";
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

// Rotas:
export const router = createBrowserRouter([
  {
    path: '/',
    element: <InitialPage />,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Register />
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/series',
    element: <Series/>,
    // children: [

    // ]
  }


]);