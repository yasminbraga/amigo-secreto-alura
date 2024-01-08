import { PropsWithChildren } from "react";
import styles from "./Card.module.scss";

const Card: React.FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
