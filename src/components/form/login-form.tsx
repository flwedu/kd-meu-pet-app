import { FormEvent, useState } from "react";

export function LoginForm() {
  const [data, setData] = useState({ username: "", password: "" });

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;

    setData({ ...data, [name]: value });
  }

  function handleSubmit() {
    console.log("Submitted");
  }

  return (
    <form
      className="form form-login align-center flex flex-col rounded"
      onSubmit={handleSubmit}
    >
      <div onChange={handleChange}>
        <h2>Bem vindo!</h2>
        <p>Por favor, se identifique:</p>
        <div className="field">
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Usuário / E-mail"
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Senha"
            required
          />
        </div>
      </div>
    </form>
  );
}
