function Product(props) {
  const { title, price, img } = props.item;
  return (
    <div className="product-container">
      <img className="product-img" src={img} alt="" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">MRP ₹{price}</p>
    </div>
  );
}

export default Product;
