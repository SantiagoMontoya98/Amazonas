import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { LoginContainer } from "../styles/LoginStyles";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  loginEmailPassword,
  loginFacebook,
  loginGoogle,
} from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const navegar = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Dirección de correo electrónico incorrecta")
      .required("Escriba su dirección de correo electrónico"),
    pass: Yup.string().required("introduce tu contraseña"),
  });

  const handleGoogle = () => dispatch(loginGoogle());

  const handleFacebook = () => dispatch(loginFacebook());

  return (
    <LoginContainer>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638142583/Im%C3%A1genes%20Amazonas/logo-amazonas_qisi37.png"
          alt="Amazonas"
          className="logo"
        />
      </Link>

      <Formik
        initialValues={{
          email: "",
          pass: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          //console.log(values);
          dispatch(loginEmailPassword(values.email, values.pass));
          navegar("/");
          //window.location.reload();
        }}
      >
        {({ values, errors }) => (
          <Form className="form-login">
            <h1 className="h1">Iniciar Sesión</h1>
            <div className="input-container">
              <label for="correo">Dirección de correo electrónico</label>
              <Field type="email" name="email" id="correo" />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="error">
                    <em className="logo-error">! </em> {errors.email}
                  </div>
                )}
              />
            </div>
            <div className="input-container">
              <label for="pass">Contraseña</label>
              <Field type="password" name="pass" id="pass" />
              <ErrorMessage
                name="pass"
                component={() => (
                  <div className="error">
                    <em className="logo-error">! </em> {errors.pass}
                  </div>
                )}
              />
            </div>
            <input type="submit" value="Continuar" className="button" />
          </Form>
        )}
      </Formik>
      <div className="google-fb">
        <FontAwesomeIcon
          icon={faFacebookF}
          className="fb"
          onClick={handleFacebook}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google"
          className="google"
          onClick={handleGoogle}
        />
      </div>
      <p className="nuevo">¿Eres nuevo en Amazonas?</p>
      <Link to="/registro" className="link-crear">
        <button className="crear">Crea tu cuenta de Amazonas</button>
      </Link>
      <Link to="/" className="link-inicio">
        Regresar al Inicio
      </Link>
    </LoginContainer>
  );
};

export default Login;
