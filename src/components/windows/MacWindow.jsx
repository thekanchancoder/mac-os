import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'
const MacWindow = ({children,width="30vw",height="30vh",windowName,setwindowState}) => {
  return (
    <Rnd 
      default={{
        x: 300,
        y: 200,
        width: width,
        height: height,
      }}
    >
     <div className="window">
         <div className="nav">
            <div className="dots">
                <div
                  onClick={()=>{setwindowState(state=>({...state,[windowName.toLowerCase()]:false}))}}
                 className="dot red">
                  <span className="close">x</span>
                 </div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>

            </div>
            <div className="title">
                <p>
                    kanchanrathore = zsh
                </p>
            </div>
         </div>
      <div className="main-content">
        {children}
      </div>
     </div>
    </Rnd>
  )
}

export default MacWindow