import { FormEvent, useState } from "react";
import { RequiredTextField } from "../form-components/required-text-field";

export type RegisterFormData = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export function RegisterForm({
  onSubmit,
}: {
  onSubmit: (data: RegisterFormData) => void;
}) {
  const [data, setData] = useState<
    RegisterFormData & { confirmPassword: string }
  >({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;

    setData({ ...data, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      onSubmit(data);
    }
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
          name="confirmPassword"
          placeholder="Repita a senha"
          type="password"
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
