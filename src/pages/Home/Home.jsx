import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";

import { useState } from "react";
import { useAuthValue } from "../../context/authContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import PostDetail from "../../components/PostDetail/PostDetail";

const Home = () => {
  const { user } = useAuthValue();
  const { documents: posts, loading } = useFetchDocuments("posts");

  return (
    <main className={styles.home}>
      {loading && <p>Carregando...</p>}

      {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}

      {/* {posts && posts.length === 0 && (
        <div className={styles.noposts}>
          <p>Não foram encontrados nenhum posts</p>
          <Link to="/posts/create">Criar primeiro post</Link>
        </div>
      )} */}
    </main>
  );
};

export default Home;
