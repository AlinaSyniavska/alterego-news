import {FC} from "react";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

import style from './Header.module.css';

const Header: FC = () => {
    const {t, i18n} = useTranslation('common');

    return (
        <div className={style.headerContainer}>
            <NavLink to='/home'
                     style={({isActive}) => ({
                         color: isActive ? 'white' : "#363636"
                     })}>
                {t('headerItems.home')}
            </NavLink>
            <NavLink to='news'
                     style={({isActive}) => ({
                         color: isActive ? 'white' : '#363636'
                     })}>
                {t('headerItems.news')}
            </NavLink>
            <NavLink to="profile"
                     style={({isActive}) => ({
                         color: isActive ? 'white' : '#363636'
                     })}>
                {t('headerItems.profile')}
            </NavLink>
        </div>
    );
};

export {Header};