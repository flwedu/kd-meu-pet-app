import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar rounded">
      <Link to={"/"}>Home</Link>
      <Link to={"/missing"}>Registrar desaparecimento</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Registrar</Link>
      <Link to={"/logout"}>Logout</Link>
    </nav>
  );
}
