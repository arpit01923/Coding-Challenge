import "./vertical-card.css";

export const VerticalCard = ({ filteredData }) => {
  return (
    <>
      {filteredData.map((product) => (
        <section className="vertical-card" key={product.id}>
          <h3 className="name">{product.name}</h3>
          <img src={product.imageURL} alt="image" className="image" />
          <div className="text">
            <p className="price">Rs {product.price}</p>
            <button className="button">Add to cart</button>
          </div>
        </section>
      ))}
    </>
  );
};
