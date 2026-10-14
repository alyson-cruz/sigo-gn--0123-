import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usuarios } from "../data/usuarios";

function Login() {
  const [usuarioInput, setUsuarioInput] = useState("");
  const [contraseñaInput, setContraseñaInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const manejarSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const usuarioEncontrado = usuarios.find(
      (u) => u.usuario === usuarioInput && u.contraseña === contraseñaInput
    );

    if (usuarioEncontrado) {
      // Creamos un objeto sin la contraseña antes de guardarlo
      const usuarioSeguro = {
        usuario: usuarioEncontrado.usuario,
        nombre: usuarioEncontrado.nombre,
        rol: usuarioEncontrado.rol
      };

      localStorage.setItem("sigoUsuario", JSON.stringify(usuarioSeguro));
      setError("");
      navigate("/dashboard");
    } else {
      setError("Credenciales incorrectas. Verifica tu usuario y contraseña.");
    }
  };

  return (
    <div className="card">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={manejarSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            id="usuario"
            type="text"
            value={usuarioInput}
            onChange={(e) => setUsuarioInput(e.target.value)}
            placeholder="Ej. oficial1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            id="contraseña"
            type="password"
            value={contraseñaInput}
            onChange={(e) => setContraseñaInput(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <button type="submit" className="btn">
          Ingresar
        </button>
      </form>

      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default Login;