import Hero from "../components/home/Hero";
import Story from "../components/home/Story";
import FeaturedMenu from "../components/home/FeaturedMenu";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <FeaturedMenu />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;