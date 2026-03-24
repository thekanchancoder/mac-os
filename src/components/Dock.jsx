import React from 'react'
import './Dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { resume } from 'react-dom/server'
const Dock = ({ windowState, setwindowState }) => {
  return (
    <footer className='dock'>
        <div
        onClick={()=>{setwindowState(state=>({...state,github:true}))}}
         
        className='icon github'>
            <img src="/doc-icon/github.svg" alt="" />
            <span className="tooltip">Github</span>
        </div>

        <div 
        onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r","_blank")}}
        className='icon calender'>
            <img src="/doc-icon/calender.svg" alt="" />
            <span className="tooltip">Calendar</span>
        </div>


        <div
            onClick={()=>{setwindowState(state=>({...state,cli:true}))}} 
          className='icon cli'>
            <img src="/doc-icon/cli.svg" alt="" />
            <span className="tooltip">CLI</span>
        </div>


        <div
        onClick={()=>{
            window.open("https://github.com/thekanchancoder", "_blank");
        }}
         className='icon link'>
            <img src="/doc-icon/link.svg" alt="" />
            <span className="tooltip">Link</span>
        </div>


        <div
onClick={()=>{
            window.open("mailto:kanchanrathor05@gmail.com", "_blank");
        }}
         className='icon mail'>
            <img src="/doc-icon/mail.svg" alt="" />
            <span className="tooltip">Mail</span>
        </div>


        <div   
        onClick={()=>{setwindowState(state=>({...state,note:true}))}}
         className='icon note'>
            <img src="/doc-icon/note.svg" alt="" />
            <span className="tooltip">Note</span>
        </div>


        <div
          onClick={()=>{setwindowState(state=>({...state,resume:true}))}}
         className='icon pdf'>
            <img src="/doc-icon/pdf.svg" alt="" />
            <span className="tooltip">Resume</span>
        </div>


        <div 
        onClick={()=>{setwindowState(state=>({...state,sportify:true}))}}
        className='icon spotify'>
            <img src="/doc-icon/spotify.svg" alt="" />
            <span className="tooltip">Spotify</span>
        </div>
   
    </footer>
  )
}

export default Dock