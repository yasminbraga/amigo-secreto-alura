import ParticipanteImg from "../../assets/participante.png";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <img src={ParticipanteImg} alt="Participante com um presente na mão" />
    </header>
  );
};

export default Header;
