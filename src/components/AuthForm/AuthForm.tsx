import React, {FC, useState} from "react";
import {ICredentials} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import {authService} from "../../services";
import {localStorageItems} from "../../constants";
import style from './AuthForm.module.css';
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../redux";

const AuthForm: FC = () => {
    const {register, handleSubmit, reset} = useForm<ICredentials>({
        mode: 'all'
    });
    const navigate = useNavigate();
    const [formError, setFormError] = useState<string>('');
    const dispatch = useAppDispatch();

    const submitForm = async (user: ICredentials) => {
        try {
            if (!authService.isUserValid(user)) {
                setFormError('Username or password is not valid.');
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
                <label>Username
                    <input type={'text'}
                           placeholder={'username...'} {...register('username', {required: "Please enter your name."})}/>
                </label>
            </div>
            <div>
                <label>Password
                    <input type={'password'}
                           placeholder={'password...'} {...register('password', {required: "Please enter your password."})}/>
                </label>
            </div>
            <button className={style.btnAuth}>ENTER</button>

            <div className={style.error}>
                <div>{formError && <span>{formError}</span>}</div>
            </div>
        </form>
    );
};

export {AuthForm};