import React from "react";
import Product from "../components/Product";

class Products extends React.Component {
  state = {
    products: [
      {
        title: "Supradyn Multivitamin Tablet",
        price: 33.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-2-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title: "Becozym C Forte",
        price: 323.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title: "Depura 60k Nano Vit D Vitamin Drops",
        price: 53.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/270620/digene-acidity-gas-relief-tablets-15s-mint-flavour-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title: "Supradyn Multivitamin Tablet",
        price: 33.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-2-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title:
          "Depura 60k Nano VitDVitamin Drops Depura 60k Nano Vit D Vitamin",
        price: 323.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title: "Becozym C Forte",
        price: 323.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title: "Depura 60k Nano Vit D Vitamin Drops",
        price: 53.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/270620/digene-acidity-gas-relief-tablets-15s-mint-flavour-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title: "Supradyn Multivitamin Tablet",
        price: 33.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-2-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title:
          "Depura 60k Nano VitDVitamin Drops Depura 60k Nano Vit D Vitamin",
        price: 323.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title: "Becozym C Forte",
        price: 323.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title: "Depura 60k Nano Vit D Vitamin Drops",
        price: 53.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/270620/digene-acidity-gas-relief-tablets-15s-mint-flavour-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title: "Supradyn Multivitamin Tablet",
        price: 33.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-2-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        title:
          "Depura 60k Nano VitDVitamin Drops Depura 60k Nano Vit D Vitamin",
        price: 323.93,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
    ],
  };
  render() {
    return (
      <section className="products-section">
        <input className="search" type="text" placeholder="search.." />
        <h2 className="products-section-heading">Products available</h2>

        <div className="all-products">
          {this.state.products.map((item) => {
            return <Product item={item} />;
          })}
        </div>
      </section>
    );
  }
}

export default Products;
