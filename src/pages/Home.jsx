import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ProductGrid from "../components/Product/ProductGrid";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </>
  );
}

export default Home;