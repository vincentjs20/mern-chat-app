const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const {registerUser, authUser, allUsers} = require("../controllers/userController");
const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;