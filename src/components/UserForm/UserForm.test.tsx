import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import UserForm from ".";

describe("form functions", () => {
  test("when input is empt, can not add new names", () => {
    render(
      <RecoilRoot>
        <UserForm />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const btn = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });

  test("add user name when input is not empt", () => {
    render(
      <RecoilRoot>
        <UserForm />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const btn = screen.getByRole("button");

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    // clicar no botão de submeter
    fireEvent.click(btn);
    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    // garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });

  test("can not add duplicated names to list", () => {
    render(
      <RecoilRoot>
        <UserForm />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const btn = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(btn);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(btn);

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("error message must disapear after 3 sec", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <UserForm />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const btn = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(btn);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });
    fireEvent.click(btn);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();
    // espera n segundos
    act(() => {
      jest.runAllTimers();
    });
    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
