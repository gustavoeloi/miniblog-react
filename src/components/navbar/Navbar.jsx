import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/authContext";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const handleLogout = () => {
    return new Promise((resolve, reject) => {
      const confirmed = window.confirm(
        `Deseja sair do conta ${user.displayName}`
      );
      if (confirmed) {
        resolve(logout());
      } else {
        reject(false);
      }
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <NavLink className={styles.icon} to="/">
          Mini <span>blog</span>
        </NavLink>
        <ul className={styles.navlist}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Cadastrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink
                  to="/posts/create"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Novo post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Sobre
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className={styles.logout}>
                  Sair
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
