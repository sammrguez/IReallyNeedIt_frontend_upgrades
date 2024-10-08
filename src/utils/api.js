class Api {
  constructor({ BASE_URL }) {
    this._URL = BASE_URL;
  }
  _makeRequest(endpoint, token = null, method = "GET", body = null) {
    const options = {
      method,
      headers: {
        Accept: "application/json",
      },
    };

    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }
    if (body) {
      options.headers["content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }
    return fetch(`${this._URL}${endpoint}`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .catch((err) => console.log(`Error: ${err}`));
  }
  getProducts() {
    return this._makeRequest("/productos");
  }
  getProductById(productId) {
    return this._makeRequest(`/productos/${productId}`);
  }
  getPromoProduct() {
    return this._makeRequest("/");
  }

  getUserData(token) {
    return this._makeRequest("/users/me", token);
  }

  registerGuestUser(email, name, userId) {
    return this._makeRequest("/api/users", null, "POST", {
      userId,
      name,
      email,
    });
  }
  setDirection(token, address) {
    return this._makeRequest("/users/me/address", token, "PATCH", address);
  }

  makeOrder(token, order) {
    console.log(order);
    return this._makeRequest("/resumen", token, "POST", order);
  }
}

const api = new Api({
  // BASE_URL: "https://i-really-need-it-shop-backend.vercel.app",
  BASE_URL: "http://localhost:3000",
});

export default api;
