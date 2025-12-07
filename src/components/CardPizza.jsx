const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: "25rem", height: "34rem", margin: "1rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <hr />
        <p className="card-text">
          <h6 className="text-center">Ingredientes</h6> 
          <strong>🍕</strong> {ingredients.join(", ")}
        </p>
        <hr />
        <p className="card-text text-center">
          <strong>Precio:</strong> ${price.toLocaleString()}
        </p>

        {/* Botones al final */}
        <div className="d-flex justify-content-between mt-auto">
          <button className="btn btn-outline-dark"> Ver más 👀</button>
          <button className="btn btn-dark">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;