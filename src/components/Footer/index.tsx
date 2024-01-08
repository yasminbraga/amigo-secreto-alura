import { useNavigate } from "react-router-dom";
import PlayIcon from "../../assets/play.png";
import Sacolas from "../../assets/sacolas.png";
import { useSort } from "../../state/hook/useSort";
import { useUsersList } from "../../state/hook/useUsersList";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const users = useUsersList();
  const sortear = useSort();

  const start = () => {
    sortear();
    navigate("/sorteio");
  };
  return (
    <footer className={styles.footer}>
      <button
        disabled={users.length < 3}
        onClick={start}
        className={styles.footer__btn}
      >
        <img src={PlayIcon} alt="play icon" />
        Iniciar brincadeira!
      </button>
      <img src={Sacolas} alt="sacolas de compras" />
    </footer>
  );
};

export default Footer;
