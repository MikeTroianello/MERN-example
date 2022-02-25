const router = require("express").Router();
const authRoutes = require("./auth.routes");
const petRoutes = require("./pet.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ message: "WE ARE CONNECTED" });
});

router.use("/auth", authRoutes);
router.use("/pet", petRoutes);

module.exports = router;
