import Productdetail from "../components/Productdetail";
import { useState } from "react";

function Product(props) {
  const [showDetail, setShowDetail] = useState(false);

  function showDetailHandler() {
    if (showDetail === false) setShowDetail(true);
    else setShowDetail(false);
  }

  const { title, price, img } = props.item;
  return (
    <>
      {showDetail ? (
        <Productdetail
          item={props.item}
          showDetailHandler={showDetailHandler}
        />
      ) : null}
      <div
        className="product-container"
        onClick={() => {
          showDetailHandler();
        }}
      >
        <img className="product-img" src={img} alt="product-img" />
        <h3 className="product-title">{title}</h3>
        <p className="product-price">MRP ₹{price}</p>
      </div>
    </>
  );
}

export default Product;
