import React, { useContext } from "react";
import FilterContext from "../../contexts/FilterContext";
import ProductsContext from '../../contexts/ProductsContext';
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";
import { Link } from 'react-router-dom';

function Product({ index, image, name, price }) {
  return (
    <li className="products__card card">
      <Link to={`product/${index}`}>
        <div className="card">
          <img className="card__img" src={image} alt="" />
          <p className="card__description">
            {name}
          </p>
          <p className="card__price">
            R$ {price}
          </p>
        </div>
      </Link>
    </li>
  );
}

function ProductsPage() {
  const { filter } = useContext(FilterContext);
  const { products, filters } = useContext(ProductsContext);

  return (
    <main className="main">
      <Breadcrumbs></Breadcrumbs>
      <Filters filters={filters}></Filters>
      <section className="main__products products">
        <div className="products__row">
          <ol className="products__list">
            {products
              .filter(p =>
                filter ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1 : true)
              .map(
                (p, i) =>
                  <Product key={p.sku} index={i} image={p.image} name={p.name} price={p.price} />
              )
            }
          </ol>
        </div>
        <div className="products__row">
          <ol className="products__list">
          </ol>
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;