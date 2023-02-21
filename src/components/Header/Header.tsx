import {FC} from "react";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

import style from './Header.module.css';
import {commonHelper} from "../../helpers";

const Header: FC = () => {
    const {t, i18n} = useTranslation('common');

    const selectENLanguage = () => {
        const btnEngLanguage = document.getElementById('eng') as HTMLElement;
        const btnUkrLanguage = document.getElementById('ukr') as HTMLElement;

        commonHelper.selectLanguage([btnUkrLanguage], btnEngLanguage, 'select');

        i18n.changeLanguage('en');
    }

    const selectUKLanguage = () => {
        const btnEngLanguage = document.getElementById('eng') as HTMLElement;
        const btnUkrLanguage = document.getElementById('ukr') as HTMLElement;

        commonHelper.selectLanguage([btnEngLanguage], btnUkrLanguage, 'select');

        i18n.changeLanguage('uk');
    }

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

            <div className={style.btnSelectLanguage}>
                <button id={'eng'} className={'select'} onClick={selectENLanguage}>EN</button>
                <button id={'ukr'} onClick={selectUKLanguage}>UK</button>
            </div>
        </div>
    );
};

export {Header};