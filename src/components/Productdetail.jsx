import closeImg from "../asserts/img/close.svg";

function Productdetail(props) {
  const { title, price, img } = props.item;
  return (
    <section className="product-detail">
      <div className="pd-container">
        <button
          className="pop-up-close"
          onClick={() => {
            props.showDetailHandler();
          }}
        >
          <img src={closeImg} alt="" />
        </button>
        <img className="pop-up-img" src={img} alt="img" />
        <h2 className="pop-up-title">{title}</h2>
        <p className="pop-up-price">MRP ₹{price}</p>
        <p className="pop-up-info">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          ratione soluta, sunt odit dolorum, modi magnam fugiat reiciendis
          voluptatum totam perferendis saepe quo illo ipsam eveniet error
          veritatis! Deleniti totam nesciunt quasi nulla cum corrupti optio
          alias tenetur provident a ratione fugit inventore, vitae, explicabo
          placeat, modi quos magnam labore?
        </p>
        <p className="pop-up-info">
          est pariatur praesentium corrupti magni distinctio tenetur laboriosam
          consequatur delectus quaerat quia cupiditate et impedit, aspernatur
          ullam consectetur. At eaque dolores quod, eveniet numquam qui natus
          ab! Adipisci tempora nam reprehenderit atque sed, sint dolorum a
          fugit, recusandae maxime, nisi quam accusamus vitae! Expedita aut, quo
          doloremque alias quos maiores delectus ipsum dicta, incidunt
          voluptates assumenda cupiditate consequatur ut rerum dolorem
          excepturi!
        </p>
      </div>
    </section>
  );
}

export default Productdetail;
