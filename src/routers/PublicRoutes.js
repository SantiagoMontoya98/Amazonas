import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { logged } = useSelector((state) => state.userLogin);

  return logged ? <Navigate to="/" /> : children;
};

export default PublicRoutes;
