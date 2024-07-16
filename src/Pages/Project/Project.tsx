import React from "react";
import { projects } from "../../constain/project";
import { Card } from "../../components/Card/Card";

const Project = () => {
  return (
    <div className="container">
      <h1 className="project-heading">
        My Recent <strong className="purple">Works</strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>

      <div className="project">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
            work_in={project.work_in}
            team_size={project.team_size}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
