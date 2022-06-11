import { LoginForm, LoginFormData } from "../form/login-form";

export function LoginPage() {
  function onSubmit(data: LoginFormData) {}

  return <LoginForm onSubmit={onSubmit} />;
}
