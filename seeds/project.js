const { Project } = require('../models/');

const projectData = [
  {
    name: " Team Profile Generator",
    description: "This application is be able to generate information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person, which build with Node,HTML, CSS and JavaScript",

  },
  {
    title: " Weather Dashboard ",
    description: "This is the weather app that can able to search any city in the world, the current weather time and forecast within 5 days. Build with Third-party APIs, HTML, CSS and JavaScript",
  },
  {
    title: "Note Taker",
    description: "This application is allow user to use write, delete and save notes, which is Note taker that build with Express, HTML, Javascript and JSON ",
  },
  {
    title: "Perfect Cup",
    description: "This application is provide to the user that could able to create their ideal coffee, meanwhile coffee lover can able to read the description about the ingredient they had chosen.",
  },
 
 
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;