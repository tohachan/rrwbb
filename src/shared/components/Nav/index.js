import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";

import LoadablePage from 'shared/containers/pages/LoadablePage/loadable';
import FullPage from 'shared/containers/pages/FullPage/loadable';

function Nav (props) {
    const [open, setOpen] = useState(false);

    const { locale, changeLocale, setLocale, i18n } = props;

    function handleChangeLocale(locale) {
        if (!Object.keys(i18n[locale]).length) {
            changeLocale(locale);
        } else {
            setLocale(locale);
        }
    }

    return (
        <nav className="navbar is-warning is-fixed-top">
            <div className="container">
                <div className="navbar-brand">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://rrwbb.com"
                        className="navbar-item"
                        >
                        <img src="/images/rwb_colorless.svg" alt="RWB logo" />
                    </a>

                    <span
                        onClick={() => setOpen(!open)}
                        className={"navbar-burger burger" + (open ? ' is-active' : '')}
                        data-target="navbarMenuHeroA"
                        >
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div
                    id="navbarMenuHeroA"
                    onClick={() => setOpen(false)}
                    className={"navbar-menu" + (open ? ' is-active' : '')}
                    >
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/">Home</Link>
                        <Link className="navbar-item" to="/static-page">Static</Link>
                        <Link
                            className="navbar-item"
                            to="/dynamic-page"
                            onMouseOver={() => {
                                LoadablePage.preload();
                            }}
                            >Loadable</Link>
                        <Link
                            className="navbar-item"
                            to="/fullpage"
                            onMouseOver={() => {
                                FullPage.preload();
                            }}
                            >Full Page</Link>

                        <span className="navbar-item">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/tohachan/rrwbb"
                                className="button is-light is-inverted"
                                >
                                <FaGithub />

                                <span>Github</span>
                            </a>
                        </span>

                        <a
                            className={"navbar-item" + (locale === 'en-US' ? ' is-active' : '')}
                            onClick={() => handleChangeLocale('en-US')}
                            >EN</a>
                        <a
                            className={"navbar-item" + (locale === 'ru-RU' ? ' is-active' : '')}
                            onClick={() => handleChangeLocale('ru-RU')}
                            >RU</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
