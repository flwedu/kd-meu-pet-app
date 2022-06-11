import { fireEvent, render } from "@testing-library/react";
import { RegisterForm } from "./register-form";

describe("RegisterForm component tests", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should render the component properly", () => {
    const { container } = render(<RegisterForm onSubmit={onSubmit} />);

    expect(container).toMatchSnapshot();
  });

  test("Should call onSubmit() only if all fields are valid", () => {
    const { getByPlaceholderText } = render(
      <RegisterForm onSubmit={onSubmit} />
    );

    const nameInput = getByPlaceholderText("Nome completo") as HTMLInputElement;
    const usernameInput = getByPlaceholderText("Username") as HTMLInputElement;
    const emailInput = getByPlaceholderText("E-mail") as HTMLInputElement;
    const passwordInput = getByPlaceholderText("Senha") as HTMLInputElement;
    const confirmPasswordInput = getByPlaceholderText(
      "Repita a senha"
    ) as HTMLInputElement;

    const form = nameInput.form!;
    fireEvent.submit(form);

    expect(onSubmit).not.toHaveBeenCalled();

    fireEvent.change(nameInput, { target: { value: "test" } });
    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.change(emailInput, { target: { value: "testemail@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "test" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "test" } });

    fireEvent.submit(form);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
