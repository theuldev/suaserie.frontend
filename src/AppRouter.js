
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthGuard from './services/guards/auth.guard';


//Páginas


import Login from './pages/Login/Login';
import InitialPage from './pages/InitialPage/InitialPage';
import SerieSelected from './pages/SerieSelected/SerieSelected';
import SeriesView from './pages/SeriesView/SerieView';
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Disliked from './pages/MyListsPages/Disliked/Disliked'
import Wish from './pages/MyListsPages/Wish/Wish'
import Liked from './pages/MyListsPages/Liked/Liked'
import Watched from './pages/MyListsPages/Watched/Watched'




const AppRouter = () => {
    return (
        <Routes>
            <Route exact path='/' element={<InitialPage />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/cadastro' element={<Register />} />

            <Route element={<AuthGuard />}>
                <Route exact path='/serie' element={<SeriesView />} />
                <Route exact path='/series' element={<SeriesView />} />

                <Route exact path='/perfil' element={<Profile />} />
                <Route exact path='/series/:id' element={<SerieSelected />} />

                <Route exact path='/piores' element={<Disliked />} />
                <Route exact path='/series/piores/:id' element={<SerieSelected />} />
                <Route exact path='/favoritas' element={<Liked />} />
                <Route exact path='/favoritas/:id' element={<SerieSelected />} />

                <Route exact path='/assistidas' element={<Watched />} />
                <Route exact path='/assistidas/:id' element={<SerieSelected />} />

                <Route exact path='/desejoVer' element={<Wish />} />
                <Route exact path='/desejoVer/:id' element={<SerieSelected />} />


            </Route>
        </Routes>
    )
}

export default AppRouter;