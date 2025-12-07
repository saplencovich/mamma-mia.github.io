import pizzaBg from '../assets/images/pizza-bg.jpg';

function Header() {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${pizzaBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '5rem 1rem',
    textAlign: 'center',
    height: "15rem",
  };

  return (
    <header style={headerStyle}>
      <h1 className="display-3">¡Pizzería Mamma Mia!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrías encontrar!</p>
    </header>
  );
}

export default Header;