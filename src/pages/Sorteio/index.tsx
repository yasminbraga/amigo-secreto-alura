import { useState } from "react";
import AviaoImg from "../../assets/aviao.png";
import CasinoIcon from "../../assets/casino.png";
import Card from "../../components/Card";
import { useResultadoDoSorteio } from "../../state/hook/useResultadoDoSorteio";
import { useUsersList } from "../../state/hook/useUsersList";
import styles from "./Sorteio.module.scss";

const Sorteio: React.FC = () => {
  const participantes: string[] = useUsersList();
  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");
  const resultado = useResultadoDoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <Card title="Quem vai tirar o papelzinho?">
      <section className={styles.sortContainer}>
        <form onSubmit={sortear} className={styles.sortContainer__form}>
          <select
            required
            name="participantesDaVez"
            id="participantesDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(evento) => setParticipanteDaVez(evento.target.value)}
            className={styles.sortContainer__select}
          >
            <option value="">Selecione seu nome</option>
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>

          <p className={styles.sortContainer__text}>
            Clique em em sortear para ver quem é seu amigo secreto!
          </p>

          <button className={styles.sortContainer__btn}>
            <img src={CasinoIcon} alt="dice icon" />
            Sortear!
          </button>
        </form>
        {amigoSecreto && (
          <p className={styles.sortContainer__amigo} role="alert">
            {amigoSecreto}
          </p>
        )}
        <img src={AviaoImg} alt="aviao de papel" />
      </section>
    </Card>
  );
};

export default Sorteio;
