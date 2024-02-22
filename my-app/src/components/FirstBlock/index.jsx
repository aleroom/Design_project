import React from 'react';
import style from '../FirstBlock/index.module.css';
import hero from "../../assets/hero.png";
import { firstBlockLocales } from './FirstBlock.locale';
import {useDispatch, useSelector} from "react-redux";


export default function FirstBlock() {
  const dispatch = useDispatch()

  const locale = useSelector(state => state.locale.locale)
  return (
    <section className={style.fBlock}>
        <div className={style.fBlock_wrap}>
            <div className={style.fBlock_left}>
                <h1>{firstBlockLocales[locale].text}</h1>

                  <div className={style.fBlock_links}>
                    <div className={style.logo_link}>
                       <a href="">{firstBlockLocales[locale].logo}</a>
                    </div>

                    <div className={style.logo_link}>
                       <a href="">{firstBlockLocales[locale].sities}</a>
                    </div>    

                    <div className={style.logo_link}>
                       <a href="">{firstBlockLocales[locale].pres}</a>
                    </div>

                  </div>

                  <div className={style.FB_buttons}>
                    <button className={style.FB_offer}>
                      <p>{firstBlockLocales[locale].textOffer}</p>   
                    </button>
                    <button className={style.FB_profile}>
                      <p>{firstBlockLocales[locale].textProfile}</p>    
                    </button>
                  </div>

            </div>

            <div className={style.fBlock_right}>
                <img src={hero} alt="img" />
            </div>


            
            

        </div>

        
        
    </section>
  )
}
