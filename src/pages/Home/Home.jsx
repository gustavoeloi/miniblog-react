import styles from "./Home.module.css";

import { useAuthValue } from "../../context/authContext";

const Home = () => {
  const { user } = useAuthValue();

  return <div>{user && <h1>Olá, {user.displayName} &#128075; </h1>}</div>;
};

export default Home;
