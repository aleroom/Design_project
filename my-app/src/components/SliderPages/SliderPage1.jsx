import React from 'react';
import circle from "../../assets/circle.png";
import style from "../SliderPages/SliderPage1.jsx";

export default function SliderPage1() {
  return (
    <section className={style.sliderPage1}>
        <div className={style.sliderPage1_wrap}>
            <div className={style.sliderPage1_left}>
                <img src={circle} alt="" />
            </div>
            <div className={style.sliderPage1_right}>

            </div>
        </div>
    </section>
  )
}
