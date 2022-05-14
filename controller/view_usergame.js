const express = require("express");

const user_game = require("../models").user_game;
module.exports = {
  // get all user_game
  getAll: (req, res) => {
    console.log(req);
    user_game
      .findAll()
      .then((result) => {
        res.render("usergame/user_games", { usergame: result });
      })
      .catch((err) => {
        res
          .status(404)
          .json({ message: "gagal get all user", err: err.message });
      });
  },
  getId: (req, res) => {
    user_game
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        res.render("usergame/update", { usergame: result });
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },

  addCreate: (req, res) => {
    res.render("usergame/create");
  },
  create: (req, res) => {
    user_game
      .create({
        username: req.body.username,
        password: req.body.password,
      })
      .then((result) => {
        res.redirect("/view/usergame");
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },

  updateId: (req, res) => {
    user_game
      .update(
        {
          usernam: req.body.username,
          password: req.body.password,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then((result) => {
        res.redirect("/view/usergame");
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },
  deleteId: (req, res) => {
    user_game
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        res.redirect("/view/usergame");
      })
      .catch((err) => {
        res.render("error", { status: res.status(404), err: err.message });
      });
  },
};
