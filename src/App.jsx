import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections/index.js";
import Nav from "./components/Nav";
import ProductDetail from './sections/ProductDetail.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cart from "./sections/Cart";
import { Link } from 'react-router-dom'
import { products } from './constants';
import Button from './components/Button.jsx';
import { star } from './assets/icons/index.js';
import useAddToCartLabel from './hooks/useAddToCartLabel';
import ShoesList from './sections/ShoesList.jsx';
import CheckoutCompleted from './sections/CheckoutCompleted.jsx';

const App = () => {
  const { productName } = useParams();

  const [cartCount, setCartCount] = useState(() => {
    const savedCount = localStorage.getItem('cartCount');
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartCount', JSON.stringify(cartCount));
  }, [cartCount]);

  const incrementCartCount = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const resetCart = () => {
    setCartCount(0);
    localStorage.removeItem('cartCount');
    localStorage.removeItem('cartProducts');
    if (Array.isArray(products)) {
      products.forEach(product => {
        localStorage.removeItem(`addToCartLabel-${product.name}`);
      });
    }
  };

  if (cartCount == 0 || !cartCount) {
    if (Array.isArray(products)) {
      products.forEach(product => {
        localStorage.removeItem(`addToCartLabel-${product.name}`);
      });
    }
  }
  const ClickSuccess = (addToCartLabel, setAddToCartLabel, product) => {
    if (addToCartLabel === "Add to cart") {
      const newLabel = "Added to cart!";
      setAddToCartLabel(newLabel);
      incrementCartCount();

      const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
      const productDetails = { imgURL: product.imgURL, name: product.name, price: product.price };
      cartProducts.push(productDetails);
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

      localStorage.setItem(`addToCartLabel-${productName}`, newLabel);
    }
  }

  return (
    <Router basename="/nike-shoes-website-project">
      <main className="relative">
        <Nav cartCount={cartCount} />
        <Routes>
          <Route path="/" element={
            <>
              <section className="xl:padding-l padding-b max-xl:pt-10">
                <Hero />
              </section>
              <section className="padding">
                <PopularProducts />
              </section>
              <section className="padding">
                <SuperQuality />
              </section>
              <section className="xl:padding max-xl:px-8 lg:my-[80px]">
                <Services />
              </section>
              <section className="padding">
                <SpecialOffer />
              </section>
              <section className="bg-pale-blue padding-plus my-[80px]">
                <CustomerReviews />
              </section>
              <section className="-mt-[80px] sm:px-16 px-8 sm:py-20 py-12">
                <Subscribe />
              </section>
            </>
          } />
          <Route path="/product/:productName" element={<ProductDetail incrementCartCount={incrementCartCount} />} />
          <Route path='/cart' element={
            <>
              <section className="padding">
                <Cart cartCount={cartCount} resetCart={resetCart} setCartCount={setCartCount} />
              </section>
            </>
          } />
          <Route path='/cart/checkout' element={<CheckoutCompleted />} />
          <Route path="*" element={
            <>
              <section className="padding">
                <div className="flex justify-center items-center h-[100vh] w-full max-container">
                  <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-[80px] font-semibold">404</h1>
                    <p className="text-2xl font-semibold">Page Not Found</p>
                    <Link to="/">
                      <Button label="Go Back" />
                    </Link>
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path='/products' element={
            <section className="padding">
              <ShoesList />
            </section>
          } />
        </Routes>
        <section>
          <Footer />
        </section>
      </main>
    </Router>
  );
}

export default App;