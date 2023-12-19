import styles from "./Login.module.css";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login, error: authError, loading } = useAuthentication();

  const handelSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="form-container">
      <div className="form-header">
        <h3>Login</h3>
        <p>Se você já possui login, entre com seus dados</p>
      </div>
      <form onSubmit={handelSubmit} className="form">
        <label>
          E-mail
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Entrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
