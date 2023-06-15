import { createBrowserRouter } from 'react-router-dom';



// Páginas
import InitialPage from './pages/InitialPage/InitialPage.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Profile from "./pages/Profile/Profile";
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import SerieView from './pages/SeriesView/SerieView.jsx';
// import InfoSerie from './pages/InfoSerie/InfoSerie.jsx';
import ScreenModel from './components/General/ScreenModel/ScreenModel.jsx';
import Disliked from './pages/MyListsPages/Disliked/Disliked.jsx';
import Liked from './pages/MyListsPages/Liked/Liked.jsx';
import Wish from './pages/MyListsPages/Wish/Wish.jsx';
import Watched from './pages/MyListsPages/Watched/Watched.jsx';
import SerieSelected from './pages/SerieSelected/SerieSelected.jsx';
// Rotas:
export const router = createBrowserRouter([
  {
    path: '/',
    element: <InitialPage />,
    errorElement: <ErrorPage />,
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
    element: <Profile />
  },
  {
    path: '/serie',
    element: <SerieView />
  },
 
  {
    path: '/series',
    element: <SerieView />,
    // children: [

    // ]   
  },
  {
    path: '/series/:id',
    element: <SerieSelected />
  },
  {
    path: '/piores',
    element: <Disliked  />
  },
  {
    path: '/series/piores/:id',
    element: <SerieSelected />
  },

  {
    path: '/favoritas',
    element: <Liked  />
  },
  {
    path: '/series/favoritas/:id',
    element: <SerieSelected />
  },
  {
    path: '/desejoVer',
    element: <Wish  />
  },
  {
    path: '/series/desejoVer/:id',
    element: <SerieSelected />
  },
  {
    path: '/assistidas',
    element: <Watched  />
  },
  {
    path: '/series/assistidas/:id',
    element: <SerieSelected />
  },


]);