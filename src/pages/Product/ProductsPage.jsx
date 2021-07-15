import React, { useContext } from "react";
import FilterContext from "../../contexts/FilterContext";
import ProductsContext from '../../contexts/ProductsContext';
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";
import { Link } from 'react-router-dom';
import { Card, CardDescription, CardImage, CardPrice, Main, MainProducts, ProductsCard, ProductsList, ProductsRow } from './style';

function Product({ index, image, name, price }) {
  return (
    <ProductsCard>
      <Link to={`product/${index}`}>
        <Card>
          <CardImage src={image} alt="" />
          <CardDescription>
            {name}
          </CardDescription>
          <CardPrice>
            R$ {price}
          </CardPrice>
        </Card>
      </Link>
    </ProductsCard>
  );
}

function ProductsPage() {
  const { filter } = useContext(FilterContext);
  const { products, filters } = useContext(ProductsContext);

  return (
    <Main>
      <Breadcrumbs></Breadcrumbs>
      <Filters filters={filters}></Filters>
      <MainProducts>
        <ProductsRow>
          <ProductsList>
            {products
              .filter(p =>
                filter ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1 : true)
              .map(
                (p, i) =>
                  <Product key={p.sku} index={i} image={p.image} name={p.name} price={p.price} />
              )
            }
          </ProductsList>
        </ProductsRow>
        <ProductsRow>
          <ProductsList>
          </ProductsList>
        </ProductsRow>
      </MainProducts>
    </Main>
  );
}

export default ProductsPage;