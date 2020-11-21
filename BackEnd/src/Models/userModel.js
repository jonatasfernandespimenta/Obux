const { Model, DataTypes } = require('sequelize');
const Book = require('./booksSchema');

class User extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      dataNasc: DataTypes.DATE,
      telefone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      senha: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      biblioteca: DataTypes.INTEGER,
      pfp: DataTypes.STRING,
      descricao: DataTypes.STRING,
      givenrates: DataTypes.INTEGER,
      totalrates: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.hasMany(models.Books, { foreignKey: 'user_id', as: 'books' })
  }
}

module.exports = User;
