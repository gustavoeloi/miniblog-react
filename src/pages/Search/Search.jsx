import styles from "./Search.module.css";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

import PostDetail from "../../components/PostDetail/PostDetail";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div>
      <h2>Search</h2>
      <div>
        {posts && posts.lengt === 0 && (
          <>
            <p>Não foram encontrados posts com essa tag de pesquisa</p>
            <Link to="/">Voltar</Link>
          </>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
