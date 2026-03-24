import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss"; 

const Gitcard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p className="description">{data.description}</p>

      <div className="tags">
  {data.tags.map((tag) => (
    <span className="tag" key={tag}>{tag}</span>
  ))}
</div>

      <div className="links">
        <a href={data.repoLink} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>

        {data.demoLink && (
          <a href={data.demoLink} target="_blank" rel="noopener noreferrer">
            View Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Github = ({ windowName,  setwindowState }) => {
  return (
    <MacWindow windowName={windowName}  setwindowState={setwindowState}>
      <div className="cards">
        {githubData.map((project) => (
          <Gitcard key={project.title} data={project} />
        ))}
      </div>
    </MacWindow>
  );
};

export default Github;