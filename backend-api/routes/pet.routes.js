const router = require("express").Router();
const Pet = require("../models/Pet.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ message: "PETS" });
});

router.post("/create", (req, res, next) => {
  if (req.body.name === "Mittens" || req.body.name === "mittens") {
    res.json("Mittens has found a good home");
  }
  Pet.create(req.body)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.get("/all-pets", (req, res) => {
  Pet.find()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.get("/find/:id", (req, res) => {
  // Pet.findOne({_id: req.params.id})
  Pet.findById(req.params.id)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.put("/update/:id", (req, res) => {
  // Pet.findOne({_id: req.params.id})
  Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.delete("/delete/:id", (req, res) => {
  // Pet.findOne({_id: req.params.id})
  Pet.findByIdAndDelete(req.params.id)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

module.exports = router;
