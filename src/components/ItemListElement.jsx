import "./itemListElement.css";

function ItemListElement({ item }) {
  return (
    <div className="cardElement" key={item.id}>
      <img className="innerImg" src={item.thumbnail} alt={item.title} />
      <div className="hpTag">
        <h2 className="headingTag">{item.title}</h2>
        <p className="pTag">{item.description}</p>
      </div>
    </div>
  );
}

export default ItemListElement;
