import React, { useEffect, useState } from "react";
import { Container, FoodSearch, FoodWrapper, ItemWrapper } from "./styles";
import { useLocation, useNavigate } from "react-router";
import { searchForParameter } from "../../../services/api";
import RestaurantCard from "../../../components/RestaurantCard";
import { RestWrapper, CategorieBtn, CategoriesWrapper } from "../styles";
import Title from "../../../components/Title";
import FoodCard from "../../../components/FoodCard";

function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const term = searchParams.get("term");
  const [results, setResults] = useState();
  const [selectedOne, setSelectedOne] = useState("restaurants");
  const navigate = useNavigate();

  // busca pelo termo da url no banco de dados
  useEffect(() => {
    const getFilteredResults = async () => {
      const response = await searchForParameter(term);

      setResults(response);
    };

    getFilteredResults();
  }, [term]);

  const types = [
    {
      name: "Restaurantes",
      tag: "restaurants",
    },
    {
      name: "Items",
      tag: "items",
    },
  ];

  return (
    <Container>
      <sub className="search-result-title">
        Resultados da busca por: <span>{term}</span>
      </sub>
      <Title>O que você procura?</Title>
      <CategoriesWrapper style={{ marginBottom: "50px", marginTop: "20px" }}>
        {(types || []).map((type, index) => (
          <CategorieBtn
            isSelected={selectedOne === type.tag}
            onClick={() => setSelectedOne(type.tag)}
            key={index}
          >
            {type.name}
          </CategorieBtn>
        ))}
      </CategoriesWrapper>
      <FoodWrapper direction={selectedOne}>
        {(results || []).map((restaurant, index) => (
          <div key={index}>
            {selectedOne === "restaurants" ? (
              <RestaurantCard
                id={restaurant._id}
                name={restaurant.name}
                deliveryPrice={restaurant.deliveryPrice}
                deliveryTime="30-40"
                rating={restaurant.rating}
                image={restaurant.banner}
              />
            ) : selectedOne === "items" &&
              restaurant.menu &&
              restaurant.menu.length > 0 ? (
              <ItemWrapper>
                <div className="wrapper">
                  <img src={restaurant.picture} alt={restaurant.name} />
                  <div>
                    <h4>{restaurant.name}</h4>
                    <sub>{restaurant.description}</sub>
                  </div>
                </div>
                <div className="itemsRow">
                  {(restaurant.menu || []).map((item, itemIndex) => (
                    <FoodSearch key={itemIndex}>
                      <div
                        className="itemWrapper"
                        onClick={() =>
                          navigate(`/restaurant/${restaurant._id}`)
                        }
                      >
                        <FoodCard
                          id={item._id}
                          name={item.name}
                          price={item.price}
                          image={item.picture}
                          description={item.description}
                        />
                      </div>
                    </FoodSearch>
                  ))}
                </div>
              </ItemWrapper>
            ) : null}
          </div>
        ))}
      </FoodWrapper>
    </Container>
  );
}

export default SearchResult;
