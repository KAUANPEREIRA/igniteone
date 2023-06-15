import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Coment.module.css";
type Props = {
  content: string;
  deleteComment: (comentario: any) => void;
};

export const Comment = ({ content, deleteComment }: Props) => {
  const handleDeleteComment = () => {};
  return (
    <div className={style.comment}>
      <img src="https://github.com/KAUANPEREIRA.png" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Kauan Pereira</strong>
              <time dateTime="">Cerca de 1h atrás</time>
            </div>
            <div onClick={deleteComment(content)} title="Deletar comentario">
              <Trash size={20} />
            </div>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <div className={style.btn}>
            <ThumbsUp />
            Aplaudir 20
          </div>
        </footer>
      </div>
    </div>
  );
};
