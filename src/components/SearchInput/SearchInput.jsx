import styles from "./SearchInput.module.css";

import { useState } from "react";

import { useAuthValue } from "../../context/authContext";

const SearchInput = () => {
  const { user } = useAuthValue();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {user && (
        <form onSubmit={handleSearch} className={styles.form_search}>
          <input
            type="text"
            placeholder="Busque por tags..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>Pesquisar</button>
        </form>
      )}
    </>
  );
};

export default SearchInput;
