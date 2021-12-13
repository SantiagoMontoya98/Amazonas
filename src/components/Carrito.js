import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CarritoContainer } from "../styles/CarritoStyles";
import { useSelector } from "react-redux";
import Header from "./Header";
import NavBar from "./NavBar";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";

const Carrito = () => {
  const [products, setProducts] = useState();

  const [cantidad, setCantidad] = useState(0);

  const [subtotal, setSubtotal] = useState(0);

  const { logged } = useSelector((state) => state.userLogin);

  const navegar = useNavigate();

  useEffect(() => {
    const getCarrito = async () => {
      let docRef = collection(db, "carrito");
      let getData = await getDocs(docRef);

      let products2 = [],
        cantidad = 0,
        subtotal = 0;

      getData.forEach((doc) => {
        products2.push(doc.data());
        cantidad += doc.data().amount;
        subtotal += doc.data().price * doc.data().amount;
      });

      setProducts(products2);
      setCantidad(cantidad);
      setSubtotal(subtotal);
    };

    getCarrito();
  }, []);

  //console.log(products);

  useEffect(() => {
    const getCarrito = async () => {
      let docRef = collection(db, "carrito");
      let getData = await getDocs(docRef);

      let products2 = [],
        cantidad = 0,
        subtotal = 0;

      getData.forEach((doc) => {
        products2.push(doc.data());
        cantidad += doc.data().amount;
        subtotal += doc.data().price * doc.data().amount;
      });

      setProducts(products2);
      setCantidad(cantidad);
      setSubtotal(subtotal);
    };

    getCarrito();
  }, [products]);

  const handleDelete = async ({ target }) => {
    const product =
      target.parentElement.querySelector(".description").textContent;

    let docRef = collection(db, "carrito");
    let getData = await getDocs(docRef);

    getData.forEach((docu) => {
      if (docu.data().name === product) {
        deleteDoc(doc(db, "carrito", docu.id));
      }
    });
  };

  const handleComprar = async () => {
    if (logged) {
      let docRef = collection(db, "carrito");
      let getData = await getDocs(docRef);

      getData.forEach((docu) => {
        deleteDoc(doc(db, "carrito", docu.id));
      });

      if (products.length !== 0) {
        navegar("/compra");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No hay productos para comprar!",
        });
      }
    } else {
      navegar("/compra");
    }
  };

  return (
    <>
      <Header />
      <NavBar />
      <CarritoContainer>
        <h1>
          {products?.length !== 0
            ? "Carrito "
            : "Tu carrito de Amazonas está vacío"}
        </h1>
        <p className="title-price">Precio</p>

        {products?.length !== 0 ? (
          <div
            className="product-container"
            style={{ borderTop: "2px solid #ddd" }}
          >
            <Link
              to={`/detalle/${products ? products[0].path : ""}`}
              className="img-link"
            >
              <img
                src={products ? products[0].img : ""}
                alt={products ? products[0].name : ""}
              />
            </Link>

            <div className="description-container">
              <Link
                to={`/detalle/${products ? products[0].path : ""}`}
                className="link"
              >
                <p className="description">
                  {products ? products[0].name : ""}
                </p>
              </Link>

              <p>Cantidad: {products ? products[0].amount : ""}</p>

              <p className="eliminar" onClick={handleDelete}>
                Eliminar
              </p>
            </div>

            <p className="price">US${products ? products[0].price : ""}</p>
          </div>
        ) : (
          ""
        )}

        {products?.length !== 0
          ? products?.map((el, index) => {
              if (index > 0) {
                return (
                  <div className="product-container">
                    <Link to={`/detalle/${el?.path}`} className="img-link">
                      <img src={el?.img} alt={el?.name} />
                    </Link>

                    <div className="description-container">
                      <Link to={`/detalle/${el?.path}`} className="link">
                        <p className="description">{el?.name}</p>
                      </Link>
                      <p>Cantidad: {el.amount}</p>

                      <p className="eliminar" onClick={handleDelete}>
                        Eliminar
                      </p>
                    </div>

                    <p className="price">US${el?.price}</p>
                  </div>
                );
              }
            })
          : ""}

        <p className="subtotal">
          <span>Subtotal ({cantidad} productos):</span> US${subtotal.toFixed(2)}
        </p>
        <div className="button-container">
          <button className="comprar" onClick={handleComprar}>
            Comprar ahora
          </button>
        </div>
      </CarritoContainer>
    </>
  );
};

export default Carrito;
