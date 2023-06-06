import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      />
      <div className={styles.profile}>
        <Avatar srcOfc="https://github.com/KAUANPEREIRA.png" />
        <strong>Kauan Pereira</strong>
        <span>Web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </div>
  );
};
