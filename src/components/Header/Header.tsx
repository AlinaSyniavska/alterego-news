import {FC} from "react";
import {NavLink} from "react-router-dom";

import style from './Header.module.css';

const Header: FC = () => {
    return (
        <div className={style.headerContainer}>
            <NavLink to='home'>Home</NavLink>
            <NavLink to='news'>News</NavLink>
            <NavLink to="profile">Profile</NavLink>
        </div>
    );
};

export {Header};