import styles from "./PostDetail.module.css";

import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      <div>
        {post.tagsArray.map((tag) => (
          <ul key={tag}>
            <li>
              <span>#{tag}</span>
            </li>
          </ul>
        ))}
      </div>
      <Link to={`/posts/${post.id}`}>Ler</Link>
    </div>
  );
};

export default PostDetail;
