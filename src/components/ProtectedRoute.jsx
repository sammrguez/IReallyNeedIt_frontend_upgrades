import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute({ loggedIn }) {
  console.log(loggedIn);
  return loggedIn ? <Outlet /> : <Navigate to='/carrito' />;
}

export default ProtectedRoute;
