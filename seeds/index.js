const seedProjects = require('./project.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  await seedProjects();
    console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
