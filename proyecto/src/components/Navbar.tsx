// src/components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-header">
        <h1>ROBLES DE LA LAGUNA</h1>
        <p>Gestion de venta de Propiedades</p>
      </div>
      
      <div className="nav-links">
        <Link to="/" className={isActive("/") ? "nav-link active" : "nav-link"}>
          Dashboard
        </Link>
        <Link to="/clientes" className={isActive("/clientes") ? "nav-link active" : "nav-link"}>
          Clientes
        </Link>
        <Link to="/citas" className={isActive("/citas") ? "nav-link active" : "nav-link"}>
          Citas
        </Link>
        <Link to="/pagos" className={isActive("/pagos") ? "nav-link active" : "nav-link"}>
          Pagos
        </Link>
      </div>
      
      <div className="nav-footer">
        <Link to="/reportes" className={isActive("/reportes") ? "nav-link active" : "nav-link"}>
          Reportes
        </Link>
        <button className="nav-link logout">
          Cerrar Sesion
        </button>
      </div>
    </nav>
  );
}