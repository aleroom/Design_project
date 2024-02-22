import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "../LogoPage/logoPage.module.css";
import card from "../../assets/card.png";
import logocard from "../../assets/logocard.png";
import {LogoPageLocales} from "../LogoPage/LogoPage.locale.js";


export default function LogoPage() {
  const dispatch = useDispatch()

  const locale = useSelector(state => state.locale.locale)

  return (
    <section className={style.logoPage}>
      <div className={style.logoPage_wrap}>      
        <div className={style.logoPage_left}>
          <div className={style.logoPage_title}>
            <h2> {LogoPageLocales[locale].title} <br/>
            <span> { LogoPageLocales[locale].desc } </span>
            </h2>
            <p>{LogoPageLocales[locale].text}</p>
          </div>

          <div className={style.logoPage_btn}>
            <button>Подробнее</button>
            <button>Заказать логотип</button>
          </div>

        </div>

        <div className={style.logoPage_right}>
          <div className={style.logoPage_img}>
            <img src={card} alt="" />
          </div>
          <div className={style.logoPage_image}>
            <img src={logocard} alt="" />
          </div>
        </div>


      
      </div>
    </section>
  )
}
