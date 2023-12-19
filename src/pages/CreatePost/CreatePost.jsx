import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/authContext";

const CreatePost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");

  return (
    <div className={styles.create_post}>
      <h1>Compartilhe seu momento!</h1>
      <p>
        Sabe aquele momento especial no seu coração? compartilhe com seus amigos
      </p>

      <form onSubmit={handleSubmit} className={styles.form_post}>
        <label>
          <span>Título</span>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Pense naquele título legal..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Descrição</span>
          <textarea
            name="body"
            value={body}
            placeholder="Descreva como foi esse momento especial para você"
            onChange={(e) => e.target.value}
          ></textarea>
        </label>

        <label>
          <span>Imagem</span>
          <input
            type="text"
            name="image"
            value={image}
            placeholder="Cole o link da imagem"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          <span>Tags</span>
          <input
            type="text"
            name="tags"
            value={tags}
            placeholder="Coloque as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
          />
        </label>

        <button>Postar</button>
      </form>
    </div>
  );
};

export default CreatePost;
