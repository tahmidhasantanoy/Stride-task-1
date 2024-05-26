import HeroSection from "./HeroSection/HeroSection";
import Carousel from "./Carousel/Carousel";
import Container from "../../Components/Ui/Container";
import UserReviews from "./Review/UserReviews";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Carousel />
      <UserReviews />
    </Container>
  );
};

export default Home;
