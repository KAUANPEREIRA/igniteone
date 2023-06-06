import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Coment.module.css";
export const Comment = () => {
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
            <div title="Deletar comentario">
              <Trash size={20} />
            </div>
          </header>
          <p>Muito bom Parabens👏👏</p>
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
