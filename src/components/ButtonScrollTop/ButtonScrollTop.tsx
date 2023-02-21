import {FC, useEffect} from "react";
import React from "react";

import {commonHelper} from "../../helpers";
import style from './ButtonScrollTop.module.css';

const ButtonScrollTop: FC = () => {

    useEffect(() => {
        const arrTop = document.getElementById('arrowTop') as HTMLElement;

        window.addEventListener('scroll', () => {
            arrTop.hidden = (window.scrollY < document.documentElement.clientHeight / 2);
        });
    }, [])

    return (
        <React.Fragment>
            <button className={style.arrow} id={'arrowTop'} hidden={true} onClick={commonHelper.moveToPageTop}>
                ⇧
            </button>
        </React.Fragment>
    );
};

export {ButtonScrollTop};