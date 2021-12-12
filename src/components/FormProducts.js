import { Link, useNavigate } from "react-router-dom";
import { FormContainer } from "../styles/FormProductsStyles";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getDocs,
  collection,
  doc,
  updateDoc,
  query,
  where,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState } from "react";
import Swal from "sweetalert2";

const FormProducts = () => {
  const [display, setDisplay] = useState("ocultar");
  const [title, setTitle] = useState("Buscar Producto");
  const [docId, setDocId] = useState("");
  const navegar = useNavigate();

  const searchProduct = async (coleccion, product) => {
    const docRef = collection(db, coleccion);
    const getData = await getDocs(docRef);

    let productSearch;

    getData.forEach((doc) => {
      if (doc.data().name.toLowerCase().includes(product)) {
        setDocId(doc.id);
        productSearch = doc.data();
      }
    });

    return productSearch;
  };

  const updateProduct = async (
    name,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    category,
    price
  ) => {
    const coleccion = category.toLowerCase();

    const docRef2 = doc(db, coleccion, docId);

    await updateDoc(docRef2, {
      name: name,
      desc1: desc1,
      desc2: desc2,
      desc3: desc3,
      desc4: desc4,
      desc5: desc5,
      category: category,
      price: Number(price),
    })
      .then((resp) => {
        Swal.fire({
          icon: "success",
          title: "Producto actualizado con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
        navegar(`/productos/${coleccion}`);
      })

      .catch((err) => console.log(err));
  };

  const deleteProduct = async (categoria, name) => {
    const coleccion = categoria.toLowerCase();

    const estCollection = collection(db, coleccion);

    const q = query(estCollection, where("name", "==", name));

    const datos = await getDocs(q);

    datos.forEach((docu) => {
      Swal.fire({
        title: "Estas seguro?",
        text: "Esta acción no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonText: "Si eliminar!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteDoc(doc(db, coleccion, docu.id));
          Swal.fire({
            icon: "success",
            title: "Producto eliminado con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
          navegar(`/productos/${coleccion}`);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
    });
  };

  const ProductSchema = Yup.object().shape({
    name: Yup.string().required("Introduce el nombre del producto"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      desc5: "",
      price: "",
      category: "",
    },
    onSubmit: async (values) => {
      let product;

      Swal.fire({
        icon: "success",
        title: "Buscando...",
        showConfirmButton: false,
        timer: 2000,
      });

      product = await searchProduct("SliderProducts", values.name);

      if (product === undefined) {
        product = await searchProduct("auriculares", values.name);
      }

      if (product === undefined) {
        product = await searchProduct("computadores", values.name);
      }

      if (product === undefined) {
        product = await searchProduct("controles", values.name);
      }

      if (product === undefined) {
        product = await searchProduct("electronicos", values.name);
      }

      if (product === undefined) {
        product = await searchProduct("oculus", values.name);
      }

      if (product === undefined) {
        product = await searchProduct("ofertas", values.name);
      }

      if (product === undefined) {
        product = await searchProduct("ratones", values.name);
      }

      if (product === undefined) {
        product = await searchProduct("sillas", values.name);
      }

      if (product === undefined) {
        product = await searchProduct("tablets", values.name);
      }

      if (product === undefined) {
        product = await searchProduct("teclados", values.name);
      }

      if (product === undefined) {
        product = await searchProduct("videojuegos", values.name);
      }

      if (product !== undefined) {
        formik.values.name = product.name;
        formik.values.desc1 = product.desc1;
        formik.values.desc2 = product.desc2;
        formik.values.desc3 = product.desc3;
        formik.values.desc4 = product.desc4;
        formik.values.desc5 = product.desc5;
        formik.values.price = product.price;
        formik.values.category = product.category;
        setDisplay("");
        setTitle("Actualizar o Eliminar Producto");

        document
          .getElementById("category")
          .querySelectorAll(".categoria")
          .forEach((el) => el.removeAttribute("selected"));

        document
          .getElementById("category")
          .querySelector(`#${formik.values.category}`)
          .setAttribute("selected", true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Producto no econtrado!",
        });
      }
    },
    validationSchema: ProductSchema,
  });

  return (
    <FormContainer>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/logo-amazonas_qisi37.png"
          alt="Amazonas"
          className="logo"
        />
      </Link>

      <form className="form-login" onSubmit={formik.handleSubmit}>
        <h1 className="h1">{title}</h1>
        <div className="input-container">
          <label for="name">Nombre</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="error">
              <em className="logo-error">! </em> {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className={`input-container ${display}`}>
          <label for="name">Descripción 1</label>
          <textarea
            name="desc1"
            onChange={formik.handleChange}
            value={formik.values.desc1}
          />
          {formik.errors.desc1 ? (
            <div className="error">
              <em className="logo-error">! </em> {formik.errors.desc1}
            </div>
          ) : null}
        </div>
        <div className={`input-container ${display}`}>
          <label for="name">Descripción 2</label>
          <textarea
            name="desc2"
            onChange={formik.handleChange}
            value={formik.values.desc2}
          />
          {formik.errors.desc2 ? (
            <div className="error">
              <em className="logo-error">! </em> {formik.errors.desc2}
            </div>
          ) : null}
        </div>
        <div className={`input-container ${display}`}>
          <label for="name">Descripción 3</label>
          <textarea
            name="desc3"
            onChange={formik.handleChange}
            value={formik.values.desc3}
          />
          {formik.errors.desc3 ? (
            <div className="error">
              <em className="logo-error">! </em> {formik.errors.desc3}
            </div>
          ) : null}
        </div>
        <div className={`input-container ${display}`}>
          <label for="name">Descripción 4</label>
          <textarea
            name="desc4"
            onChange={formik.handleChange}
            value={formik.values.desc4}
          />
          {formik.errors.desc4 ? (
            <div className="error">
              <em className="logo-error">! </em> {formik.errors.desc4}
            </div>
          ) : null}
        </div>
        <div className={`input-container ${display}`}>
          <label for="name">Descripción 5</label>
          <textarea
            name="desc5"
            onChange={formik.handleChange}
            value={formik.values.desc5}
          />
          {formik.errors.desc5 ? (
            <div className="error">
              <em className="logo-error">! </em> {formik.errors.desc5}
            </div>
          ) : null}
        </div>
        <div className={`input-container ${display}`}>
          <label for="category">Categoria</label>
          <select name="category" onChange={formik.handleChange} id="category">
            <option value="Electronicos" disabled>
              Electrónicos
            </option>
            <option
              value="Computadores"
              className="categoria"
              id="Computadores"
              disabled
            >
              Computadores
            </option>
            <option
              value="Videojuegos"
              className="categoria"
              id="Videojuegos"
              disabled
            >
              Videojuegos
            </option>
            <option value="Ofertas" className="categoria" id="Ofertas" disabled>
              Ofertas y promociones
            </option>
            <option
              value="Hardware"
              className="categoria"
              id="Hardware"
              disabled
            >
              Hardware
            </option>
            <option
              value="Auriculares"
              className="categoria"
              id="Auriculares"
              disabled
            >
              Auriculares
            </option>
            <option value="Sillas" className="categoria" id="Sillas" disabled>
              Sillas
            </option>
            <option value="Ratones" className="categoria" id="Ratones" disabled>
              Ratones de computador
            </option>
            <option
              value="Teclados"
              className="categoria"
              id="Teclados"
              disabled
            >
              Teclados
            </option>
            <option
              value="Controles"
              className="categoria"
              id="Controles"
              disabled
            >
              Controles
            </option>
            <option value="Oculus" className="categoria" id="Oculus" disabled>
              Oculus
            </option>
            <option value="Tablets" className="categoria" id="Tablets" disabled>
              Tablets
            </option>
          </select>
        </div>

        <div className={`input-container ${display}`}>
          <label for="price">Precio</label>
          <input
            type="text"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price ? (
            <div className="error">
              <em className="logo-error">! </em> {formik.errors.price}
            </div>
          ) : null}
        </div>
        <input type="submit" value="Buscar" className="button" />
        <input
          type="button"
          value="Actualizar"
          className={`button ${display}`}
          onClick={() =>
            updateProduct(
              formik.values.name,
              formik.values.desc1,
              formik.values.desc2,
              formik.values.desc3,
              formik.values.desc4,
              formik.values.desc5,
              formik.values.category,
              formik.values.price
            )
          }
        />
        <input
          type="button"
          value="Eliminar"
          className={`button ${display}`}
          onClick={() =>
            deleteProduct(formik.values.category, formik.values.name)
          }
        />
      </form>
      <Link to="/" className="link-inicio">
        Regresar al Inicio
      </Link>
    </FormContainer>
  );
};

export default FormProducts;
