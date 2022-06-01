import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Vietnamese from "../assets/locales/vn/translations.json";
import EngLish from "../assets/locales/en/translations.json";


export const Context = React.createContext();
const local = navigator.language;

let lang;
if (local === "en-Us") {
    lang = EngLish;
} else {
    lang = Vietnamese;
}

const Intl = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLang(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "en-Us") {
            setMessages(EngLish);
        } else {
            setMessages(Vietnamese);
        }
    }

    return (
        <Context.Provider value={{locale, selectLang}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    )
}

export default Intl;

