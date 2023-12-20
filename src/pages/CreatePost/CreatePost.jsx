import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/authContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState(null);

  const navigate = useNavigate();

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image url
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL válida.");
    }

    //criar arrays de tags

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    //checar todos os valores

    if (!title || !image || !body || !tags) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate("/");
  };

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
            // value={body}
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

        {!response.loading && <button>Compartilhar momento</button>}
        {response.loading && <button disabled>Aguarde...</button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
