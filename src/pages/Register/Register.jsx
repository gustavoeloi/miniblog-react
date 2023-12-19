import styles from "./Register.module.css";
import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Link } from "react-router-dom";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState(null);

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password != verifyPassword) {
      setError("As senhas não coincidem");
    }

    const user = {
      displayName,
      email,
      password,
    };
    const res = await createUser(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <div className={styles.formHeader}>
        <h3>Cadastre-se</h3>
        <p>É gratuito e sempre será.</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nome de Usuário
          <input
            type="text"
            className="input"
            value={displayName}
            onChange={(e) => {
              setError(null);
              setDisplayName(e.target.value);
            }}
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => {
              setError(null);
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => {
              setError(null);
              setPassword(e.target.value);
            }}
          />
        </label>
        <label>
          Confirmar senha
          <input
            type="password"
            className="input"
            value={verifyPassword}
            onChange={(e) => {
              setError(null);
              setVerifyPassword(e.target.value);
            }}
          />
        </label>

        <p className={styles.toLogin}>
          Já tem login? <Link to="/login">Faça o Login</Link>
        </p>
        {!loading && <button type="submit">Cadastra-se</button>}
        {loading && (
          <button type="submit" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
