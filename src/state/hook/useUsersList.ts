import { useRecoilValue } from "recoil";
import { listaParticipantesState } from "../atom";

export const useUsersList = () => {
  return useRecoilValue(listaParticipantesState);
};
