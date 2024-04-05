import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from './Main';
import NavBar from './NavBar';
import Footer from './Footer';
import Products from './Products';
import Cart from './Cart';
import api from '../utils/api';
import { CartContext } from '../contexts/CartContext';
import Register from './Register';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cart, setCart] = useState([]);
  const [promoProduct, setPromoProduct] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await api.getProducts();

        setProducts(products);
      } catch (error) {
        console.error('error al obtener productos');
      }
    }
    fetchProducts();

    async function fetchPromoProducts() {
      try {
        const promoProduct = await api.getPromoProduct();
        setPromoProduct(promoProduct);
      } catch (error) {
        console.error('error al obtener productos');
      }
    }
    fetchPromoProducts();
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setSelectedCard(false);
  }
  function handleCartProducts(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  return (
    <CartContext.Provider value={cart}>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <Main
              onAddProductClick={handleCartProducts}
              selectedCard={selectedCard}
              promoProduct={promoProduct}
            />
          }
        />
        <Route
          path='/productos'
          element={
            <Products
              products={products}
              onClose={closeAllPopups}
              selectedCard={selectedCard}
              onCardClick={handleCardClick}
              onAddProductClick={handleCartProducts}
            />
          }
        />
        <Route path='/carrito' element={<Cart />} />
        <Route path='/registro' element={<Register />} />
      </Routes>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
