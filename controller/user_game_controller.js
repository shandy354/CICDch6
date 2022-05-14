const express = require("express");

const user_game = require("../models").user_game;
module.exports = {
  // get all user_game
  getAll: async (req, res) => {
    try {
      const user = await user_game.findAll();
      if (user.length > 0) {
        res.status(200).json({
          message: "get data",
          data: user,
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
      const user = await user_game.findAll({
        where: {
          id: req.params.id,
        },
      });
      if (user.length > 0) {
        res.status(200).json({
          message: "get data",
          data: user,
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
      const user = await user_game.create({
        username: req.body.username,
        password: req.body.password,
      });
      res.status(201).json({
        message: "create data berhasil",
        data: user,
      });
    } catch (error) {
      res.status(402).json({
        message: error.message,
      });
    }
  },

  updateId: async (req, res) => {
    try {
      let user = await user_game.update(
        {
          username: req.body.username,
          password: req.body.password,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        message: "berhasil update data",
        data: user,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },

  deleteId: async (req, res) => {
    try {
      let user = await user_game.destroy({
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
