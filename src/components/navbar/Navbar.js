import React from 'react';
import styles from './navbar.module.css'
import {ReactComponent as Home} from '../../svg/home.svg'
import {ReactComponent as Line} from '../../svg/line.svg'

function Navbar({clickHandler}) {
    return (
        <span>
            <span className={styles.flex}>
                <span className={styles.home} onClick={()=>clickHandler()}><Home width={25}/></span>
                <span className={styles.line}><Line height={25}/> </span>
                <span className={styles.name}>PROJECT</span>
            </span>
        </span>
    );
}

export default Navbar;