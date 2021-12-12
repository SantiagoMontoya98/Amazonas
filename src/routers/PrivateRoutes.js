import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { logged } = useSelector((state) => state.userLogin);

  return logged === undefined || logged ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
