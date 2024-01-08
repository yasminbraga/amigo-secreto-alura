import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, listaParticipantesState } from "../atom";

export const useAddUSer = () => {
  const setList = useSetRecoilState(listaParticipantesState);
  const list = useRecoilValue(listaParticipantesState);
  const setErro = useSetRecoilState(errorState);

  return (nomeDoParticipante: string) => {
    if (list.includes(nomeDoParticipante)) {
      setErro("Nomes duplicados não são permitidos!");
      setTimeout(() => {
        setErro("");
      }, 3000);
      return;
    }
    return setList((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
