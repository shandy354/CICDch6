const user = require('./user_game_controller');
const biodata = require('./user_game_biodata.controller');
const history = require('./user_game_history.controller');
// VIEW
const userView = require('./view_usergame');
const biodataView = require('./view.biodata');
const historyView = require('./view.history');

const controller ={};

controller.user = user;
controller.biodata = biodata;
controller.history = history;
// VIEW
controller.userView = userView;
controller.biodataView = biodataView;
controller.historyView = historyView;

module.exports = controller;