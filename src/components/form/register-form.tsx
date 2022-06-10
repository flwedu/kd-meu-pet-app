import { FormEvent, useState } from "react";
import { RequiredTextField } from "../form-components/required-text-field";

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
        <RequiredTextField
          name="name"
          placeholder="Nome completo"
          type="text"
          onChange={handleChange}
        />
        <RequiredTextField
          name="username"
          placeholder="Username"
          type="text"
          onChange={handleChange}
        />
        <RequiredTextField
          name="email"
          placeholder="E-mail"
          type="email"
          onChange={handleChange}
        />
        <RequiredTextField
          name="password"
          placeholder="Senha"
          type="password"
          onChange={handleChange}
        />
        <RequiredTextField
          name="password2"
          placeholder="Repita a senha"
          type="password"
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
