import React, { useEffect, useState } from "react";
import {
  Container,
  CategorieBtn,
  CategoriesWrapper,
  RestWrapper,
  Banner,
} from "./styles";
import { consultRestaurants } from "../../services/api";
import RestaurantCard from "../../components/RestaurantCard";
import { useNavigate } from "react-router";
import Title from "../../components/Title";
import main_banner from "../../assets/mainBanner.png";
import mid_banner from "../../assets/mid_banner.png";
import mobile_banner from "../../assets/mobile_banner.png";

function Hub() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [selectedOne, setSelectedOne] = useState("all");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // busca todos os restaurantes
  useEffect(() => {
    const getRestaurants = async () => {
      const response = await consultRestaurants();

      setAllRestaurants(response);
      setFilteredRestaurants(response);
    };

    getRestaurants();
  }, []);

  const categories = [
    {
      name: "Todas",
      tag: "all",
    },
    {
      name: "Vegetariano",
      tag: "vegetarian",
    },
    {
      name: "Fast Food",
      tag: "fastfood",
    },
    {
      name: "Pizza",
      tag: "pizza",
    },
    {
      name: "Comida Mexicana",
      tag: "mexicanfood",
    },
    {
      name: "Comida Tailandesa",
      tag: "tailafood",
    },
    {
      name: "Brasileira",
      tag: "brazilfood",
    },
  ];

  // filtra os restaurantes pela categoria
  useEffect(() => {
    if (selectedOne === "all") {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filtered = allRestaurants.filter((restaurant) =>
        restaurant.restaurantTags.includes(selectedOne)
      );

      setFilteredRestaurants(filtered);
    }
  }, [selectedOne, allRestaurants]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <img
        className="mainBanner"
        src={
          windowWidth >= 1400
            ? main_banner
            : windowWidth <= 600
            ? mobile_banner
            : mid_banner
        }
      />

      <Title>Categorias</Title>
      <CategoriesWrapper style={{ marginBottom: "50px", marginTop: "20px" }}>
        {(categories || []).map((categorie, index) => (
          <CategorieBtn
            isSelected={selectedOne == categorie.tag}
            onClick={() => setSelectedOne(categorie.tag)}
            key={index}
          >
            {categorie.name}
          </CategorieBtn>
        ))}
      </CategoriesWrapper>

      {selectedOne == "all" && <Title>Populares</Title>}

      <RestWrapper>
        {(filteredRestaurants || []).map((restaurant, index) => (
          <RestaurantCard
            id={restaurant._id}
            name={restaurant.name}
            deliveryPrice={restaurant.deliveryPrice}
            deliveryTime="30-40"
            rating={restaurant.rating}
            image={restaurant.banner}
            key={index}
          />
        ))}
      </RestWrapper>

      {selectedOne === "all" && (
        <>
          <Title>Pizzarias</Title>
          <RestWrapper>
            {filteredRestaurants
              .filter((restaurant) => restaurant.category.includes("Pizzaria"))
              .map((restaurant) => (
                <RestaurantCard
                  id={restaurant._id}
                  name={restaurant.name}
                  deliveryPrice={restaurant.deliveryPrice}
                  deliveryTime="30-40"
                  rating={restaurant.rating}
                  image={restaurant.banner}
                  key={restaurant._id}
                />
              ))}
          </RestWrapper>
        </>
      )}
    </Container>
  );
}

export default Hub;
