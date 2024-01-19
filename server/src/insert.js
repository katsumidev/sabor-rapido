const Restaurants = require("./app/models/restaurants"); 

// Criar uma instância de Restaurants com dados fictícios
const novoRestaurante = new Restaurants({
  name: "Pizzaria do seu João",
  picture: "https://www.lacentral.com.br/wp-content/uploads/2023/07/feche-a-pizza-italiana-sobre-o-queijo-cole-o-foco-seletivo-generativo-ai-scaled.jpg",
  description: "Pizzaria do seu joão, uma delicia na palma da sua mão!",
  address: "Rua jaber alexandre cecim, 57",
  category: "Pizzaria",
  tags: ["Pizza", "Fast Food"],
  rating: 3.5,
  deliveryPrice: 2.0,
  deliveryTime: "20-50",
  minPrice: 40.0,
  menu: [
    { name: "Prato 1", picture: "https://s2-techtudo.glbimg.com/oCuqUTStRM4CDOVFgEPEWzO2fAE=/0x0:512x309/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/R/8/GnGPa5Q4W0ZcfNmM0a7w/unnamed.jpg", price: 10.0, description: "Descrição do Prato 1" },
    { name: "Prato 2", picture: "https://media-cdn.tripadvisor.com/media/photo-p/17/c2/df/0d/amazing-meal.jpg", price: 15.0, description: "Descrição do Prato 2" }
  ],
});

novoRestaurante.save()
  .then(result => {
    console.log("Restaurante inserido com sucesso:", result);
  })
  .catch(error => {
    console.error("Erro ao inserir restaurante:", error);
  });
