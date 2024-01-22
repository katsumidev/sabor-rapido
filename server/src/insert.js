const Restaurants = require("./app/models/restaurants");

// use esse script para criar novos restaurantes no banco de dados
const novoRestaurante = new Restaurants({
  name: "El Perrito Tailandês",
  picture: "https://img.freepik.com/premium-vector/thailand-cuisine-restaurant-meal-menu-icon-sign_8071-36807.jpg",
  banner: "https://ichef.bbci.co.uk/images/ic/1200xn/p0g3gr7p.jpg",
  description: "Descubra os sabores autênticos da Tailândia em nosso restaurante. Pratos exóticos e deliciosos esperam por você!",
  address: "Rua dos Coentros, 789 - Bairro Picante, Cidade - Estado, CEP 87654-321",
  category: "Restaurante Tailandês",
  restaurantTags: ["thai", "exotic"],
  menuTags: ["Curry", "Pad Thai", "Tom Yum", "Spring Rolls", "Bebidas"],
  phone: 987654321,
  rating: 4.8,
  deliveryPrice: 12.0,
  deliveryTime: "30-45",
  minPrice: 35.0,
  menu: [
    {
      name: "Massaman Curry",
      tag: "Curry",
      picture: "https://minimalistbaker.com/wp-content/uploads/2019/07/Massaman-Curry-SQUARE.jpg",
      price: 18.0,
      description: "Curry Massaman com carne, batatas, amendoim e leite de coco."
    },
    {
      name: "Pad Thai de Camarão",
      tag: "Pad Thai",
      picture: "https://ogimg.infoglobo.com.br/in/23508775-5a5-175/FT1086A/81354525_BARio-de-Janeiro-RJ-01-03-2019-TOQUE-DE-CHEFA-Chef-ANA-CAROLINA-apos-estudar-na-L.jpg",
      price: 16.5,
      description: "Pad Thai clássico com macarrão de arroz, camarões, tofu, amendoim e ovo."
    },
    {
      name: "Tom Yum Soup",
      tag: "Tom Yum",
      picture: "https://cravingtasty.com/wp-content/uploads/2019/02/Tom-Yum-Soup-2.jpg",
      price: 15.0,
      description: "Sopa Tom Yum picante com camarões, cogumelos, capim-limão e coentro."
    },
    {
      name: "Spring Rolls de Frango",
      tag: "Spring Rolls",
      picture: "https://receitinhas.com.br/wp-content/uploads/2018/04/Depositphotos_43698593_l-2015-1200x744.jpg",
      price: 12.0,
      description: "Spring Rolls recheados com frango, vegetais frescos e molho agridoce."
    },
    {
      name: "Chá Gelado de Jasmin",
      tag: "Bebidas",
      picture: "https://www.estadao.com.br/resizer/vH_gx3-J9bZujvwXgpeOv9LPyNA=/arc-anglerfish-arc2-prod-estadao/public/OKNA6GRUPNMJPMWGERDLMEIWIQ.jpg",
      price: 6.0,
      description: "Chá gelado refrescante de jasmim para acompanhar sua refeição."
    },
    {
      name: "Green Curry de Legumes",
      tag: "Curry",
      picture: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A2FF212E-0AF3-4355-87FE-D79DB0645C4E/Derivates/A624ECAB-386E-4ADB-ACE5-CD54F9901D5D.jpg",
      price: 17.0,
      description: "Green Curry com vegetais frescos, tofu e leite de coco."
    },
    {
      name: "Pad See Ew de Carne",
      tag: "Pad Thai",
      picture: "https://static.vecteezy.com/ti/fotos-gratis/t1/22744082-pad-see-ew-carne-de-porco-e-vegetais-um-popular-prato-tailandes-foto.jpg",
      price: 15.5,
      description: "Pad See Ew com carne, brócolis, ovos e macarrão de arroz grosso."
    },
    {
      name: "Lime Leaf Chicken Skewers",
      tag: "Spring Rolls",
      picture: "https://images.squarespace-cdn.com/content/v1/5db239c14644543229502b74/dbfaa069-fdd9-4f05-8d1a-423c624eb443/EP23+S3+-+Turmeric+%26+Lemongrass+Chicken+Satay.jpg",
      price: 13.0,
      description: "Espetinhos de frango com folhas de limão kaffir, grelhados e servidos com molho de amendoim."
    },
    {
      name: "Mango Sticky Rice",
      tag: "Sobremesa",
      picture: "https://www.feedmi.org/wp-content/uploads/2023/03/how-to-make-mango-sticky-rice.jpg",
      price: 10.0,
      description: "Mango Sticky Rice, uma sobremesa tradicional tailandesa com arroz glutinoso e manga fresca."
    },
    {
      name: "Thai Iced Coffee",
      tag: "Bebidas",
      picture: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/10/65/95/WFxZTwIySZeAx9oQY0rv_thai-iced-coffee%2520(2%2520of%25204).jpg",
      price: 7.0,
      description: "Café tailandês gelado com leite condensado, perfeito para uma doce finalização."
    },
    {
      name: "Coca Lata",
      tag: "Bebidas",
      picture:
        "https://acdn.mitiendanube.com/stores/001/043/810/products/2368fb29cfceb973333c3f56df616e31-cf4a05d34f44c7df5517030980870004-640-0.jpg",
      price: 5.5,
      description: "Refrigerante gelado para acompanhar sua refeição.",
    },
    {
      name: "Água Mineral",
      tag: "Bebidas",
      picture:
        "https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/a/g/agua-mineral-crystal-500ml-7894900530001.jpg",
      price: 5.5,
      description: "Refrigerante gelado para acompanhar sua refeição.",
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
