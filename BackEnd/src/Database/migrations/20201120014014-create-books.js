'use strict';

// TEM Q DAR UPDATE PQ O MODEL É USE E NAO USERMODEL

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      autor: {
        type: Sequelize.STRING
      },
      ano: {
        type: Sequelize.INTEGER
      },
      genero: {
        type: Sequelize.STRING
      },
      qualidade: { 
        type: Sequelize.INTEGER,
        allowNull: false
      },
      foto: {
        type: Sequelize.STRING,
      },
      disponibilidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sinopse: {
        type: Sequelize.STRING
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
      
    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
