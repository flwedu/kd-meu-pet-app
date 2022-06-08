import { render } from "@testing-library/react";
import { LoginForm } from "./login-form";

describe("LoginForm component tests", () => {
  test("should render the component properly", () => {
    const { container } = render(<LoginForm />);

    expect(container).toMatchSnapshot();
  });
});

export {};
