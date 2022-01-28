import { useEffect, useState } from "react";
import FirstSlide from "../firstSlide/FirstSlide";
import SecondSlide from "../secondSlide/SecondSlide";
import ThirdSlide from "../thirdSlide/ThirdSlide";
import styles from './app.module.css'
function App() {

  function slide(){
    setFirstSlideStyles('100%')
    setSecondSliderStyles('0%')

  }
  const [firstSlideStyles, setFirstSlideStyles] = useState({left: '0'})
  const [secondSliderStyles, setSecondSliderStyles] = useState({left: '100%'})
  const [thirdSliderStyles, setThirdSliderStyles] = useState({left: '200%'})
  const [currentPage, setCurrentPage] = useState(1)
  const [touchStart, SetTouchStart] = useState()
  const [touchEnd, SetTouchEnd] = useState()



  function rightSwipe () {
    setFirstSlideStyles({left: `-${(currentPage)*100}%`, transition: 'left 1s'})
    setSecondSliderStyles({left: `-${(currentPage-1)*100}%`, transition: 'left 1s'})
    setThirdSliderStyles({left: `${(-currentPage*100)+200}%`, transition: 'left 1s'})
    setCurrentPage(currentPage+1)
  }
  
  function leftSwipe () {
    // setFirstSlideStyles(firstSlideStyles+100)
    // setSecondSliderStyles(secondSliderStyles+100)
    // setThirdSliderStyles(thirdSliderStyles+100)
    setCurrentPage(currentPage-1)
  }

  useEffect(()=> {
    if ((touchStart - touchEnd) > 100) {
      console.log('right')
      if (currentPage<3){
        rightSwipe()
      }
    }
    if ((touchStart - touchEnd) < -100) {
      console.log('left')
      if (currentPage>1){
        leftSwipe()
      }
    }
  }, [touchEnd])
  console.log(touchStart, touchEnd)

  return (
    <div 
    className={styles.app} 
    onTouchStart={e => SetTouchStart(e.targetTouches[0].clientX)}
    onTouchEnd={e => SetTouchEnd(e.changedTouches[0].clientX)}>
      <div ><FirstSlide style={firstSlideStyles}/></div>
      <div ><SecondSlide style={secondSliderStyles}/></div>
      <div ><ThirdSlide style={thirdSliderStyles}/></div>
    </div>
  );
}

export default App;
