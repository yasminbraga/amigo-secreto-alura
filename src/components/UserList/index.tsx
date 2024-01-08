import { useUsersList } from "../../state/hook/useUsersList";
import styles from "./UṣerList.module.scss";

const UserList: React.FC = () => {
  const participantes: string[] = useUsersList();
  return (
    <ul className={styles.list}>
      {participantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};

export default UserList;
