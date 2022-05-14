const express = require("express");

const router = express.Router();

const controller= require('../controller/index')

// USER GAME API
router.get("/usergame",controller.user.getAll);
router.get("/usergame/:id",controller.user.getId);
router.post("/usergame_create",controller.user.create);
router.put("/usergame_update/:id",controller.user.updateId);
router.delete("/usergame_delete/:id",controller.user.deleteId);

// VIEW USER GAME 
router.get("/view/usergame",controller.userView.getAll);
router.get("/view/usergame/create",controller.userView.addCreate);
router.get("/view/usergame/update/:id",controller.userView.getId);
router.post("/view/usergame_create",controller.userView.create);
router.post("/view/usergame_create/:id",controller.userView.updateId);
router.get("/view/delete/:id",controller.userView.deleteId);

// USERGAME BIODATA
router.get("/biodata",controller.biodata.getAll);
router.get("/biodata/:id",controller.biodata.getId);
router.post("/biodata_create",controller.biodata.create);
router.put("/biodata_update/:id",controller.biodata.updateId);
router.delete("/biodata_delete/:id",controller.biodata.deleteId);

// VIEW USER GAE BIODATA
router.get("/view/biodata",controller.biodataView.getAll);
router.get("/view/biodata/create",controller.biodataView.addCreate);
router.get("/view/biodata/update/:id",controller.biodataView.getId);
router.post("/view/biodata_create",controller.biodataView.create);
router.post("/view/biodata_create/:id",controller.biodataView.updateId);
router.get("/view/delete/:id",controller.biodata.deleteId)


// USERGAME HISTORY
router.get("/history",controller.history.getAll);
router.get("/history/:id",controller.history.getId);
router.post("/history_create",controller.history.create);
router.put("/history_update/:id",controller.history.updateId);
router.delete("/history_delete/:id",controller.history.deleteId);

// VIEW USER HISTORY
router.get("/view/history",controller.historyView.getAll);
router.get("/view/history/create",controller.historyView.addCreate);
router.get("/view/history/update/:id",controller.historyView.getId);
router.post("/view/history_create",controller.historyView.create);
router.post("/view/history_create/:id",controller.historyView.updateId);
router.get("view/delete/:id",controller.historyView.deleteId)


module.exports = router;