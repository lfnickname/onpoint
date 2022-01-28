import React from 'react';
import styles from './thirdSlide.module.css'

function ThirdSlide({style}) {
    return (
        <div style={style} className={styles.slide}>
            third slide
        </div>
    );
}

export default ThirdSlide;