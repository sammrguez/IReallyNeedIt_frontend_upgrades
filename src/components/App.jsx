import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
/* adicionales */
import { motion } from "framer-motion";

/* contextos  */
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";
import { ProductCategoryContext } from "../contexts/ProductCategoryContext";

/* modulos  */
import Main from "./Main";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Products from "./Products";
import Cart from "./Cart";
import api from "../utils/api";
import Register from "./Register";
import Profile from "./Profile";
import OrderSummary from "./OrderSummary";
import ConfirmationDialog from "./ConfirmationDialog";
import InfoTooltip from "./InfoTooltip";

import Payment from "./Payment";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from "../utils/auth";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [productsFiltered, setProductsFiltered] = useState(false);

  const [category, setCategory] = useState(null);

  const [selectedCard, setSelectedCard] = useState(null);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [promoProduct, setPromoProduct] = useState({});

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [shouldBeInfoOpen, setShouldBeInfoOpen] = useState(false);

  const [trackId, setTrackId] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("jwt"));

  const [user, setUser] = useState({});

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

  const [itemToDelete, setItemToDelete] = useState(null);

  /*funcion check token*/

  useEffect(() => {
    const storedToken = localStorage.getItem("jwt");
    if (storedToken) {
      setToken(storedToken);

      async function getUser() {
        try {
          const userData = await auth.checkToken(token);
          setLoggedIn(true);
          setUser(userData);
        } catch (error) {
          console.error("error");
        }
      }
      getUser();
    }
  }, [token, loggedIn, navigate]);

  function handleLogin() {
    setLoggedIn(true);
  }

  function logOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setTrackId(null);
  }

  // /* Products section */
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (category) {
          // Obtener todos los productos
          const allProducts = await api.getProducts();

          // Filtrar productos por categoría
          const filteredProducts = allProducts.filter(
            (product) => product.category === category
          );

          setProducts(filteredProducts);
        } else {
          // Obtener todos los productos si no hay categoría
          const allProducts = await api.getProducts();
          setProducts(allProducts);
        }

        // Obtener productos promocionales
        const promoProduct = await api.getPromoProduct();
        setPromoProduct(promoProduct);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProduct();
  }, [category]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function cleanFilter() {
    setCategory(null);
  }
  /* Products section */
  async function filterByCategory(category) {
    setCategory(category);
  }

  /* manejar cart */
  //agrega un producto al cart//
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

  //incrementa en +1 un producto ya disponible en el cart//
  function addOneToCart(item) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem._id === item._id) {
        return { ...cartItem, quantity: (cartItem.quantity || 0) + 1 };
      } else {
        return cartItem;
      }
    });
    setCart(updatedCart);
    checkStock(updatedCart, item);
  }

  // revisa con el inventario, cuantas unidades de ese producto hay disponibles//
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

  //disminuye en -1 un producto ya disponible en el cart//
  function decreaseOne(item) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem._id === item._id) {
        const newQuantity = (cartItem.quantity || 1) - 1;
        return { ...cartItem, quantity: newQuantity };
      } else {
        return cartItem;
      }
    });

    setCart(updatedCart);
    checkItemQuantity(updatedCart, item);
  }

  // va revisando la disminución de items de un producto para saber cuando abrir el popup al llegar a 0//
  function checkItemQuantity(updatedCart, item) {
    const cartWithItemToDelete = updatedCart.map((cartItem) => {
      if (cartItem._id === item._id && cartItem.quantity < 1) {
        setOpenConfirmationDialog(true);
        setItemToDelete(item);
      } else {
        return cartItem;
      }
    });
  }

  function deleteOne(item) {
    setOpenConfirmationDialog(true);
    setItemToDelete(item);
  }

  function handleDeleteDialogResponse(answer) {
    if (answer && itemToDelete) {
      console.log("se va a eliminar");
      const updatedCart = cart.filter(
        (cartItem) => cartItem._id !== itemToDelete._id
      );
      setCart(updatedCart); //el cart ahora es el array inicial menos la cart seleccionado
    } else if (!answer && itemToDelete) {
      console.log("se cancela la operación");
      const stillTheSameCart = cart.map((cartItem) => {
        if (cartItem._id === itemToDelete._id) {
          return { ...cartItem, quantity: cartItem.quantity || 1 };
        } else {
          return cartItem;
        }
      });
      setCart(stillTheSameCart);
    }
    setItemToDelete(null);
    closeConfirmationDialog();
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
    navigate("/productos");
    setShouldBeInfoOpen(false);
  }
  function closeConfirmationDialog() {
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
        <ProductCategoryContext.Provider value={category}>
          <NavBar
            onOpenProfile={openProfile}
            loggedIn={loggedIn}
            onCleanFilter={cleanFilter}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  onAddProductClick={handleAddProductToCart}
                  selectedCard={selectedCard}
                  promoProduct={promoProduct}
                  handleFilter={filterByCategory}
                  onCleanFilter={cleanFilter}
                />
              }
            />
            <Route
              path="/productos"
              element={
                <Products
                  products={products}
                  onClose={closeAllPopups}
                  selectedCard={selectedCard}
                  onCardClick={handleCardClick}
                  onAddProductClick={handleAddProductToCart}
                  productsFiltered={productsFiltered}
                />
              }
            />
            <Route
              path="/carrito"
              element={
                <Cart
                  onAddClick={addOneToCart}
                  onRemoveClick={decreaseOne}
                  onDeleteClick={deleteOne}
                  onOpenRegister={openRegister}
                  loggedIn={loggedIn}
                  onClose={closeAllPopups}
                />
              }
            />
            <Route
              path="/registro"
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
                path="/pago"
                element={
                  <Payment handleForm={handleAddressForm} loggedIn={loggedIn} />
                }
              />
              <Route
                path="/perfil"
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
                path="/resumen"
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
          {openConfirmationDialog && (
            <ConfirmationDialog
              onClose={closeConfirmationDialog}
              onResponse={handleDeleteDialogResponse}
            />
          )}
          <Footer />
        </ProductCategoryContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
