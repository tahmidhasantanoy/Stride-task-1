// import Banner from "./Banner/Banner";
import HeroSection from "./HeroSection/HeroSection";
import Carousel from "./Carousel/Carousel";
import Container from "../../Components/Ui/Container";
import UserReviews from "./Review/UserReviews";
import BlogList from "./Blog/BlogList";

const Home = () => {
  return (
    <Container>
      {/* <Banner /> */}
      <HeroSection />
      <Carousel />
      <UserReviews />
      <BlogList />
    </Container>
  );
};

export default Home;
