import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  SearchWrapper,
  SearchInput,
  CategorieBtn,
  CategoriesWrapper,
  RestWrapper
} from "./styles";
import { consultRestaurants } from "../../services/api";
import { FaSearch, LuSearch } from "../../styles/Icons";
import RestaurantCard from "../../components/RestaurantCard";

function Hub() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [selectedOne, setSelectedOne] = useState("all");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  useEffect(() => {
    if (selectedOne === "all") {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filtered = allRestaurants.filter(restaurant =>
        restaurant.tags.includes(selectedOne)
      );
      setFilteredRestaurants(filtered);
    }
  }, [selectedOne, allRestaurants]);

  return (
    <Container>
      <SearchWrapper>
        <LuSearch size={25} />
        <SearchInput placeholder="Procure por pratos e restaurantes.." />
      </SearchWrapper>

      <Title>Categorias</Title>
      <CategoriesWrapper>
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

      <Title>Restaurantes mais populares</Title>
      <RestWrapper>
        {(filteredRestaurants || []).map((restaurant, index) => (
          <RestaurantCard
            name={restaurant.name}
            deliveryPrice={restaurant.deliveryPrice}
            deliveryTime="30-40"
            rating={restaurant.rating}
            image={restaurant.picture}
            key={index}
          />
        ))}
      </RestWrapper>
    </Container>
  );
}

export default Hub;
