import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
import Profile from './Profile';
import OrderSummary from './OrderSummary';

import Payment from './Payment';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../utils/auth';

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [selectedCard, setSelectedCard] = useState(null);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [promoProduct, setPromoProduct] = useState({});

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const [token, setToken] = useState(localStorage.getItem('jwt'));

  const [user, setUser] = useState({});

  /*funcion check token*/

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    if (storedToken) {
      setToken(storedToken);

      async function getUser() {
        try {
          const userData = await auth.checkToken(token);
          setLoggedIn(true);
          setUser(userData);
        } catch (error) {
          console.error('error');
        }
      }
      getUser();
    }
  }, [token, loggedIn, navigate]);

  function handleLogin() {
    setLoggedIn(true);
  }

  function logOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  }
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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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

  /* terminan funciones cart */

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  /* funciones para abrir y cerrar popups */

  function openRegister() {
    setIsRegisterOpen(true);
  }
  function openProfile() {
    setIsProfileOpen(true);
  }

  function closeAllPopups() {
    setSelectedCard(false);
    setIsRegisterOpen(false);
    setIsProfileOpen(false);
    navigate('/productos');
  }
  /* funciones para editar usuario */

  async function handleAddressForm(address) {
    try {
      const userWithAdress = await api.setDirection(token, address);
      setUser(userWithAdress);
    } catch (error) {
      console.log('no se pudo obtener');
    }
  }

  /* funciones para confirmar el pedido*/
  async function handleConfirmOrder(order) {
    try {
      console.log(order);
      const confirmation = await api.makeOrder(token, order);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={user}>
      <CartContext.Provider value={cart}>
        <NavBar onOpenProfile={openProfile} loggedIn={loggedIn} />
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
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path='/registro'
            element={
              <Register
                onClose={closeAllPopups}
                isOpen={isRegisterOpen}
                handleLogin={handleLogin}
              />
            }
          />
          <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              path='/pago'
              element={
                <Payment handleForm={handleAddressForm} loggedIn={loggedIn} />
              }
            />
            <Route
              path='/perfil'
              element={
                <Profile
                  onClose={closeAllPopups}
                  isOpen={isProfileOpen}
                  onLogOut={logOut}
                />
              }
            />
            <Route path='/resumen' element={<OrderSummary />} />
          </Route>
        </Routes>
        <Footer />
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
