import React, { useState } from 'react';
import styles from './firstSlide.module.css'
import arrow from '../../img/page1/arrow.png'
import bakti_1 from '../../img/page1/bakti_1.png'
import Layer4 from '../../img/page1/Layer4.png'
import Layer4copy from '../../img/page1/Layer4copy.png'
import Layer4copy2 from '../../img/page1/Layer4copy2.png'
import Layer5 from '../../img/page1/Layer5.png'
import Layer7 from '../../img/page1/Layer7.png'
import Layer8 from '../../img/page1/Layer8.png'
import pink_sperm from '../../img/page1/pink_sperm.png'
import pink_sperm_1 from '../../img/page1/pink_sperm_1.png'


function FirstSlide({style, clickHandler}) {
    return (
        <div style={style} className={styles.slide}>
        <img src={bakti_1} className={styles.bakti_1}/>
        <img src={Layer4} className={styles.Layer4}/>
        <img src={Layer4copy} className={styles.Layer4copy}/>
        <img src={Layer4copy2} className={styles.Layer4copy2}/>
        <img src={Layer5} className={styles.Layer5}/>
        <img src={Layer7} className={styles.Layer7}/>
        <img src={Layer8} className={styles.Layer8}/>
        <img src={pink_sperm} className={styles.pink_sperm}/>
        <img src={pink_sperm_1} className={styles.pink_sperm_1}/>
            <div className={styles.wrapper}>
                <span className={styles.helo_txt}>привет,</span><br/>
                <span className={styles.title}>
                    <span>это <span className={styles.fat}>не</span></span><br/>
                    <span>коммерческое</span><br/>
                    <span className={styles.last_row_flex}>
                        <span>задание</span>
                        <span className={styles.button_flex_wr} onClick={()=>clickHandler()}>
                            <span className={styles.button_label}>
                                <button className={styles.next_button}><img src={arrow} width={20}/></button>
                                <span className={styles.button_text}>Что дальше?</span>
                            </span>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    );
}

export default FirstSlide;