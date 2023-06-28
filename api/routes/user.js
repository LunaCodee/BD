const express = require("express");
const router = express.Router();
// const authMiddleware = require("../middleware/auth");
const {
  REGISTER,
  LOGIN,
//   GET_ALL_USERS,
//   GET_USER_BY_ID,
//   DELETE_USER_BY_ID, 
//   GET_NEW_TOKEN,
} = require("../controllers/user");

router.post("/register", REGISTER);
router.post("/login", LOGIN);
// router.get("/users", GET_ALL_USERS);
// router.get("/user/:id", authMiddleware, GET_USER_BY_ID);
// router.delete("/user/:id", authMiddleware, DELETE_USER_BY_ID);
// router.get("/getNewJwtToken", GET_NEW_TOKEN);

module.exports = router;