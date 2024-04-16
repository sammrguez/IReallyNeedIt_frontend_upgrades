import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* contextos  */
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

/* modulos  */
import Main from './Main';
import NavBar from './NavBar';
import Footer from './Footer';
import Products from './Products';
import Cart from './Cart';
import api from '../utils/api';
import Register from './Register';
import Login from './Login';
import * as auth from '../utils/auth';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cart, setCart] = useState([]);
  const [promoProduct, setPromoProduct] = useState({});
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  /* inicios de sesion  */

  const [user, setUser] = useState({});

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

  /* inicios de sesion  */

  /* manejar cart */
  function handleCartProducts(item) {
    let repeatedCard = cart.find((element) => element._id === item._id);
    if (repeatedCard) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem._id === item._id) {
          return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 };
        } else {
          return cartItem;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function addOneToCart(item) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem._id === item._id) {
        return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 };
      } else {
        return cartItem;
      }
    });
    setCart(updatedCart);
    checkStock(updatedCart, item);
  }

  function checkStock(updatedCart, item) {
    const itemToCheck = updatedCart.find(
      (cartItem) => cartItem._id === item._id
    );

    if (itemToCheck.quantity > itemToCheck.available) {
      console.log(
        ` solo hay ${itemToCheck.available} piezas disponibles de este producto`
      );
    }
  }

  function removeOne(item) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem._id === item._id) {
        return { ...cartItem, quantity: (cartItem.quantity || 1) - 1 };
      } else {
        return cartItem;
      }
    });

    setCart(updatedCart);
    checkItemQuantity(updatedCart);
  }

  function checkItemQuantity(updateCart) {
    const newdCart = updateCart.filter((cartItem) => cartItem.quantity > 0);

    setCart(newdCart);
  }

  function deleteOne(item) {
    const updatedCart = cart.filter((cartItem) => cartItem._id !== item._id);

    setCart(updatedCart);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function openRegister() {
    setIsRegisterOpen(true);
  }
  function openLogin() {
    setIsLoginOpen(true);
    console.log('ya debe abrir');
  }
  function closeAllPopups() {
    setSelectedCard(false);
    setIsRegisterOpen(false);
    setIsLoginOpen(false);
  }

  return (
    <UserContext.Provider value={user}>
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
          <Route
            path='/carrito'
            element={
              <Cart
                onAddClick={addOneToCart}
                onRemoveClick={removeOne}
                onDeleteClick={deleteOne}
                onOpenRegister={openRegister}
              />
            }
          />
          <Route
            path='/registro'
            element={
              <Register
                onClose={closeAllPopups}
                isOpen={isRegisterOpen}
                onOpenLogin={openLogin}
              />
            }
          />
          <Route
            path='/login'
            element={<Login onClose={closeAllPopups} isOpen={isLoginOpen} />}
          />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
