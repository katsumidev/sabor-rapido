import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  RestaurantInfo,
  TagsWrapper,
  Tag,
  Heading,
  MainInfo,
  MenuWrapper,
  Menu,
} from "./styles";
import { useParams } from "react-router";
import { consultRestaurants } from "../../services/api";
import { FaStar, FaTruck, MdLocationOn, FaPhone } from "../../styles/Icons";
import FoodCard from "../../components/FoodCard";
import { CategoriesWrapper, CategorieBtn } from "../Hub/styles";
import Title from "../../components/Title";

function RestaurantPage() {
  const { id } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [filteredFood, setFilteredFood] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOne, setSelectedOne] = useState("all");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await consultRestaurants(id);
        setRestaurantInfo(response);
      } catch (error) {
        setError(error.message || "Erro ao obter informações do restaurante");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  useEffect(() => {
    if (selectedOne === "all") {
      setFilteredFood(restaurantInfo?.menu || []);
    } else {
      const filtered = restaurantInfo?.menu?.filter(
        (food) => food.tag && food.tag.includes(selectedOne)
      );

      setFilteredFood(filtered || []);
    }
  }, [selectedOne, restaurantInfo?.menu]);

  return (
    <Container>
      {loading ? (
        "Carregando..."
      ) : error ? (
        `Erro: ${error}`
      ) : (
        <Wrapper>
          <RestaurantInfo>
            <img className="profilePicture" src={restaurantInfo?.banner} />
            <Heading>
              <div className="titleInfo">
                <sub className="deliveryInfo">
                  <FaTruck />
                  <span>Hoje, </span>
                  {restaurantInfo?.deliveryTime} min •{" "}
                  <span>{(restaurantInfo?.deliveryPrice || "").toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                </sub>
                <h3>{restaurantInfo?.name}</h3>
                <sub className="description">{restaurantInfo?.description}</sub>
              </div>
              <Tag>
                <FaStar color="#FFBC0B" /> {restaurantInfo?.rating}
              </Tag>
            </Heading>

            <TagsWrapper>
              <Tag>{restaurantInfo.category}</Tag>
            </TagsWrapper>

            <MainInfo>
              <div>
                <sub>
                  <MdLocationOn size={15} /> Endereço do restaurante
                </sub>
                <span>
                  <h4>{restaurantInfo?.address}</h4>
                </span>
              </div>
              <div>
                <sub>
                  <FaPhone /> Telefone para pedidos
                </sub>
                <span>
                  <h4>{restaurantInfo?.phone}</h4>
                </span>
              </div>
            </MainInfo>
          </RestaurantInfo>
          <MenuWrapper>
            <Title>Cardápio</Title>
            <CategoriesWrapper>
              <CategorieBtn isSelected={selectedOne == "all"} onClick={() => setSelectedOne("all")}>Todos</CategorieBtn>
              {(restaurantInfo?.menuTags || []).map((tag, index) => (
                <CategorieBtn
                  isSelected={selectedOne == tag}
                  onClick={() => setSelectedOne(tag)}
                  key={index}
                >
                  {tag}
                </CategorieBtn>
              ))}
            </CategoriesWrapper>

            <Menu>
              {(filteredFood || []).map((item, index) => (
                <FoodCard
                  image={item.picture}
                  price={item.price}
                  description={item.description}
                  name={item.name}
                  key={index}
                />
              ))}
            </Menu>
          </MenuWrapper>
        </Wrapper>
      )}
    </Container>
  );
}

export default RestaurantPage;
