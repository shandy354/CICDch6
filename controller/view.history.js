const express = require("express");
// const userId = require("../models").user_game;
const user_game_history = require("../models").user_game_history;
module.exports = {
  // get all user_game
  getAll: (req, res) => {
    console.log(req);
    user_game_history
      .findAll()
      .then((result) => {
        res.render("history/user_history", { history: result });
      })
      .catch((err) => {
        res.status(404).json({ message: "gagal get user", err: err.message });
      });
  },
  getId: (req, res) => {
    user_game_history
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        res.render("userhistory/update", { result });
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },

  addCreate: (req, res) => {
    res.render("history/create");
  },

  create: (req, res) => {
    user_game_history
      .create({
        diamon: req.body.diamon,
        tiket: req.body.tiket,
        battle_point: req.body.battle_point,
        item: req.body.item,
        score: req.body.score,
        login: req.body.login,
        logout: req.body.logout,
        UserId: req.body.UserId,
      })
      .then((result) => {
        res.redirect("/view/history");
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },

  updateId: (req, res) => {
    user_game_history
      .update(
        {
          diamon: req.body.diamon,
          tiket: req.body.tiket,
          battle_point: req.body.battle_point,
          item: req.body.item,
          score: req.body.score,
          login: req.body.login,
          logout: req.body.logout,
          UserId: req.body.UserId,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then((result) => {
        res.redirect("/view");
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },
  deleteId: (req, res) => {
    user_game_history
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        res.redirect("/view/history");
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },
};
