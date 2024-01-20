const express = require("express");
const Restaurants = require("../models/restaurants");
const { normalize } = require("diacritics");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

// router.use(authMiddleware);

router.get("/consult", async (req, res) => {
  try {
    if (req.query.id != null) {
      const restaurant = await Restaurants.findById(req.query.id);
      if (restaurant != null) {
        res.json(restaurant);
      } else {
        res.status(404).json({ message: "Restaurante não encontrado" });
      }
    } else {
      const restaurants = await Restaurants.find({}).limit(20);
      res.json(restaurants);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/consult_similar_products", async (req, res) => {
  if (req.query.category != null) {
    let category = req.query.category;
    let id = req.query.id;

    await Restaurants.find({ category }, function (err, arr) {
      if (err) {
        res.send(err);
      }
      res.json(arr.filter((item) => item._id != id));
    });
  }
});

router.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.term;

    const results = await Restaurants.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } }, 
        { description: { $regex: searchTerm, $options: "i" } },
        { "menu.name": { $regex: searchTerm, $options: "i" } },
        { "menu.description": { $regex: searchTerm, $options: "i" } },
      ],
    });

    results.forEach((restaurant) => {
      restaurant.menu = restaurant.menu.filter((dish) => {
        return (
          dish.name.match(new RegExp(searchTerm, "i")) ||
          dish.description.match(new RegExp(searchTerm, "i")) 
        );
      });
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




module.exports = (app) => app.use("/restaurants", router);
