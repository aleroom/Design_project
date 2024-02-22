import React, { useState } from 'react';
import image1 from "../../assets/image1.png";
import circle from "../../assets/circle.png";
import style from "../Slider/slider.module.css";

export default function Slider (){
  const images = [
    circle,
    image1,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className={style.slider}>
        <div className={style.slider_wrap}>
            <div className={style.slider_btn}>
                <button onClick={prevImage}>Prev</button>
                <button onClick={nextImage}>Next</button>
            </div>

            <div className={style.slider_content}>
                <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
                <h3>Логотип Miriofi</h3>
                <p>Логотип Miriofi — уникальное творение для косметической линии из Израиля, вдохновленное пионами. Элегантный и стильный, он интегрирует образ цветка в уникальный графический элемент. Цветовая палитра нежна, а линии подчеркивают утонченность продукции. Этот логотип идеально отражает стиль и философию бренда, привлекая внимание к его уникальности.</p>

            </div>
        
      </div>
      
    </div>
  );
};
