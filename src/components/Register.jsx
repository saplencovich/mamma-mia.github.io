import { useState, useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      // Mostrar notificación de error
      if (Notification.permission === "granted") {
        new Notification("Error en el registro", {
          body: "Todos los campos son obligatorios.",
        });
      }
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      if (Notification.permission === "granted") {
        new Notification("Error en el registro", {
          body: "La contraseña debe tener al menos 6 caracteres.",
        });
      }
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      if (Notification.permission === "granted") {
        new Notification("Error en el registro", {
          body: "Las contraseñas no coinciden.",
        });
      }
      return;
    }

    setMessage("¡Registro exitoso!");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    if (Notification.permission === "granted") {
      new Notification("¡Registro exitoso!", {
        body: "Bienvenido a la plataforma.",
      });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Confirmar contraseña:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Register;
