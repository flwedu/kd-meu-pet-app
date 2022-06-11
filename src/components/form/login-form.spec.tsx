import { fireEvent, render } from "@testing-library/react";
import { LoginForm } from "./login-form";

describe("LoginForm component tests", () => {
  const onSubmit = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render the component properly with the username and password fields", () => {
    const { container } = render(<LoginForm onSubmit={onSubmit} />);

    expect(container).toMatchSnapshot();
  });

  test("should call onSubmit only if the username and password fields are valid", () => {
    const { getByPlaceholderText } = render(<LoginForm onSubmit={onSubmit} />);

    const usernameInput = getByPlaceholderText(
      "Nome de usuário"
    ) as HTMLInputElement;
    const passwordInput = getByPlaceholderText("Senha") as HTMLInputElement;

    const form = usernameInput.form!;
    fireEvent.submit(form);

    expect(onSubmit).not.toHaveBeenCalled();

    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.change(passwordInput, { target: { value: "test" } });

    fireEvent.submit(form);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});

export {};
