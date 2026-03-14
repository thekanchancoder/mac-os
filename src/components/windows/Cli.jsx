import MacWindow from "./MacWindow.jsx";
// import { ReactConsoleEmulator } from "react-console-emulator";
import ReactConsoleEmulator from "react-console-emulator";
import "./Cli.scss";
const Cli = () => {
  return (
    <MacWindow>
      <div className="Cli-window">
        <ReactConsoleEmulator
          commands={{}}
          welcomeMessage={"Welcome to the React terminal!"}
          promptLabel={"kanchanrathore@React:~$"}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
