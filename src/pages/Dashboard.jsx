import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const datosGuardados = localStorage.getItem("sigoUsuario");
  const usuarioActivo = datosGuardados ? JSON.parse(datosGuardados) : null;

  const cerrarSesion = () => {
    localStorage.removeItem("sigoUsuario");
    navigate("/");
  };

  return (
    <div className="card">
      <h2>Bienvenido, {usuarioActivo ? usuarioActivo.nombre : "Usuario"}</h2>
      <p>Rol asignado: <strong>{usuarioActivo?.rol}</strong></p>
      <button onClick={cerrarSesion} className="btn btn-danger">
        Cerrar sesión
      </button>
    </div>
  );
}

export default Dashboard;