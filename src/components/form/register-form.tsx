import { FormEvent, useState } from "react";

export function RegisterForm() {
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
        <h2>Formulário de cadastro</h2>
        <p>Por favor, insira seus dados abaixo</p>
        <div className="field">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Nome completo"
            required
          />
        </div>
        <div className="field">
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Usuário"
            required
          />
        </div>
        <div className="field">
          <input
            type="email"
            name="email"
            className="input"
            placeholder="E-mail"
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
        <div className="field">
          <input
            type="password"
            name="password2"
            className="input"
            placeholder="Repita a senha"
            required
          />
        </div>
      </div>
    </form>
  );
}
