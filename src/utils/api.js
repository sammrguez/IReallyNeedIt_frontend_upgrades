class Api {
  constructor({ BASE_URL }) {
    this._URL = BASE_URL;
  }
  _makeRequest(endpoint, token = null, method = 'GET', body = null) {
    const options = {
      method,
      headers: {
        Accept: 'application/json',
      },
    };

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }
    if (body) {
      options.headers['content-Type'] = 'application/json';
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
    return this._makeRequest('/productos');
  }

  getPromoProduct() {
    return this._makeRequest('/');
  }

  getUserData(token) {
    return this._makeRequest('/users/me', token);
  }
  setDirection(token, address) {
    return this._makeRequest('/users/me/address', token, 'PATCH', address);
  }

  makeOrder(token, order) {
    return this._makeRequest('/orders/confirm', token, 'POST', order);
  }
}

const api = new Api({
  BASE_URL: 'http://localhost:3000',
});

export default api;
