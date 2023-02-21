import React from 'react';
import ReactDOM from 'react-dom/client';
import {setupStore} from "./redux";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import {App} from './App';
import common_uk from "./translations/uk/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        uk: {
            common: common_uk
        },
    },
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

