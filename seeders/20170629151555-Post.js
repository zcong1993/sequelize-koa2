'use strict';
const faker = require('faker')

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const posts = Array(200).fill().map(() => Object.assign(
      {
        title: faker.lorem.sentence(faker.random.number({ min: 4, max: 7 }))
        .slice(0, -1).substr(0, 80),
        content: faker.lorem.text(),
        UserId: faker.random.number({ min: 1, max: 20 })
      },
      (date => ({ createdAt: date, updatedAt: date }))(faker.date.past())
    ))

    return queryInterface.bulkInsert('Posts', posts, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
