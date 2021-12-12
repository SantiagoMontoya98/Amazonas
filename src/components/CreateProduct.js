import { Link, useNavigate } from "react-router-dom";
import { FormContainer } from "../styles/CreateProductStyles";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fileUpload } from "../helpers/fileUpload";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import uuid from "react-uuid";
import { useState } from "react";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const [errorsImg, setErrorsImg] = useState("none");
  const [errorImg1, setErrorImg1] = useState("hidden");
  const [errorImg2, setErrorImg2] = useState("hidden");
  const [errorImg3, setErrorImg3] = useState("hidden");

  const navegar = useNavigate();

  const ProductSchema = Yup.object().shape({
    name: Yup.string().required("Introduce el nombre del producto"),
    desc1: Yup.string().required("Introduce la primera descripción"),
    desc2: Yup.string().required("Introduce la segunda descripción"),
    desc3: Yup.string().required("Introduce la tercera descripción"),
    desc4: Yup.string().required("Introduce la cuarta descripción"),
    desc5: Yup.string().required("Introduce la quinta descripción"),
    price: Yup.number()
      .typeError("El precio solo acepta números")
      .required("El precio es requerido"),
  });

  const handleImg1 = () => document.getElementById("img1").click();
  const handleImg2 = () => document.getElementById("img2").click();
  const handleImg3 = () => document.getElementById("img3").click();

  let url1, url2, url3;

  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        url1 = response;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        url2 = response;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFileChange3 = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        url3 = response;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const createProduct = (coleccion, product) => {
    addDoc(collection(db, coleccion), product)
      .then((resp) => {})
      .catch((err) => console.log(err.message));
  };

  return (
    <FormContainer>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/logo-amazonas_qisi37.png"
          alt="Amazonas"
          className="logo"
        />
      </Link>

      <Formik
        initialValues={{
          name: "",
          desc1: "",
          desc2: "",
          desc3: "",
          desc4: "",
          desc5: "",
          category: "Electronicos",
          img1: url1,
          img2: url2,
          img3: url3,
          price: 0,
          path: uuid(),
        }}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          if (values.img1 === undefined) values.img1 = url1;
          if (values.img2 === undefined) values.img2 = url2;
          if (values.img3 === undefined) values.img3 = url3;
          console.log(values);
          if (
            values.img1 === undefined ||
            values.img2 === undefined ||
            values.img3 === undefined
          ) {
            console.log("error");
            console.log(values);
            setErrorsImg("");

            if (values.img1 === undefined) {
              setErrorImg1("");
            } else {
              setErrorImg1("hidden");
            }
            if (values.img2 === undefined) {
              setErrorImg2("");
            } else {
              setErrorImg2("hidden");
            }
            if (values.img3 === undefined) {
              setErrorImg3("");
            } else {
              setErrorImg3("hidden");
            }
          } else {
            setErrorsImg("none");
            setErrorImg1("hidden");
            setErrorImg2("hidden");
            setErrorImg3("hidden");
            console.log("se creo");
            createProduct(values.category.toLowerCase(), {
              name: values.name,
              category: values.category,
              desc1: values.desc1,
              desc2: values.desc2,
              desc3: values.desc3,
              desc4: values.desc4,
              desc5: values.desc5,
              img1: values.img1,
              img2: values.img2,
              img3: values.img3,
              price: Number(values.price),
              path: values.path,
            });
            navegar(`/productos/${values.category.toLowerCase()}`);
            Swal.fire({
              icon: "success",
              title: "Producto creado con éxito",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        }}
      >
        {({ errors, handleChange }) => {
          return (
            <Form className="form-login">
              <h1 className="h1">Crear Producto</h1>
              <div className="input-container">
                <label for="name">Nombre</label>
                <input type="text" name="name" onChange={handleChange} />
                <ErrorMessage
                  name="name"
                  component={() => (
                    <div className="error">
                      <em className="logo-error">! </em> {errors.name}
                    </div>
                  )}
                />
              </div>
              <div className="input-container">
                <label for="name">Descripción 1</label>
                <textarea name="desc1" onChange={handleChange} />
                <ErrorMessage
                  name="desc1"
                  component={() => (
                    <div className="error">
                      <em className="logo-error">! </em> {errors.desc1}
                    </div>
                  )}
                />
              </div>
              <div className="input-container">
                <label for="name">Descripción 2</label>
                <textarea name="desc2" onChange={handleChange} />
                <ErrorMessage
                  name="desc2"
                  component={() => (
                    <div className="error">
                      <em className="logo-error">! </em> {errors.desc2}
                    </div>
                  )}
                />
              </div>
              <div className="input-container">
                <label for="name">Descripción 3</label>
                <textarea name="desc3" onChange={handleChange} />
                <ErrorMessage
                  name="desc3"
                  component={() => (
                    <div className="error">
                      <em className="logo-error">! </em> {errors.desc3}
                    </div>
                  )}
                />
              </div>
              <div className="input-container">
                <label for="name">Descripción 4</label>
                <textarea name="desc4" onChange={handleChange} />
                <ErrorMessage
                  name="desc4"
                  component={() => (
                    <div className="error">
                      <em className="logo-error">! </em> {errors.desc4}
                    </div>
                  )}
                />
              </div>
              <div className="input-container">
                <label for="name">Descripción 5</label>
                <textarea name="desc5" onChange={handleChange} />
                <ErrorMessage
                  name="desc5"
                  component={() => (
                    <div className="error">
                      <em className="logo-error">! </em> {errors.desc5}
                    </div>
                  )}
                />
              </div>
              <div className="input-container">
                <label for="category">Categoria</label>
                <select name="category" onChange={handleChange}>
                  <option value="Electronicos" selected>
                    Electrónicos
                  </option>
                  <option value="Computadores">Computadores</option>
                  <option value="Videojuegos">Videojuegos</option>
                  <option value="Ofertas">Ofertas y promociones</option>
                  <option value="Auriculares">Auriculares</option>
                  <option value="Sillas">Sillas</option>
                  <option value="Ratones">Ratones de computador</option>
                  <option value="Teclados">Teclados</option>
                  <option value="Controles">Controles</option>
                  <option value="Oculus">Oculus</option>
                  <option value="Tablets">Tablets</option>
                </select>
              </div>
              <input
                type="file"
                id="img1"
                name="img1"
                style={{ display: "none" }}
                onChange={handleFileChange1}
              />
              <input
                type="file"
                id="img2"
                style={{ display: "none" }}
                onChange={handleFileChange2}
              />
              <input
                type="file"
                id="img3"
                style={{ display: "none" }}
                onChange={handleFileChange3}
              />
              <div className="buttons-img">
                <button type="button" className="button" onClick={handleImg1}>
                  Elegir imagen 1
                </button>

                <button type="button" className="button" onClick={handleImg2}>
                  Elegir imagen 2
                </button>
                <button type="button" className="button" onClick={handleImg3}>
                  Elegir imagen 3
                </button>
              </div>

              <div className="errors-img" style={{ display: errorsImg }}>
                <div className="error" style={{ visibility: errorImg1 }}>
                  <em className="logo-error">! </em>
                  <span>Elige la primera imagen</span>
                </div>
                <div className="error" style={{ visibility: errorImg2 }}>
                  <em className="logo-error">! </em>
                  <span>Elige la segunda imagen</span>
                </div>
                <div className="error" style={{ visibility: errorImg3 }}>
                  <em className="logo-error">! </em>
                  <span>Elige la tercera imagen</span>
                </div>
              </div>

              <div className="input-container">
                <label for="price">Precio</label>
                <input type="text" name="price" onChange={handleChange} />
                <ErrorMessage
                  name="price"
                  component={() => (
                    <div className="error">
                      <em className="logo-error">! </em> {errors.price}
                    </div>
                  )}
                />
              </div>
              <input type="submit" value="Crear" className="button" />
            </Form>
          );
        }}
      </Formik>
      <Link to="/" className="link-inicio">
        Regresar al Inicio
      </Link>
    </FormContainer>
  );
};

export default CreateProduct;
