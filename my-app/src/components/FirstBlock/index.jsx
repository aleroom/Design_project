import React from 'react';
import style from '../FirstBlock/index.module.css';

export default function FirstBlock() {
  return (
    <section className={style.fBlock}>
        <div className={style.fBlock_wrapp}>
            <div className={style.fBlock_left}>
                <h1></h1>
            </div>

            <div className={style.fBlock_right}>
                <img src="https://s3-alpha-sig.figma.com/img/ec59/69b6/469f20cd7fc7b02bfe829302a5023ed4?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K6vtrCsjKcH0sfoNAUlp-hFAnQi2NWoiA8aNSCrlPe5LZrxz~pUVroXuYmsgPmChRGsONKLeJeb9vRhWTctYQK-iHmMF3F6DLS~BUrbdew58E2RA4FH037D8Pa-ixG2EmBE5F31E1R179W-32uhBInXcVqL6SI3~esWM90~3VEJG5TdX2aFyJwjQmNkQ2wD4zaOHzyNsPKplAwPYQbtPUXGiBJ30jcuZ-BYK~8jp-NMEsmTjxCHovvk4Dg6TNJ-gA~oWltJS3hOUR8d6pBeR83DcIU-eDYYMqy6iHdUSocrEkySUW7OAACNm4j8qVSiN02q28yxtVRL1RppWy9l8BA__" alt="img" />
            </div>

        </div>
        
    </section>
  )
}
