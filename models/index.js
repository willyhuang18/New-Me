const User = require('./User');
const Project = require('./Project');
const Skill = require('./Skills');
const Employment = require('./Employment')

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Skill, {
  foreignKey: 'user_id'
})

User.hasMany(Employment, {
  foreignKey: 'user_id'
})

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.belongsTo(Skill, {
  foreignKey: 'skill_id'
});


Skill.belongsTo(User, {
  foreignKey: 'user_id'
})

Skill.belongsTo(Employment, {
  foreignKey: 'employment_id'
})

Employment.belongsTo(User, {
  foreignKey: 'user_id'
})

Employment.hasMany(Skill, {
  foreignKey: 'employment_id'
})



module.exports = { User, Project, Employment, Skill};
