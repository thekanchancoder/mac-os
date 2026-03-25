import { useState } from "react";
import Dock from "./components/Dock";
import "./App.scss";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Sportify from "./components/windows/Sportify";
import Cli from "./components/windows/Cli.jsx";
import github from "react-syntax-highlighter/dist/esm/styles/hljs/github.js";

function App() {
  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    resume: false,
    sportify: false,
    cli: false,
  });
  return (
    <main>
      <Nav />
      <Dock windowState={windowState} setwindowState={setwindowState} />
      {windowState.github && (
        <Github windowName="GitHub" setwindowState={setwindowState} />
      )}
      {windowState.note && (
        <Note windowName="Note" setwindowState={setwindowState} />
      )}
      {windowState.resume && (
        <Resume windowName="Resume" setwindowState={setwindowState} />
      )}
      {windowState.sportify && (
        <Sportify windowName="sportify" setwindowState={setwindowState} />
      )}
      {windowState.cli && (
        <Cli windowName="CLI" setwindowState={setwindowState} />
      )}
    </main>
  );
}

export default App;
