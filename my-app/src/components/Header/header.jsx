import React from 'react'
import style from "./header.module.css";

export default function Header() {
  return (
    <section className={style.header}>
        <div className={style.header_wrap}>
            <div className={style.header_logo}>
                <img src="https://s3-alpha-sig.figma.com/img/0b79/1935/ad4c1e296d38a4565fc338e6df855e29?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q4WktSWhu1bCBsHxGd32raJcuIG8yCxOJig87-oWC0B5TGTWyK0cAEv-BdAB0Nq-bHmRJ8uX2TdkeW2hI4~AfJ4VY1oD626fvlCn7DWMYhCzL~t9k99SieGmMg5gK-~1-wJphn73cXA~2qQkNHdZpBP8biFIlyOFWlBxsakuDz4f8YofG~IVgONf2mf7IuV6lk3XqB2JmzSod5kR9iyoq9QOY9O~Z5d3-tM-lkr5aJbtgQdNJfJ6DTGQo-kU2j03Rv5WcsY~kJVjDYbSFRK-WnWRJyvYnlT4cHWDsmWFvnDw-Q0oh-r0Xc7dTsq8Q-m6gCY7l5ME4a0YR45nhzwCiQ__" alt="" />
            </div>

            <div className={style.header_nav}>
                <div className={style.header_main}><button>Главная</button></div>
                <div className={style.header_services}><button>Услуги</button></div>
                <div className={style.header_projects}><button>Проекты</button></div>
                <div className={style.header_contacts}><button>Контакты</button></div>

                <div className={style.header_language}>
                    <button className={style.header_ru}>Ru</button>
                    <button className={style.header_en}>En</button>
                    
                </div>   
            </div>

            <div>

            </div>


        </div>
    </section>
  )
}