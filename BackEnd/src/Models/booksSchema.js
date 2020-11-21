const { Model, DataTypes } = require('sequelize');

class Book extends Model {
  static init(sequelize) {
    super.init({
      titulo: DataTypes.STRING,
      autor: DataTypes.STRING,
      ano: DataTypes.INTEGER,
      genero: DataTypes.STRING,
      qualidade: DataTypes.INTEGER,
      foto: DataTypes.STRING,
      disponibilidade: DataTypes.INTEGER,
      sinopse: DataTypes.STRING,
      isAvailable: DataTypes.BOOLEAN
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(model.User, { foreignKey: 'user_id', as: 'owner' })
  }
}

module.exports = Book;
