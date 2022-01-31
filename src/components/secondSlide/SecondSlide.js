import React from 'react';
import styles from './secondSlide.module.css'
import spermpng from '../../img/page2/Layer3copy6.png'

function SecondSlide({style, currentPage}) {  
    return (
        <div style={style} className={styles.slide}>
            {currentPage===2 ? 
            <div>
                <img src={spermpng} className={`${styles.layer3copy2} ${styles.layer3copy2a}`}/>
                <img src={spermpng} className={`${styles.layer3copy3} ${styles.layer3copy3a}`}/>
                <img src={spermpng} className={`${styles.layer3copy4} ${styles.layer3copy4a}`}/>
                <img src={spermpng} className={`${styles.layer3copy5} ${styles.layer3copy5a}`}/>
                <img src={spermpng} className={`${styles.layer3copy6} ${styles.layer3copy6a}`}/>
            </div> 
            : 
            <div>
                <img src={spermpng} className={styles.layer3copy2}/>
                <img src={spermpng} className={styles.layer3copy3}/>
                <img src={spermpng} className={styles.layer3copy4}/>
                <img src={spermpng} className={styles.layer3copy5}/>
                <img src={spermpng} className={styles.layer3copy6}/>
            </div>}
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <div>текст</div>
                    <div>сообщения</div>
                </div>
                <div className={styles.text_back}></div>
                <div className={styles.scrollbarline}><div className={styles.scrollbarlineinner}/></div>
                <div className={styles.main}>
                        <div className={styles.text}>
                            <span style={{fontWeight: 'bold'}}>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </div>
                </div>
            </div>
        </div>
    );
}

export default SecondSlide;