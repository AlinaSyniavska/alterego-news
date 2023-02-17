import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {HomePage} from "./pages/HomePage/HomePage";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
            </Route>
        </Routes>
    );
};

export {App};