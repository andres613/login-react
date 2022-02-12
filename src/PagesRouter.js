import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./PagesRouter.css";

import { Login } from './pages/login/Login';
import { Error404 } from './pages/multi/Error404';
import { ComingSoon } from './pages/multi/ComingSoon';
import { Main } from './pages/Main';


export const PagesRouter = () => {

    return (
        <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/main" element={<Main />} />
                <Route exact path="/other" element={<ComingSoon />} />
                <Route path="*" element={<Error404 error="404"/>} />
            </Routes>
        </Router>
        </>
    )
}



