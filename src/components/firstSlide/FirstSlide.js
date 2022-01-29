import React from 'react';
import styles from './firstSlide.module.css'
import arrow from '../../img/page1/arrow.png'

function FirstSlide({style}) {
    return (
        <div style={style} className={styles.slide}>
            <div className={styles.wrapper}>
                <span className={styles.helo_txt}>привет,</span><br/>
                <span className={styles.title}>
                    <span>это <span className={styles.fat}>не</span></span><br/>
                    <span>коммерческое</span><br/>
                    <span className={styles.last_row_flex}>
                        <span>задание</span>
                        <span className={styles.button_flex_wr}>
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