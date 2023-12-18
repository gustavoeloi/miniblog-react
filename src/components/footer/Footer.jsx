import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Sua vida compartilhada a quem você ama!</h3>
      <p>&#169; Miniblog 2023 - Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
