'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tools', [
      { price: 44, type: 'lights', created_at: new Date, updated_at: new Date ,user_id:"1"},
      { price: 45, type: 'speakers', created_at: new Date, updated_at: new Date,user_id:"2" },
    ],{});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('tools', null, {});
    
  }
};
