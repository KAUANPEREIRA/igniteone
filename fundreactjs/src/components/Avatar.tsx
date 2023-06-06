import style from "./Avatar.module.css";
type Props = {
  srcOfc: string;
};
export const Avatar = ({ srcOfc }: Props) => {
  return <img className={style.avatar} src={srcOfc} alt="" />;
};
