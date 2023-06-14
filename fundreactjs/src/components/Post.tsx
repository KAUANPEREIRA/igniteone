import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
type Props = {
  author: any;
  content: any;
  publishedAt: any;
};
export const Post = ({ author, content, publishedAt }: Props) => {
  console.log({ author, content, publishedAt });
  const publishedDateFormated = new Intl.DateTimeFormat("pt-Br", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  const [comment, setComments] = useState([1, 2]);
  const comments = [1, 2];

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([1, 2, 3]);
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar srcOfc={author?.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author?.role}</span>
          </div>
        </div>
        <time dateTime="">{publishedDateFormated}</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <a href="#">👉 jane.design/doctorcare</a>
        {""}
        <a href="#"> #novoprojeto #nlw #rocketseat</a>
        {""}
      </div>
      <form onSubmit={handleCreateNewComment} className="formComment">
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentario" />
        <footer>
          <button className="btn" type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((item, key) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
};
