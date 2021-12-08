import { Link } from "react-router-dom";
import { RegistroContainer } from "../styles/RegistroStyles";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { registerAsync } from "../redux/actions/actionRegister";

const Registro = () => {
  const dispatch = useDispatch();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "El nombre es muy corto")
      .max(50, "El nombre es muy corto muy largo")
      .required("Introduce tu nombre")
      .matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, "El nombre solo acepta letras"),
    email: Yup.string()
      .email("Dirección de correo electrónico incorrecta")
      .required("Escriba su dirección de correo electrónico"),
    pass1: Yup.string()
      .required("Se requiere un mínimo de 6 caracteres")
      .min(6, "Se requiere un mínimo de 6 caracteres")
      .max(15, "Se requiere un maximo de 15 caracteres")
      .matches(/^[A-Za-z]\w/, "Se requiere un mínimo de 6 caracteres"),
    pass2: Yup.string()
      .oneOf([Yup.ref("pass1"), null], "Las contraseñas no coinciden")
      .required("Se requiere un mínimo de 6 caracteres")
      .min(6, "Se requiere un mínimo de 6 caracteres")
      .matches(/^[A-Za-z]\w/, "Se requiere un mínimo de 6 caracteres"),
  });

  return (
    <RegistroContainer>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/logo-amazonas_qisi37.png"
          alt="Amazonas"
          className="logo"
        />
      </Link>
      <img src="" alt="" />

      <Formik
        initialValues={{
          name: "",
          email: "",
          pass1: "",
          pass2: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          // same shape as initial values
          //console.log(values);
          dispatch(registerAsync(values.name, values.email, values.pass1));
        }}
      >
        {({ values, errors }) => (
          <Form className="form-login">
            <h1 className="h1">Crear Cuenta</h1>
            <div className="input-container">
              <label for="name">Tu nombre</label>
              <Field type="text" name="name" id="name" />
              {errors.name && values.name ? (
                <div className="error">
                  <em className="logo-error">! </em> {errors.name}
                </div>
              ) : null}
            </div>
            <div className="input-container">
              <label for="correo">Dirección de correo electrónico</label>
              <Field type="email" name="email" id="correo" />
              {errors.email && values.email ? (
                <div className="error">
                  <em className="logo-error">! </em> {errors.email}
                </div>
              ) : null}
            </div>
            <div className="input-container">
              <label for="pass1">Contraseña</label>
              <Field
                type="password"
                id="pass1"
                name="pass1"
                placeholder="Como mínimo 6 caracteres"
              />
              {errors.pass1 && values.pass1 ? (
                <div className="error">
                  <em className="logo-error">! </em> {errors.pass1}
                </div>
              ) : null}
            </div>
            <div className="input-container">
              <label for="pass2">Vuelve a escribir la contraseña</label>
              <Field type="password" id="pass2" name="pass2" />
              {errors.pass2 && values.pass2 ? (
                <div className="error">
                  <em className="logo-error">! </em> {errors.pass2}
                </div>
              ) : null}
            </div>
            <input type="submit" value="Continuar" className="button" />
            <p className="login">
              ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
            </p>
          </Form>
        )}
      </Formik>
    </RegistroContainer>
  );
};

export default Registro;
