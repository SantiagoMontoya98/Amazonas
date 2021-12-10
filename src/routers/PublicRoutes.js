import { Navigate } from "react-router-dom";

const PublicRoutes = ({ isAuthenticated, children }) => {
  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoutes;
