import React from 'react';
import ReactDOM from 'react-dom/client';
import {setupStore} from "./redux";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import {App} from './App';

i18next.init({
    interpolation: {escapeValue: false},  // React already does escaping
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <App/>
            </I18nextProvider>
        </BrowserRouter>
    </Provider>
);

