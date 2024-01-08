import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import UserList from ".";
import { useUsersList } from "../../state/hook/useUsersList";

jest.mock("../../state/hook/useUsersList", () => {
  return {
    useUsersList: jest.fn(),
  };
});

describe("empt user list", () => {
  beforeEach(() => {
    (useUsersList as jest.Mock).mockReturnValue([]);
  });

  test("must be render without elements", () => {
    render(
      <RecoilRoot>
        <UserList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});

describe("not empt user list", () => {
  const participantes = ["Ana", "Catarina"];
  beforeEach(() => {
    (useUsersList as jest.Mock).mockReturnValue(participantes);
  });
  test("must be render without elements", () => {
    render(
      <RecoilRoot>
        <UserList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(participantes.length);
  });
});
