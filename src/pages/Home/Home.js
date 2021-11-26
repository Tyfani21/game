import Slider from "../../components/Slider/slider";
import Container from "../../components/Container/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../../components/card/card";

const Home = () => {
  const [game, setGame] = useState([]);
  const [mounted, setMounted] = useState(false);
  const getData = async () => {
   try{
    const response = await axios.get("https://nintendo-shop.herokuapp.com/game/findMany");
    setGame(response.data)}catch(err){console.log(err)}
  };
  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);
  console.log(game)
  return (
    <div className="background">
      <section className="content">
        <Slider
          id="4aaa14cc-7bf1-4b8e-85a9-53907b0ff1ca"
          classificationNumber="18"
          classificationText="Violência, Conteúdo Sexual"
        />
        <Container title="Destaques">
          {game.map((game) => (
            <Card
              id={game.id}
              image={game.image}
              name={game.name}
              price={game.price}
              key={game.id}
            />
          ))}
        </Container>
      </section>
    </div>
  );
};
export default Home;
