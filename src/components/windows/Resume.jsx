import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'
const Resume = ({windowName, setwindowState}) => {
  return (
  <MacWindow windowName={windowName} setwindowState={setwindowState}>
    <div className="resume-window">
      <embed src="/resume .pdf" frameBorder="0"></embed>
    </div>
  </MacWindow>
  )
}

export default Resume