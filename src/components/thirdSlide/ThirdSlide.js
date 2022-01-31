import React, { useState } from 'react';
import styles from './thirdSlide.module.css'
import arrow from '../../img/page1/arrow.png'
import bag from '../../img/page3/bag.png'
import plate from '../../img/page3/plate.png'
import bubble1 from '../../img/page3/bubble1.png'
import bubble2 from '../../img/page3/bubble2.png'
import bubble3 from '../../img/page3/bubble3.png'
import bubble4 from '../../img/page3/bubble4.png'
import bubble5 from '../../img/page3/bubble5.png'
import bubble6 from '../../img/page3/bubble6.png'
import bubble7 from '../../img/page3/bubble7.png'
import bubble8 from '../../img/page3/bubble8.png'
import bottle from '../../img/page3/bottle.png'
import exit from '../../img/page3/exit.png'
import {ReactComponent as Next} from '../../svg/next.svg'

function ThirdSlide({style}) {
    const [modalStatus, setModalStatus] = useState(false)
    const [dataPage, setDataPage] = useState(0)

    const data = [
        [
            {title: '01', subtitle: 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit'},
            {title: '02', subtitle: 'Faucibus pulvinar elementum integer enim'},
            {title: '03', subtitle: 'Faucibus pulvinar elementum integer enim'},
        ],
        [
            {title: '04', subtitle: 'Mi bibendum neque egestas congue quisque  egestas diam'},
            {title: '05', subtitle: 'Venenatis lectus magna fringilla urna'},
            {title: '06', subtitle: 'Venenatis lectus magna fringilla urna'},
        ]
    ]

    function Content({title, subtitle}) {
        return (
            <div className={styles.content}>
                <div className={styles.content_title}>{title}</div>
                <div className={styles.content_subtitle}>{subtitle}</div>
            </div>
        )
    }

    function Modal({}) {
        return (
            <div>
                <div className={styles.modalwrapper}>
                    <div className={styles.modal}>
                        <div  className={styles.exit}><img onClick={()=>setModalStatus(!modalStatus)} src={exit} width={40}/></div>
                        <div className={styles.flexcolumn}>
                            {data[dataPage].map(item => <Content key={item.title} title={item.title} subtitle={item.subtitle}/>)}
                            <div className={styles.paginationwrapper}>
                                <Next onClick={()=>{if(dataPage===1){setDataPage(0)}}} width={22} className={styles.reversenext}/>
                                <div style={dataPage===0? {backgroundColor: 'rgb(252, 109, 169)', border: 'none'}:{}} onClick={()=>setDataPage(0)} className={styles.Ellipse}/>
                                <div style={dataPage===1? {backgroundColor: 'rgb(252, 109, 169)', border: 'none'}:{}} onClick={()=>setDataPage(1)} className={styles.Ellipse}/>
                                <Next onClick={()=>{if(dataPage===0){setDataPage(1)}}} width={22}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div style={style} className={styles.slide}>
        <img src={bubble1} className={styles.bubble1}/>
        <img src={bubble2} className={styles.bubble2}/>
        <img src={bubble3} className={styles.bubble3}/>
        <img src={bubble4} className={styles.bubble4}/>
        <img src={bubble5} className={styles.bubble5}/>
        <img src={bubble6} className={styles.bubble6}/>
        <img src={bubble7} className={styles.bubble7}/>
        <img src={bubble8} className={styles.bubble8}/>
        <img src={bottle} className={styles.bottle}/>
        {modalStatus ? <Modal/> : <div></div>}
            <div>
                <div className={styles.title1}>{modalStatus ? 'ПРЕИМУЩЕСТВА' : 'КЛЮЧЕВОЕ СООБЩЕНИЕ'}</div>
                <div className={styles.title2}>BREND<span className={styles.brenttitle}>XY</span></div>
            </div>
            <div className={styles.contentgrid}>
                <div className={styles.bigblock}><img className={styles.plate_img} src={plate}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</div>
                <div className={styles.smallblock}><img className={styles.bag_img} src={bag}/>Ut enim ad mini</div>
                <span className={styles.button_flex_wr}>
                            <span className={styles.button_label} onClick={()=>setModalStatus(!modalStatus)}>
                                <button className={styles.next_button}><img src={arrow} width={20}/></button>
                                <span className={styles.button_text}>Подробнее</span>
                            </span>
                </span>
            </div>
        </div>
    );
}

export default ThirdSlide;