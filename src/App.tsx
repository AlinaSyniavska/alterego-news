import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {HomePage, NewsPage} from "./pages";


const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'news'} element={<NewsPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};