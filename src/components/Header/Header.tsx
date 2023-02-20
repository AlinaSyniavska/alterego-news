import {FC} from "react";
import {NavLink} from "react-router-dom";

import style from './Header.module.css';

const Header: FC = () => {
    return (
        <div className={style.headerContainer}>
            <NavLink to='/home'
                     style={({isActive}) => ({
                         color: isActive ? 'white' : "#363636"
                     })}>
                Home
            </NavLink>
            <NavLink to='news'
                     style={({isActive}) => ({
                         color: isActive ? 'white' : '#363636'
                     })}>
                News
            </NavLink>
            <NavLink to="profile"
                     style={({isActive}) => ({
                         color: isActive ? 'white' : '#363636'
                     })}>
                Profile
            </NavLink>
        </div>
    );
};

export {Header};