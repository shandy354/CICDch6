'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game_history.belongsTo(models.user_game,{
        foreignKey: "UserId",
        as: "user_game",
      });
    }
  }
  user_game_history.init({
    diamon: DataTypes.INTEGER,
    tiket: DataTypes.INTEGER,
    battle_point: DataTypes.INTEGER,
    item: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    login: DataTypes.DATE,
    logout: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user_game_history',
  });
  return user_game_history;
};