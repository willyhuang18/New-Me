const { Project } = require('../models');

const projectData = [
  {
    name: " Team Profile Generator",
    description: "This application is be able to generate information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person, which build with Node,HTML, CSS and JavaScript",
    url: "https://github.com/willyhuang18/Team-Profile-Generator",
    image:"/img/weather.jpg"
  },
  {
    name: " Weather Dashboard ",
    description: "This is the weather app that can able to search any city in the world, the current weather time and forecast within 5 days. Build with Third-party APIs, HTML, CSS and JavaScript",
    url: "https://willyhuang18.github.io/Weather-Dashborad/",
    image:"https://user-images.githubusercontent.com/87446864/151904621-dac288f1-933e-4e0b-96c8-eff6c3b15535.png"
  },
  {
    name: "Note Taker",
    description: "This application is allow user to use write, delete and save notes, which is Note taker that build with Express, HTML, Javascript and JSON ",
    url: "https://arcane-temple-53098.herokuapp.com/",
    image:"https://user-images.githubusercontent.com/87446864/151881598-fb5bdae5-c471-45a9-a888-1fe0896839d5.png"
  },
  {
    name: "Perfect Cup",
    description: "This application is provide to the user that could able to create their ideal coffee, meanwhile coffee lover can able to read the description about the ingredient they had chosen.",
    url: "https://powerful-wildwood-54385.herokuapp.com/",
    image:"https://user-images.githubusercontent.com/87446864/154158912-30a6d51a-5c5d-4450-b38e-ded79a643f4f.png"
  },
 
 
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;