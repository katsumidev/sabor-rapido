const express = require("express");
const Restaurants = require("../models/restaurants");
const { normalize } = require("diacritics");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

// todas as rotas abaixos irão passar pela validação do token
router.use(authMiddleware);

// busca todos os produtos pesquisados ou por um produto especifico atraves do _id
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

// rota para buscar restaurantes e comidas especificas buscando pelo termo pesquisado na collection do mongo
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
