const express = require("express");
const router = express.Router();

const { signup, login, getMe } = require("../controllers/authController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);

router.get("/me", protect, getMe);

router.get("/admin-test", protect, adminOnly, (req, res) => {
  res.json({ message: "Welcome admin" });
});

module.exports = router;
