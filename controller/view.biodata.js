const express = require("express");
// const userId = require("../models").user_game;
const user_game_biodata = require("../models").user_game_biodata;
module.exports = {
  // get all user_game
  getAll: (req, res) => {
    console.log(req);
    user_game_biodata
      .findAll()
      .then((result) => {
        res.render("biodata/user_biodata", { biodata: result });
      })
      .catch((err) => {
        res.status(404).json({ message: "gagal get user", err: err.message });
      });
  },
  getId: (req, res) => {
    user_game_biodata
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        res.render("biodata/update", { biodata: result });
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },

  addCreate: (req, res) => {
    res.render("biodata/create");
  },

  create: (req, res) => {
    user_game_biodata
      .create({
        name: req.body.name,
        region: req.body.region,
        gender: req.body.gender,
        userId: req.body.userId,
      })
      .then((result) => {
        res.redirect("/view/biodata");
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },

  updateId: (req, res) => {
    user_game_biodata
      .update(
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
      )
      .then((result) => {
        res.redirect("/view/biodata");
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },

  deleteId: (req, res) => {
    user_game_biodata
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        res.redirect("/view/biodata");
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },
};
