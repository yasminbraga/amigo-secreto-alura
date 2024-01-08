import { realizarSorteio } from "./realizarSorteio";

describe("dado um sorteio de amigo secreto", () => {
  test("cada participante não sorteie o proprio nome", () => {
    const participantes = ["Ana", "Catarina", "Julia", "João", "Vini", "Nath"];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
