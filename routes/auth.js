const express = require("express");

const router = express.Router();

const credential = {
  username: "shandyarshad",
  password: "busro123",
};

// login
router.post("/login", (req, res) => {
  if (
    req.body.username == credential.username &&
    req.body.password == credential.password
  ) {
    req.session.user = req.body.username;
    res.redirect("/view/usergame");
    // res.end("sukses")
  } else {
    res.end("invalid");
  }
});

module.exports = router;
