import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import { data } from "./data.js";
import { Link } from "react-router-dom";

function Products(props) {
  const { category, bag, addToBag, bagCount } = props;

  return (
    <div>
      <Header bag={bag} bagCount={bagCount} />
      <div className="navbar">
        <Link to="/all">
          <li className={category === "all" ? "active" : null}>All</li>
        </Link>
        <Link to="/Dresses">
          <li className={category === "Dresses" ? "active" : null}>
            Dresses
          </li>
        </Link>
        <Link to="/Wallets">
          <li className={category === "Wallets" ? "active" : null}>Laptops</li>2
        </Link>
        <Link to="/Shoes">
          <li className={category === "Shoes" ? "active" : null}>
            Shoes
          </li>
        </Link>
      </div>
      {category === "Dresses" ? (
        <div className="prod container">
          <Product category={data.Dresses} addToBag={addToBag} />
        </div>
      ) : category === "Wallets" ? (
        <div className="prod container">
          <Product category={data.Wallets} addToBag={addToBag} />
        </div>
      ) : category === "Shoes" ? (
        <div className="prod container">
          <Product category={data.Shoes} addToBag={addToBag} />
        </div>
      ) : category === "all" ? (
        <div className="prod container">
          <Product category={data.Wallets} addToBag={addToBag} />
          <Product category={data.Dresses} addToBag={addToBag} />
          <Product category={data.Shoes} addToBag={addToBag} />
        </div>
      ) : null}
      <Footer />
    </div>
  );
}

export default Products;
