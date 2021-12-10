import CardsMain from "./CardsMain";
import Slider from "../components/Slider";
import SliderProducts from "../components/SliderProducts";
import { HomeContainer } from "../styles/HomeStyles";
import { GlobalStyles } from "../styles/GlobalStyles";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = ({ userName }) => {
  return (
    <HomeContainer>
      <Header userName={userName} />
      <NavBar />
      <Slider />
      <CardsMain />
      <SliderProducts />
    </HomeContainer>
  );
};

export default Home;
