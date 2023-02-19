import React, {FC} from "react";
import {ICredentials} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import {authService} from "../../services";
import {localStorageItems} from "../../constants";
import style from './AuthForm.module.css';

const AuthForm: FC = () => {
    const {register, handleSubmit, reset} = useForm<ICredentials>({
        mode: 'all'
    });
    const navigate = useNavigate();

    const submitForm = async (user: ICredentials) => {
        try {
            await authService.loginUser(localStorageItems.LOGIN_USER, user);
            reset();
            navigate('/', {replace: true});
        } catch (e: any) {
            console.error(e.response);
        }
    };

    return (
        <form onSubmit={handleSubmit(submitForm)} className={style.authForm}>
            <div>
                <label>Username
                    <input type={'text'} placeholder={'username...'} {...register('username')}/>
                </label>
            </div>
            <div>
                <label>Password
                    <input type={'password'} placeholder={'password...'} {...register('password')}/>
                </label>
            </div>
            <button>ENTER</button>
        </form>
    );
};

export {AuthForm};