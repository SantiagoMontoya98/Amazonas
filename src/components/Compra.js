import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Compra = () => {
  const navegar = useNavigate();

  const mensaje = () => {
    Swal.fire({
      icon: "success",
      title: "Compra realizada con éxito",
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
      navegar("/");
    }, 2000);
  };

  return <>{mensaje()}</>;
};

export default Compra;
