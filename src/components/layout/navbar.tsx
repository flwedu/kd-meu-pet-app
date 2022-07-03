import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [logged, setLogged] = useState(false);

  return (
    <nav className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/missing"}>Registrar desaparecimento</Link>
      {logged ? (
        <Link to={"/logout"}>Sair</Link>
      ) : (
        <Link to={"/login"}>Entrar</Link>
      )}
    </nav>
  );
}
