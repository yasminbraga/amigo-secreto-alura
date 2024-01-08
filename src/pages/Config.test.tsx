import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Config from "./Config";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("config page", () => {
  test("must be right rendered", () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
