const mongoose = require("../../database");

// schema separado para os itens do cardapio, para facilitar a busca por itens do cardapio
const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

// schema para cada restaurante, contendo suas informações e seu cardapio
const RestaurantsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  tags: {
    type: Array,
  },
  rating: {
    type: Number,
  },
  deliveryPrice: {
    type: Number,
  },
  deliveryTime: {
    type: String 
  },
  minPrice: {
    type: Number,
    required: true,
  },
  menu: {
    type: [MenuItemSchema], 
    default: [], 
  },
});

const Restaurants = mongoose.model("Restaurants", RestaurantsSchema);

module.exports = Restaurants;
