import { useEffect, useState } from "react";
import FirstSlide from "../firstSlide/FirstSlide";
import Navbar from "../navbar/Navbar";
import SecondSlide from "../secondSlide/SecondSlide";
import ThirdSlide from "../thirdSlide/ThirdSlide";
import styles from './app.module.css'
import {ReactComponent as Logo} from '../../svg/logo.svg'
function App() {
  console.log('render main')
  const [firstSlideStyles, setFirstSlideStyles] = useState({left: '0'})
  const [secondSliderStyles, setSecondSliderStyles] = useState({left: '100%'})
  const [thirdSliderStyles, setThirdSliderStyles] = useState({left: '100%'})
  const [currentPage, setCurrentPage] = useState(1)
  const [touchStart, SetTouchStart] = useState()
  const [touchEnd, SetTouchEnd] = useState()
  const [appStyles, setAppStyles] = useState({
    backgroundPosition: '0% 0'
  })

  // Распознование и обработка горизонтального свайпа
  useEffect(()=> {
    if (((touchStart - touchEnd ) > 100) && currentPage<3) {
      rightSwipe()
    }
    else if (((touchStart - touchEnd) < -100) && currentPage>1) {
      leftSwipe()
    }
  }, [touchEnd]) 



  function rightSwipe () {
    if (currentPage===1){
      setCurrentPage(currentPage+1)
      setAppStyles({
        backgroundPosition: '50% 0',
        transition: 'background-position 0.5s'
      })
      setFirstSlideStyles({left: '-100%', transition: 'left 0.5s'})
      setSecondSliderStyles({left: '0', transition: 'left 0.5s'})
      
    }
    else if (currentPage===2){
      setCurrentPage(currentPage+1)
      setAppStyles({
        backgroundPosition: '100% 0',
        transition: 'background-position 0.5s'
      })
      setSecondSliderStyles({left: '-100%', transition: 'left 0.5s'})
      setThirdSliderStyles({left: '0', transition: 'left 0.5s'})
    }
    
  }
  
  function leftSwipe () {
    if (currentPage===3){
      setCurrentPage(currentPage-1)
      setAppStyles({
        backgroundPosition: '50% 0',
        transition: 'background-position 0.5s'
      })
      setSecondSliderStyles({left: '0', transition: 'left 0.5s'})
      setThirdSliderStyles({left: '100%', transition: 'left 0.5s'})
    }
    else if (currentPage===2){
      setCurrentPage(currentPage-1)
      setAppStyles({
        backgroundPosition: '0% 0',
        transition: 'background-position 0.5s'
      })
      setFirstSlideStyles({left: '0%', transition: 'left 0.5s'})
      setSecondSliderStyles({left: '100%', transition: 'left 0.5s'})
      
    }
  }

  // Отработка клика по Home

  function navClickHandler(){
    if (currentPage==2) leftSwipe()
    else if (currentPage==3) {
      console.log('here')
      setCurrentPage(1)
      setAppStyles({
        backgroundPosition: '0% 0',
        transition: 'background-position 0.5s'
      })
      setSecondSliderStyles({left: '0', transition: 'left 0.2s'})
      setThirdSliderStyles({left: '100%', transition: 'left 0.2s'})
      setTimeout(()=>{
        setFirstSlideStyles({left: '0%', transition: 'left 0.5s'})
        setSecondSliderStyles({left: '100%', transition: 'left 0.5s'})
      }, 0)
    }
  }

  return (
    <div
    style={appStyles}
    className={styles.app} 
    onTouchStart={e => SetTouchStart(e.targetTouches[0].clientX)}
    onTouchEnd={e => SetTouchEnd(e.changedTouches[0].clientX)}>
      <div className={styles.nav}><Navbar clickHandler={()=>navClickHandler()}/></div>
      <div className={styles.logosvg}><Logo width={60}/></div>
      <div ><FirstSlide style={firstSlideStyles} clickHandler={()=>rightSwipe()}/></div>
      <div ><SecondSlide currentPage={currentPage} style={secondSliderStyles}/></div>
      <div ><ThirdSlide style={thirdSliderStyles}/></div>
    </div>
  );
}

export default App;
