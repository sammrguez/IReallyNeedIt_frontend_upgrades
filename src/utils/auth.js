const BASE_URL = 'https://i-really-need-it-shop-backend.vercel.app';

export const registerAndLogin = (user) => {
  return fetch(`${BASE_URL}/registro`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      googleId: user.googleId,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((data) => {
      if (data && data.token) {
        localStorage.setItem('jwt', data.token);

        return data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.json();
  });
};
