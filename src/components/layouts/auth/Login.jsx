import userLogo from '../../../assets/user.avif'
import { useState } from 'react';
import { usuarios } from "../../database/dataBase"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {
  const [getUsuario, setUsuario] = useState(null);
  const [getContrasena, setContrasena] = useState("");
  const [getCorreo, setCorreo] = useState("");
  let redireccion = useNavigate()

  const buscarUsuario = () => {
    let estado = usuarios.some((usuario) => {
      if (getUsuario === usuario.usuario &&
        getContrasena === usuario.contrasena &&
        getCorreo === usuario.correo) {
        return true;
      }
    });
    return estado;
  };

  const iniciarSesion = () => {
    if (buscarUsuario()) {
      Swal.fire({
        title: "Bienvenido Gonorrea !",
        text: "Es Hora De Fumar Weed!",
        icon: "success"
      });
      redireccion("/home")
    } else {
      Swal.fire({
        icon: "error",
        title: "La cagaste Weon!!",
        text: "Te equivocaste en algun dato.. Desperta Pendejo",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }


  return (<form className="login-form">
    <img src={userLogo} alt="Usuario" />
    <h2>Iniciar sesión</h2>
    <div className="input-group">
      <label htmlFor="username">Usuario:</label>
      <input type="text" onChange={(e) => {
        setUsuario(e.target.value)
      }} />
    </div>
    <div className="input-group">
      <label htmlFor="password">Contraseña:</label>
      <input type="password" onChange={(e) => {
        setContrasena(e.target.value)
      }} />
    </div>
    <div className="input-group">
      <label htmlFor="email">Correo electrónico:</label>
      <input type="text" onChange={(e) => {
        setCorreo(e.target.value)
      }} />
    </div>
    <button onClick={iniciarSesion} type="button">Iniciar sesión</button>
  </form>
  );
};

export default Login;
