const express = require("express");
const router = express.Router();
const {
  getAllGoals,
  getGoal,
  setGoal,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");
const { protect } = require("../middlewares/authMiddleware");

router.get("/", protect, getAllGoals);
router.get("/:id", protect, getGoal);
router.post("/", protect, setGoal);
router.put("/:id", protect, updateGoals);
router.delete("/:id", protect, deleteGoals);

module.exports = router;
