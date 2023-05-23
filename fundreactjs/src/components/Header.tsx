import igniteLogo from "../assets/simbol.svg";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={igniteLogo} alt="Logo" />
      <h1>Ignite Feed</h1>
    </div>
  );
};
