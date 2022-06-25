import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/contexts/auth-context";
import { User } from "../../model/user";
import { ApiClient } from "../../service/api-client";
import { LoginForm, LoginFormData } from "../form/login-form";

export function LoginPage() {
  const client = new ApiClient();
  const { signIn, signOut } = useAuthContext();
  const navigate = useNavigate();

  function onSubmit(data: LoginFormData) {
    console.log(data);

    navigate("/home");

    client
      .post("/login", data)
      .then((result) => {
        const user = result.data as User;
        signIn(user);

        navigate("/home");
      })
      .catch(() => signOut());
  }

  return <LoginForm onSubmit={onSubmit} />;
}
