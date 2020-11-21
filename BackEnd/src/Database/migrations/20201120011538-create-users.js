'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('users', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncremente: true,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        dataNasc: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        telefone: Sequelize.STRING,
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          max: 14,
          select: true,
          unique: true,
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
          select: false,
          min: 6,
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        estado: {
          allowNull: false,
          type: Sequelize.STRING,
          max: 2,
        },
        biblioteca: {
          type: Sequelize.INTEGER,
        },
        pfp: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.STRING,
          defaultValue: 'Olá, agora estou usando o Obux'
        },
        givenrates: {
          default: 0, type: Sequelize.INTEGER
        },
        totalrates: {
          type: Sequelize.INTEGER,
          default: 0,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }

      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
