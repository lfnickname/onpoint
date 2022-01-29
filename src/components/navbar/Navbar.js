import React from 'react';
import styles from './navbar.module.css'
import {ReactComponent as Home} from '../../svg/home.svg'
import {ReactComponent as Line} from '../../svg/line.svg'

function Navbar() {
    return (
        <span>
            <span className={styles.flex}>
                <span className={styles.home}><Home width={30}/></span>
                <span className={styles.line}><Line height={40}/> </span>
                <span className={styles.name}>PROJECT</span>
            </span>
        </span>
    );
}

export default Navbar;