import React from 'react'
import style from "./header.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeLocale} from "../../store/localeSlice/localeSlice";
import {headerLocales} from "./Header.locale";
import logo from "../../assets/logo.png"

export default function Header() {
    const dispatch = useDispatch()

    const locale = useSelector(state => state.locale.locale)
    return (
        <section className={style.header}>
            <div className={style.header_wrap}>
                <div className={style.header_logo}>
                    <img
                        src={logo}
                        alt=""/>
                </div>

                <nav className={style.header_nav}>
                    <ul className={style.header_list}>
                        <li className={style.header_item}>
                            <a href="#main" className={style.header_main}>{headerLocales[locale].main}</a>
                        </li>

                        <li className={style.header_item}>
                            <a href="#services" className={style.header_services}>{headerLocales[locale].services}</a>
                        </li>

                        <li className={style.header_item}>
                            <a href="#projects" className={style.header_projects}>{headerLocales[locale].projects}</a>
                        </li>

                        <li className={style.header_item}>
                            <a href="#contacts" className={style.header_contacts}>{headerLocales[locale].contacts}</a>
                        </li>

                    </ul>

                    <ul className={style.header_language}>
                        <li className={style.header_item}>
                            <button className={style.header_ru} onClick={() => dispatch(changeLocale("ru"))}>Ru</button>
                        </li>

                        <li className={style.header_item}>
                            <button className={style.header_en} onClick={() => dispatch(changeLocale("en"))}>En</button>
                        </li>
                    </ul>

                </nav>

                <div>

                </div>


            </div>
        </section>
    )
}
