import styles from "./Post.module.css";
export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/KAUANPEREIRA.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Kauan Pereira</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time dateTime="">Publicado há 1 hora</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <a href="#">👉 jane.design/doctorcare</a>
        <a href="#"> #novoprojeto #nlw #rocketseat</a>
      </div>
    </article>
  );
};
