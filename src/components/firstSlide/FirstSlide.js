import React from 'react';
import styles from './firstSlide.module.css'

function FirstSlide({style}) {
    return (
        <div style={style} className={styles.slide}>
            <div className={styles.innerslide}>slide</div>
        </div>
    );
}

export default FirstSlide;