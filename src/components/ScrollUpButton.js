import React, {useEffect, useRef} from 'react'
import ChevronUp from '../assets/images/logos/chevron_up_icon.svg'



function ScrollUpButton() {
    const btnRef = useRef()

    function scrollTop() {
        document.documentElement.scrollTo(0, 0);
    }

    useEffect(() => {
        document.addEventListener("scroll", function() {
            if(window.scrollY > 900) {
              return  btnRef.current?.classList.add("scrollbtnshow")
            } else {
              return  btnRef.current?.classList.remove("scrollbtnshow")
            }
        })

    }, [])
    


  return (
    <>
      <div style={styles.wrapper} onClick={() => scrollTop()} ref={btnRef}>
        <img alt="chevron" src={ChevronUp} width={30}/>
    </div>
    </>
   
  )
}

export default ScrollUpButton

const styles = {
    wrapper: {
        opacity: 0,
        cursor: 'pointer',
        transition: '0.4s',
        boxShadow: '0 0 20px 0px #979393',
        position: 'fixed',
        bottom:'3%',
        right:'2%',
        width: 60,
        height: 60,
        display: 'grid',
        placeContent: 'center',
        borderRadius: 50,
        backgroundColor: '#284591',
        color: 'white',
        zIndex: 11111
    }
}

