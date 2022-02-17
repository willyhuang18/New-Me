const router = require('express').Router();
const { Project } = require('../../models');

router.get('/', (req, res) => {
  Project.findAll({})
    .then(dbProjectData => res.json(dbProjectData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
