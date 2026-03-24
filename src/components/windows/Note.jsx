import React,{useEffect,useState } from 'react'
import ReactMarkdown from 'react-markdown'
import MacWindow from './MacWindow';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Note.scss'
const Note = ({windowName, setwindowState}) => {
    const [Markdown, setMarkdown] = useState(null)
    useEffect(() => {
        fetch('public/note.txt')
          .then(response => response.text())
          .then(text => setMarkdown(text))
         
      }, []);
  return (
   <MacWindow windowName={windowName} setwindowState={setwindowState}>
   <div className="note-window">
    {Markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{Markdown}</SyntaxHighlighter> : <p>Loading...</p>}
   </div>
   </MacWindow>
  )
}

export default Note