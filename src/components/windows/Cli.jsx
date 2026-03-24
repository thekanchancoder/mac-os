import MacWindow from "./MacWindow.jsx";
import reactConsoleEmulator from "react-console-emulator";
import "./Cli.scss";

// CJS default export handle
const Terminal = reactConsoleEmulator?.default ?? reactConsoleEmulator;

const Cli = ({windowName, setwindowState}) => {

  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" ")
    },

   

    about: {
      description: "About me.",
      usage: "about",
      fn: () => (
        `Hi, I'm Kanchan Rathore, a passionate React developer specializing in building modern web applications.`
      )
    },

    skills: {
      description: "List my skills.",
      usage: "skills",
      fn: () => (
        `Skills:
- JavaScript (ES6+)
- React
- Redux
- HTML5 & CSS3
- Sass
- Node.js
- Git`
      )
    },

 projects: {
  description: "Show my projects.",
  usage: "projects",
  fn: () => {
    return `
Projects:

<a href="https://app.netlify.com/projects/project4-sundown/overview" target="_blank">
Sundown Project
</a>

<a href="https://app.netlify.com/projects/content-universe/overview" target="_blank">
Content Universe
</a>

<a href="https://github.com/thekanchancoder/DOM-PROJECT/tree/main/weather1" target="_blank">
Weather App
</a>
`;
  }
},

   contact: {
  description: "How to contact me.",
  usage: "contact",
  fn: () => {
    return `
Contact:
Email: kanchanrathore@example.com
LinkedIn: <a href="https://www.linkedin.com/in/kanchan-rathor-44301b381/" target="_blank">linkedin.com/in/kanchan-rathor-44301b381</a>
`;
  }
},

   github: {
  description: "View my GitHub profile.",
  usage: "github",
  fn: () => {
    return `GitHub: <a href="https://github.com/thekanchancoder" target="_blank">github.com/thekanchancoder</a>`;
  }
},

    resume: {
      description: "View my resume.",
      usage: "resume",
      fn: () => (
        `Resume: https://example.com/kanchanrathore_resume.pdf`
      )
    },

    
  };

  return (
    <MacWindow windowName={windowName} setwindowState={setwindowState} >
      <div className="Cli-window">
        <Terminal
          commands={commands}
welcomeMessage={`
<span style="color:#00ff9c;font-size:18px;font-weight:bold;">
╔══════════════════════════════════╗
      Kanchan Rathore Portfolio
╚══════════════════════════════════╝
</span>

<span style="color:#00e1ff;">Available Commands</span>

<span style="color:coral; ">[ about ]</span> → <span style="color:yellow;">About me</span>

<span style="color:black;">[ skills ]</span> → <span style="color:pink;">Technical skills</span>

<span style="color:deeppink;">[ projects ]</span> → <span style="color:orange;">Portfolio projects</span>

<span style="color:darkmagenta;">[ contact ]</span> → <span style="color:crimson;">Contact information</span>

<span style="color:chartreuse;">[ github ]</span> → <span style="color:green;">GitHub profile</span>

<span style="color:#ffcc00;">[ resume ]</span> → <span style="color:#ff00e6;">Resume link</span>

<span style="color:cornflowerblue;">[ echo ]</span> → <span style="color:white;">Print text</span>

<span style="color:lightsalmon;">Type "help" to show commands again.</span>
`}
          dangerMode 
promptLabel="kanchanrathore@React:~$"
          

  style={{
    padding: "1rem",
  }}

  promptLabelStyle={{
    color: "#da0a33",
    fontWeight: "bold"
  }}

  // styleEchoBack={{
  //   color: "#ff00e6",
  //   fontWeight: "bold",
  //   textShadow: "0 0 6px #ff00e6"
  // }}


        />
      </div>
    </MacWindow>
  );
};

export default Cli;