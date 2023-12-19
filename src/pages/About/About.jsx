import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.sectionAbout}>
      <div className="">
        <h2>Sobre o Mini Blog</h2>
        <p>
          Esse é um projeto desenvolvido no curso de React, com o objetivo de
          colocar em prática conhecimentos adquiridos como: React Router, Hooks,
          Componentes, Context API, etc. Esse site está integrado com Firebase,
          sendo possível fazer o cadastro, login, adicionar posts e entre outras
          funcionalides.
        </p>
        <div className={styles.Images}>
          <img
            src="https://miro.medium.com/v2/resize:fit:2000/1*ipwpqQrHz0Lkd_5setXQCQ.png"
            alt="Firebase"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="React"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
