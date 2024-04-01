import userLogo from '../../../assets/user.avif'
const Login = () => {
  return (
    <form className="login-form">
      <img src={userLogo} alt="Usuario" />
      <h2>Iniciar sesión</h2>
      <div className="input-group">
        <label htmlFor="username">Usuario:</label>
        <input type="text" name="" id="" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="text" name="" id="" />
      </div>
      <div className="input-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="text" name="" id="" />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
