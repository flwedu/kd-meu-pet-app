import { FormEvent, useState } from "react";
import { RequiredTextField } from "../form-components/required-text-field";

export function LoginForm({
  onSubmit,
}: {
  onSubmit: (username: string, password: string) => void;
}) {
  const [data, setData] = useState({ username: "", password: "" });

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;

    setData({ ...data, [name]: value });
  }

  function checkFormValidity(form: HTMLFormElement) {
    return form.checkValidity();
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (checkFormValidity(e.currentTarget)) {
      onSubmit(data.username, data.password);
    }
  }

  return (
    <form
      className="form form-login align-center flex flex-col rounded"
      onSubmit={handleSubmit}
    >
      <div onChange={handleChange}>
        <h2>Bem vindo!</h2>
        <p>Por favor, se identifique:</p>
        <RequiredTextField
          name="username"
          placeholder="Nome de usuário"
          type="text"
          onChange={handleChange}
        />
        <RequiredTextField
          name="pasword"
          placeholder="Senha"
          type="password"
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
