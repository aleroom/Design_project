import React from 'react';
import style from '../FirstBlock/index.module.css';
import hero from "../../assets/hero.png"

export default function FirstBlock() {
  return (
    <section className={style.fBlock}>
        <div className={style.fBlock_wrap}>
            <div className={style.fBlock_left}>
                <h1>Создадим <br/> 
                  продающий дизайн <br/> 
                  с  wow эффектом для вашего бизнеса</h1>

                  <div className={style.fBlock_links}>
                    <div className={style.logo_link}>
                       <a href="">логотипы</a>
                    </div>

                  </div>
            </div>

            <div className={style.fBlock_right}>
                <img src={hero} alt="img" />
            </div>

        </div>

        
        
    </section>
  )
}
