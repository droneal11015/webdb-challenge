exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Project 1',
      description:
        'Project description'
    },
  ]);
};