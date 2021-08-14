import Productdetail from "./Productdetail";

function Product(props) {
  const { title, price, img, showDetail } = props.item;
  return (
    <>
      {showDetail ? (
        <Productdetail
          item={props.item}
          hideDetailHandler={props.hideDetailHandler}
        />
      ) : null}
      <div
        className="product-container"
        onClick={() => {
          props.showDetailHandler(props.item);
        }}
      >
        <img className="product-img" src={img} alt="" />
        <h3 className="product-title">{title}</h3>
        <p className="product-price">MRP ₹{price}</p>
      </div>
    </>
  );
}

export default Product;
