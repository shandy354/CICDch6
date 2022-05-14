const express = require("express");
const userId = require("../models").user_game;
const user_game_history = require("../models").user_game_history;
module.exports = {
  // get all user_game
  getAll: async (req, res) => {
    try {
      const data = await user_game_history.findAll({
        include: [
          {
            model: userId,
            as: "user_game",
          },
        ],
      });
      if (data.length > 0) {
        res.status(200).json({
          message: "get data",
          data: data,
        });
      } else {
        res.status(200).json({
          message: "tidak ada data",
          data: [],
        });
      }
    } catch (error) {
      res.status(402).json({
        message: error,
      });
    }
  },

  getId: async (req, res) => {
    try {
      const data = await user_game_history.findAll({
        include: [
          {
            model: userId,
            as: "user_game",
          },
        ],
        where: {
          id: req.params.id,
        },
      });
      if (data.length > 0) {
        res.status(200).json({
          message: "get data",
          data: data,
        });
      } else {
        res.status(200).json({
          message: "tidak ada data",
          data: [],
        });
      }
    } catch (error) {
      res.status(402).json({
        message: error.message,
      });
    }
  },

  create: async (req, res) => {
    try {
      const data = await user_game_history.create({
        diamon: req.body.diamon,
        tiket: req.body.tiket,
        battle_point: req.body.battle_point,
        item: req.body.item,
        score: req.body.score,
        login: req.body.login,
        logout: req.body.logout,
        UserId: req.body.UserId,
      });
      res.status(201).json({
        message: "create data berhasil",
        data: data,
      });
    } catch (error) {
      res.status(402).json({
        message: error.message,
      });
    }
  },

  updateId: async (req, res) => {
    try {
      let data = await user_game_history.update(
        {
          diamon: req.body.diamon,
          tiket: req.body.tiket,
          battle_point: req.body.battle_point,
          score: req.body.score,
          login: req.body.login,
          logout: req.body.logout,
          userId: req.body.userId,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        message: "berhasil update data",
        data: data,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },

  deleteId: async (req, res) => {
    try {
      let data = await user_game_history.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        message: "data berhasil dihapus",
      });
    } catch (error) {
      res.status(404)({
        message: error.message,
      });
    }
  },
};
