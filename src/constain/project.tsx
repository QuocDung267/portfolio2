interface Projects {
  id: number;
  name: string;
  description: string;
  technologies: string;
  work_in: string;
  team_size: number;
  image: string;
  link: string;
}

export const projects: Projects[] = [
  {
    id: 1,
    name: "Project Alpha",
    image: "/images/blog.png",
    description: "A web application for task management.",
    technologies: "React, Node.js, MongoDB",
    work_in: "Web Development",
    team_size: 5,
    link: "https://stackoverflow.com/questions/41488715/how-to-disable-button-in-react-js",
  },
  {
    id: 2,
    name: "Project Beta",
    image: "/images/blog.png",
    description: "An e-commerce platform.",
    technologies: "Angular, Express, MySQL",
    work_in: "Web Development",
    team_size: 8,
    link: "",
  },
  {
    id: 3,
    name: "Project Gamma",
    image: "/images/blog.png",
    description: "A mobile app for fitness tracking.",
    technologies: "Flutter, Firebase",
    work_in: "Mobile Development",
    team_size: 4,
    link: "",
  },
  {
    id: 4,
    name: "Project Delta",
    image: "/images/blog.png",
    description: "A machine learning model for image recognition.",
    technologies: "Python, TensorFlow, Keras",
    work_in: "Data Science",
    team_size: 6,
    link: "",
  },
  {
    id: 5,
    name: "Project Epsilon",
    image: "/images/blog.png",
    description: "A blockchain-based voting system.",
    technologies: "Ethereum, Solidity",
    work_in: "Blockchain Development",
    team_size: 7,
    link: "",
  },
];
