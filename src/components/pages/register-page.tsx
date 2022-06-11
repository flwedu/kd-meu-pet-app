import { RegisterForm, RegisterFormData } from "../form/register-form";

export function RegisterPage() {
  function onSubmit(data: RegisterFormData) {}

  return <RegisterForm onSubmit={onSubmit}></RegisterForm>;
}
