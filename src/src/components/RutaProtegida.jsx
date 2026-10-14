import { Navigate } from "react-router-dom";

function RutaProtegida({ children }) {
  const sesionActiva = localStorage.getItem("sigoUsuario");

  if (!sesionActiva) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RutaProtegida;