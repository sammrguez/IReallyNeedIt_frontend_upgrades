import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
 /* adicionales */
 import {motion} from "framer-motion";
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
import ConfirmationDialog from './ConfirmationDialog';
import InfoTooltip from './InfoTooltip';

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

  const [shouldBeInfoOpen, setShouldBeInfoOpen] = useState(false);

  const [trackId, setTrackId] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);

  const [token, setToken] = useState(localStorage.getItem('jwt'));

  const [user, setUser] = useState({});

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

  const [itemToDelete, setItemToDelete] = useState(null);

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
    setTrackId(null);
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
  function handleAddProductToCart(item) {
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

  // function removeOne(item) {
  //   const updatedCart = cart.map((cartItem) => {
  //     if (cartItem._id === item._id) {
  //       const updatedQuantity = (cartItem.quantity || 1) - 1;
  //       if (updatedQuantity === 0) {
  //         console.log('seguro que quieres borrar?');
  //       } else {
  //         console.log(updatedQuantity);
  //         return { ...cartItem, quantity: updatedQuantity };
  //       }
  //     } else {
  //       return cartItem;
  //     }
  //   });
  //   setCart(updatedCart);
  //   checkItemQuantity(updatedCart);
  // }
  function removeOne(item) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem._id === item._id) {
        return { ...cartItem, quantity: (cartItem.quantity || 1) - 1 };
      } else {
        return cartItem;
      }
    });

    setCart(updatedCart);
    checkItemQuantity(updatedCart, item);
  }

  // function checkItemQuantity(updateCart) {

  //   const newdCart = updateCart.filter((cartItem) => cartItem.quantity > 0);

  //   setCart(newdCart);
  // }
  function checkItemQuantity(updatedCart, item) {
    const cartWithItemToDelete = updatedCart.map((cartItem) => {
      if (cartItem._id === item._id && cartItem.quantity === 0) {
        console.log('deseas eliminar?');
        setOpenConfirmationDialog(true);
      } else {
        setOpenConfirmationDialog(false);
        return cartItem;
      }
    });

    // const newdCart = updateCart.map((cartItem) => {
    //   if (cartItem.quantity === 0) {
    //     console.log('deseas eliminar este');
    //   }
    // });
  }
  function handleDeleteDialogResponse(answer){
    if(answer && itemToDelete){
    console.log('se va a eliminar');
    const updatedCart = cart.filter((cartItem) => cartItem._id !== itemToDelete._id);
      setCart(updatedCart);
    } else {
      console.log('se cancela la operacion');
    }
  }

  function deleteOne(item) { 
    setOpenConfirmationDialog(true);
    setItemToDelete(item);
      
    
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
    setShouldBeInfoOpen(false);
  }
  function closeConfirmationDialog(){
    setOpenConfirmationDialog(false);
   
  }
 
  /* funciones para editar usuario */

  async function handleAddressForm(address) {
    try {
      const userWithAdress = await api.setDirection(token, address);
      setUser(userWithAdress);
    } catch (error) {}
  }

  /* funciones para confirmar el pedido*/
  async function handleConfirmOrder(order) {
    try {
      const confirmation = await api.makeOrder(token, order);
      if (confirmation) {
        setTrackId(confirmation.trackId);
        setShouldBeInfoOpen(true);
        setCart([]);
      }
    } catch (error) {}
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
                onAddProductClick={handleAddProductToCart}
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
                onAddProductClick={handleAddProductToCart}
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
                onClose={closeAllPopups}
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
                  trackId={trackId}
                />
              }
            />
            <Route
              path='/resumen'
              element={
                <OrderSummary
                  onConfirmOrder={handleConfirmOrder}
                  shouldBeInfoOpen={shouldBeInfoOpen}
                  trackId={trackId}
                  onClose={closeAllPopups}
                />
              }
            />
          </Route>
        </Routes>
        {openConfirmationDialog && <ConfirmationDialog onClose={closeConfirmationDialog} onResponse={handleDeleteDialogResponse}/>}
        <Footer />
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
