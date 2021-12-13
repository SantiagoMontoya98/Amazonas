import CardsMain from "./CardsMain";
import Slider from "../components/Slider";
import SliderProducts from "../components/SliderProducts";
import { HomeContainer } from "../styles/HomeStyles";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <NavBar />
      <Slider />
      <CardsMain />
      <SliderProducts />
    </HomeContainer>
  );
};

export default Home;
