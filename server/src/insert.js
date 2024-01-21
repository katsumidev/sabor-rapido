const Restaurants = require("./app/models/restaurants");

// use esse script para criar novos restaurantes no banco de dados
const novoRestaurante = new Restaurants({
  name: "Churrasco Grego do Balacobaco",
  picture:
    "https://static.vecteezy.com/system/resources/previews/010/411/845/non_2x/restaurant-logo-design-template-free-vector.jpg",
  banner:
    "https://static.itdg.com.br/images/auto-auto/d137908679db9d310c65dc6423513bcc/churrasco-barato.jpg",
  description:
    "Churrasco de Alta Qualidade, o melhor churrasco grego de Uberaba! (É o unico que tem) 🔥",
  address: "Praça Carlos Gomes, 146 - Estados Unidos, Uberaba - MG, 38015-480",
  category: "Lanches e Churrasco",
  restaurantTags: ["meat", "brazilfood"],
  menuTags: [
    "Combo",
    "Pf",
    "Churrasco Grego",
    "Hambúrgueres",
    "Batata",
    "Bebidas",
  ],
  phone: "34996484068",
  rating: 5,
  deliveryPrice: 12.5,
  deliveryTime: "20-80",
  minPrice: 70.0,
  menu: [
    {
      name: "G R E G O 01",
      tag: "Hambúrgueres",
      picture:
        "https://santaportal.com.br/wp/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-05-at-15.35.54-1.jpeg",
      price: 39.9,
      description:
        "Pão de Hambúrguer Artesanal recheado com catupiry, Hamburguer de 80g, ketchup e muito mais",
    },
    {
      name: "G R E G O 02",
      tag: "Hambúrgueres",
      picture:
        "https://www.clickguarulhos.com.br/wp-content/uploads/2020/08/20200806-1_greguss.jpeg",
      price: 58.9,
      description:
        "Pão Frances recheado com muito amor e carinho, mais o elemento X = Meninas Superpoderosas",
    },
  ],
});

novoRestaurante
  .save()
  .then((result) => {
    console.log("Restaurante inserido com sucesso:", result);
  })
  .catch((error) => {
    console.error("Erro ao inserir restaurante:", error);
  });
