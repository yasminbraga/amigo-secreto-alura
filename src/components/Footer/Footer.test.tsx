import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import { useUsersList } from "../../state/hook/useUsersList";

jest.mock("../../state/hook/useUsersList", () => {
  return {
    useUsersList: jest.fn(),
  };
});

const mockNavigate = jest.fn();
const mockSorteio = jest.fn();

jest.mock("../../state/hook/useSort", () => {
  return {
    useSort: () => mockSorteio,
  };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("when there is not enough users", () => {
  beforeEach(() => {
    (useUsersList as jest.Mock).mockReturnValue([]);
  });
  test("can not start the game", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const btn = screen.getByRole("button");

    expect(btn).toBeDisabled();
  });
});

describe("when there is enough users", () => {
  beforeEach(() => {
    (useUsersList as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "Josefina",
    ]);
  });

  test("can start the game", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const btn = screen.getByRole("button");

    expect(btn).not.toBeDisabled();
  });

  test("the game started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toBeCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
