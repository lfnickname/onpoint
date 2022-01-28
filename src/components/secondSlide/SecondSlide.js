import React from 'react';
import styles from './secondSlide.module.css'

function SecondSlide({style}) {
    return (
        <div style={style} className={styles.slide}>
            second slide
        </div>
    );
}

export default SecondSlide;