import { createBrowserRouter } from 'react-router-dom';



// Páginas
import InitialPage from './pages/InitialPage/InitialPage.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Profile from "./pages/Profile/Profile";
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import SerieView from './pages/SerieView/SerieView.jsx';
import SerieSelected from './pages/SerieSelected/SerieSelected.jsx';
import ScreenModel from './components/General/ScreenModel/ScreenModel.jsx';

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
    path: '/serie',
    element: <SerieView/>
  },
  {
    path: '/serieSelected',
    element: <SerieSelected/>
  },
  {
    path: '/series',
    element: <ScreenModel/>,
    // children: [

    // ]   
  },
  {
    path: '/serieSelected',
    element:<SerieSelected/>
  }


]);