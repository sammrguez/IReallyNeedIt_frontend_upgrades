const BASE_URL = 'http://localhost:3000';

export const registerAndLogin = (user) => {
  console.log(user);
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
        console.log('info llego ok');
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((data) => {
      if (data && data.token) {
        localStorage.setItem('jwt', data.token);
        console.log(data.token);
        return data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const checkToken = () => {
  fetch;
};
