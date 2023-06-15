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

  const [comment, setComments] = useState(["Post bacana"]);
  const [textoArea, setTextoArea] = useState("");
  console.log({ textoArea });
  function handleCreateNewComment(event: Event | undefined) {
    event?.preventDefault();
    // console.log(event.target.comentario.value);
    setComments([...comment, textoArea]);
    setTextoArea("");
  }

  const deleteComment = (commentToDelete: any) => {
    const newsComments = comment.filter((item) => {
      return item !== commentToDelete;
    });

    setComments(newsComments);
  };
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
        <textarea
          value={textoArea}
          placeholder="Deixe seu comentario"
          name="comentario"
          onChange={(e) => setTextoArea(e.target.value)}
        />
        <footer>
          <button className="btn" type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comment.map((item, index) => {
          return (
            <Comment content={item} key={index} deleteComment={deleteComment} />
          );
        })}
      </div>
    </article>
  );
};
