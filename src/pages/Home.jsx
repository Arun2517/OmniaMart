import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ProductGrid from "../components/Product/ProductGrid";
import Footer from "../components/Footer/Footer";
import CartDrawer from "../components/Cart/CartDrawer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductGrid />
      <CartDrawer />
      <Footer />
    </>
  );
}

export default Home;