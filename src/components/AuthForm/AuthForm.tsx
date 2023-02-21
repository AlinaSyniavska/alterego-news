import React, {FC, useState} from "react";
import {ICredentials} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import {authService} from "../../services";
import {localStorageItems} from "../../constants";
import style from './AuthForm.module.css';
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../redux";
import {useTranslation} from "react-i18next";

const AuthForm: FC = () => {
    const {t} = useTranslation('common');
    const {register, handleSubmit, reset} = useForm<ICredentials>({
        mode: 'all'
    });
    const navigate = useNavigate();
    const [formError, setFormError] = useState<string>('');
    const dispatch = useAppDispatch();

    const submitForm = async (user: ICredentials) => {
        try {
            if (!authService.isUserValid(user)) {
                const error = t("authError.message");
                setFormError(error);
                return;
            }

            await authService.loginUser(localStorageItems.LOGIN_USER, user);
            dispatch(authActions.setAuth());
            reset();
            navigate('/profile', {replace: true});
        } catch (e: any) {
            console.error(e.response);
        }
    };

    const clearFormErrors = () => {
        setFormError('');
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} onChange={clearFormErrors} className={style.authForm}>
            <div>
                <label>{t('authForm.username')}
                    <input type={'text'} {...register('username', {required: "Please enter your name."})}/>
                </label>
            </div>
            <div>
                <label>{t('authForm.password')}
                    <input type={'password'} {...register('password', {required: "Please enter your password."})}/>
                </label>
            </div>
            <button className={style.btnAuth}>{t('authForm.btnPress')}</button>

            <div className={style.error}>
                <div>{formError && <span>{formError}</span>}</div>
            </div>
        </form>
    );
};

export {AuthForm};