import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute({ loggedIn }) {
  return loggedIn ? <Outlet /> : <Navigate to='/carrito' />;
}

export default ProtectedRoute;
