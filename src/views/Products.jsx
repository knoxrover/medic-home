import React from "react";
import Product from "../components/Product";

class Products extends React.Component {
  state = {
    products: [
      {
        id: 0,
        title: "Supradyn Multivitamin Talet",
        price: 33.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-2-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 1,
        title: "Becozym Forte",
        price: 323.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 2,
        title: "Depura 60k Nano Vit D Vitamin Drops",
        price: 53.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/270620/digene-acidity-gas-relief-tablets-15s-mint-flavour-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 3,
        title: "Supradyn ltivitamin Tablet",
        price: 33.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-2-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 4,
        title: "Depa 60k Nano VitDVitamin Drops Depura 60k Nano Vit D Vitamin",
        price: 323.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 5,
        title: "Becozym C Fote",
        price: 323.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 6,
        title: "Depura 60k Nano Vt D Vitamin Drops",
        price: 53.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/270620/digene-acidity-gas-relief-tablets-15s-mint-flavour-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 7,
        title: "Supradyn Multitamin Talet",
        price: 33.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-2-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 8,
        title: "Depura 60k Nano VitDVitami Drops Depura 60k Nano Vit D Vitamin",
        price: 323.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 9,
        title: "Becozym C Forte",
        price: 323.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 10,
        title: "Depura 60k Nano Vit D Vitamin Drop",
        price: 53.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/270620/digene-acidity-gas-relief-tablets-15s-mint-flavour-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 11,
        title: "Supradyn Multivitami Tablet",
        price: 33.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-2-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
      {
        id: 12,
        title: "Depura 60k N VitDVitamin Drops Depura 60k Nano Vit D Vitamin",
        price: 323.93,
        showDetail: false,
        img: "https://cdn01.pharmeasy.in/dam/products_otc/022290/becozym-c-forte-vitamin-b-complex-biotin-vitamin-c-strip-of-15-tablets-1-1627613618.jpg?dim=224x0&dpr=1&q=100",
      },
    ],
    search: "",
    searchResult: [],
  };
  searchHandler = (e) => {
    // console.log(e.target.value);
    let txt = e.target.value;

    let res = [];
    this.state.products.forEach((item) => {
      let name = item.title.toLowerCase();
      let txtLower = txt.toLowerCase();
      if (name.includes(txtLower)) res.push(item);
    });

    this.setState({
      ...this.state,
      search: txt,
      searchResult: res,
    });
  };

  showDetailHandler = (itemToShow) => {
    let res = this.state.products.map((item) => {
      if (item.id === itemToShow.id) item.showDetail = true;
      return item;
    });
    this.setState({
      ...this.state,
      products: res,
    });
  };
  hideDetailHandler = (itemToHide) => {
    let res = this.state.products.map((item) => {
      if (item.id === itemToHide.id) item.showDetail = false;
      return item;
    });
    this.setState({
      ...this.state,
      products: res,
    });
  };

  render() {
    let search = this.state.search;
    let products = this.state.products;
    let searchResult = this.state.searchResult;
    return (
      <section className="products-section">
        <input
          className="search"
          type="text"
          placeholder="search.."
          value={search}
          onChange={(e) => {
            this.searchHandler(e);
          }}
        />
        <h2 className="products-section-heading">
          {search === "" ? "Products available" : `Search result for ${search}`}
        </h2>

        <div className="all-products">
          {search === ""
            ? products.map((item, index) => {
                return (
                  <Product
                    item={item}
                    key={index}
                    showDetailHandler={this.showDetailHandler}
                    hideDetailHandler={this.hideDetailHandler}
                  />
                );
              })
            : searchResult.length
            ? searchResult.map((item, index) => {
                return (
                  <Product
                    item={item}
                    key={index}
                    showDetailHandler={this.showDetailHandler}
                    hideDetailHandler={this.hideDetailHandler}
                  />
                );
              })
            : "no result... "}
        </div>
      </section>
    );
  }
}

export default Products;
