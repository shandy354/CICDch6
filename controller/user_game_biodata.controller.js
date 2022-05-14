const express = require("express");
const userId = require("../models").user_game;
const user_game_biodata = require("../models").user_game_biodata;
module.exports = {
  // get all user_game
  getAll: async (req, res) => {
    try {
      const data = await user_game_biodata.findAll({
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
      const data = await user_game_biodata.findAll({
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
      const data = await user_game_biodata.create({
        name: req.body.name,
        region: req.body.region,
        gender: req.body.gender,
        userId: req.body.userId,
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
      let data = await user_game_biodata.update(
        {
          name: req.body.name,
          region: req.body.region,
          gender: req.body.gender,
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
      let data = await user_game_biodata.destroy({
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
      res.status(200).json({
        message: "data berhasil dihapus",
        data: data,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
};
