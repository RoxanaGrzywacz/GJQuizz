import "../assets/styles/register.css";

function Register() {
    return (
      <div className="register">
        <h2>Rejestracja</h2>
        
          <form className="register-form">
            <input type="text" placeholder="Login" className="register-input"/>
            <input type="email" placeholder="Email" className="register-input"/>
            <input type="password" placeholder="Hasło" className="register-input"/>
            <input type="password" placeholder="Powtórz hasło" className="register-input"/>
            <button type="submit" className="register-button">Zarejestruj</button>
          </form>
        
      </div>
    );
  }
  
  export default Register;