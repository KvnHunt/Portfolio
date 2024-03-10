import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Pocket Traders",
    image: "/img/pocket-traders.png",
    description: "Allows you to trade pokemon and create a team. I did the design and front end!",
    repo: "https://github.com/KvnHunt/ChallTexties",
    live: "",
  },
  {
    id: 1,
    title: "Tech Topics",
    image: "/img/techtopics.png",
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    repo: "https://github.com/KvnHunt/RegexMone",
    live: ""
  },
  {
    id: 2,
    title: "Your Project Title",
    image: "/img/your-image.png",
    description: "Your project description.",
    repo: "https://github.com/KvnHunt/YourProjectRepo",
    live: "https://your-live-url.com"
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}