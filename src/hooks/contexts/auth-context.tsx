import { createContext, useContext, useState } from "react";
import { User } from "../../model/user";

export type AuthContextData = {
  signed: boolean;
  user: User | null;
  signIn(user: User): void;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({
  signed: false,
  user: null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const signIn = (user: User) => {
    setSigned(true);
    setUser(user);
  };

  const signOut = () => {
    setSigned(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signed, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContext;
