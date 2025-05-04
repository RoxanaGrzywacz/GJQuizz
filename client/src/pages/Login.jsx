function Login() {
    return (
      <div className="register">
        <h2>Logowanie</h2>
        <form className="register-form">
          <input type="text" placeholder="Login" className="register-input" />
          <input type="password" placeholder="Hasło" className="register-input" />
          <button type="submit" className="register-button">Zaloguj</button>
        </form>
      </div>
    );
  }
  
  export default Login;