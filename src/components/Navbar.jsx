const Navbar = ({ setActivePage }) => {
  const total = 25000; // Total del carrito
  const token = false;  // Simula si el usuario está logueado o no

  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo y botones a la izquierda */}
        <div className="d-flex gap-2 align-items-center">
          <a className="navbar-brand" href="#">
            Pizzería Mamma Mia
          </a>

          <button className="btn btn-outline-light" onClick={() => setActivePage("home")}>🍕 Home</button>

          {token ? (
            <>
              <button className="btn btn-outline-light" >🔓 Profile</button>
              <button className="btn btn-outline-light">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light" onClick={() => setActivePage("login")}>🔐 Login</button>
              <button className="btn btn-outline-light" onClick={() => setActivePage("register")}>🔐 Register</button>
            </>
          )}
        </div>

        {/* Botón del carrito a la derecha */}
        <div>
          <button className="btn btn-warning">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;