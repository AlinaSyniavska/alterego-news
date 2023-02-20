import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {AuthPage, HomePage, NewsPage, ProfilePage} from "./pages";
import {RequireAuth} from "./hoc";


const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'news'} element={<NewsPage/>}/>
                <Route path={'auth'} element={<AuthPage/>}/>
                <Route path={'profile'} element={<RequireAuth><ProfilePage/></RequireAuth>}/>
            </Route>
        </Routes>
    );
};

export {App};