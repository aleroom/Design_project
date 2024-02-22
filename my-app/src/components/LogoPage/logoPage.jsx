import React from 'react';
import style from "../LogoPage/logoPage.module.css";
import card from "../../assets/card.png";
import logocard from "../../assets/logocard.png";

export default function LogoPage() {
  return (
    <section className={style.logoPage}>
      <div className={style.logoPage_wrap}>      
        <div className={style.logoPage_left}>
          <div className={style.logoPage_title}>
            <h2> Уникальный <br/>
            <span>Логотип за 24 часа</span>
            </h2>
            <p>Хотите выразить свою уникальность через логотип, но нет времени ждать? 
              Мы предлагаем создание вашего уникального логотипа всего за 24 часа! Наша команда опытных дизайнеров готова воплотить ваши идеи в стильный и запоминающийся логотип, который подчеркнет вашу индивидуальность и поможет выделиться среди конкурентов. 
              Закажите свой логотип прямо сейчас и завоюйте внимание клиентов в рекордные сроки!</p>

          </div>

        </div>

        <div className={style.logoPage_right}>
          <div className={style.logoPage_img}>
            <img src={card} alt="" />
          </div>
          <div>
            <img src='' alt="" />
          </div>
        </div>


      
      </div>
    </section>
  )
}
