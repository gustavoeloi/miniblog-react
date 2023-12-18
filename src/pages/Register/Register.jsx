import styles from "./Register.module.css";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password != verifyPassword) {
      alert("As senhas não são iguais");
      return;
    }

    console.log(email, password);
  };

  return (
    <div className={styles.register}>
      <div className={styles.formHeader}>
        <h3>Cadastre-se</h3>
        <p>É gratuito e sempre será.</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          E-mail
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirmar senha
          <input
            type="password"
            className="input"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
          />
        </label>

        <button type="submit">Cadastra-se</button>
      </form>
    </div>
  );
};

export default Register;
