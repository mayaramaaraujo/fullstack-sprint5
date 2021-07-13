import React, { useContext, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import PlusIcone from '../../assets/plus.svg'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ProductsContext from '../../contexts/ProductsContext';

import { ThemeProvider } from '@material-ui/styles';
import bagTheme from '../../assets/bagTheme';
import {
  Detail,
  ProductViewBox,
  ProductImageHeader,
  ProductPlusIcone,
  ProductBuyBox,
  ProductDescription,
  ProductTitle,
  FavoriteBorder,
  Favorite,
  ShareProduct,
  BuyCard,
  SoldBy,
  SoldByLink,
  PriceCard,
  Price
} from './style'
import { useEffect } from 'react';

const ProductDetails = () => {
  const productsContext = useContext(ProductsContext);

  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState();
  const [size10, setSize10] = useState({ value: 10, checked: false });
  const [size12, setSize12] = useState({ value: 12, checked: false });
  const [size14, setSize14] = useState({ value: 14, checked: false });
  const [size16, setSize16] = useState({ value: 16, checked: false });
  const [selectedSize, setSelectedSize] = useState();

  const { id } = useParams();
  const history = useHistory();

  const loadProduct = () => {
    const product = productsContext.products.filter((p, i) => i === Number(id));

    if (!product.length) {
      history.push("/")
    }

    setProduct(product[0]);
  }

  const handleSize = (e) => {
    switch (e.target.name) {
      case "10":
        setSize10({ value: 10, checked: true })
        setSize12({ value: 12, checked: false })
        setSize14({ value: 14, checked: false })
        setSize16({ value: 16, checked: false })
        setSelectedSize(10);
        break;
      case "12":
        setSize10({ value: 10, checked: false })
        setSize12({ value: 12, checked: true })
        setSize14({ value: 14, checked: false })
        setSize16({ value: 16, checked: false })
        setSelectedSize(12);
        break;
      case "14":
        setSize10({ value: 10, checked: false })
        setSize12({ value: 12, checked: false })
        setSize14({ value: 14, checked: true })
        setSize16({ value: 16, checked: false })
        setSelectedSize(14);
        break;
      case "16":
        setSize10({ value: 10, checked: false })
        setSize12({ value: 12, checked: false })
        setSize14({ value: 14, checked: false })
        setSize16({ value: 16, checked: true })
        setSelectedSize(16);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    loadProduct();
  }, [])

  return (
    <ThemeProvider theme={bagTheme}>
      {product ? <Detail>
        <ProductViewBox>
          <ProductImageHeader>
            <ProductPlusIcone src={PlusIcone} alt="icone de ampliar a imagem" />
          </ProductImageHeader>
          <img src={`/${product.image}`} alt="imagem do produto" />
        </ProductViewBox>

        <ProductBuyBox>
          <ProductDescription>
            <ProductTitle>{product.name}</ProductTitle>
            <div>
              {isFavorite ? <Favorite onClick={() => setIsFavorite(!isFavorite)} /> : <FavoriteBorder onClick={() => setIsFavorite(!isFavorite)} />}
              <ShareProduct />
            </div>
          </ProductDescription>
          <div>
            <h4>Selecionar tamanho: {selectedSize}</h4>
            <input type="checkbox" name={size10.value} id={size10.value} value={size10.value} onChange={(e) => handleSize(e)} checked={size10.checked} />
            <label htmlFor={size10.value}>{size10.value}</label>

            <input type="checkbox" name={size12.value} id={size12.value} value={size12.value} onChange={(e) => handleSize(e)} checked={size12.checked} />
            <label htmlFor={size12.value}>{size12.value}</label>

            <input type="checkbox" name={size14.value} id={size14.value} value={size14.value} onChange={(e) => handleSize(e)} checked={size14.checked} />
            <label htmlFor={size14.value}>{size14.value}</label>

            <input type="checkbox" name={size16.value} id={size16.value} value={size16.value} onChange={(e) => handleSize(e)} checked={size16.checked} />
            <label htmlFor={size16.value}>{size16.value}</label>
          </div>
          <BuyCard>
            <SoldBy>Vendido e entregue por <SoldByLink href="https://www.riachuelo.com.br/">RCHLO</SoldByLink></SoldBy>
            <PriceCard>
              <Price>{product.price}</Price>
            </PriceCard>
            <Button variant="contained" color="primary" fullWidth onClick={() => alert("Produto adicionado à sacola")}>Adicionar à sacola</Button>
            <Button variant="contained" color="secondary" fullWidth><Link to="/">Cancelar</Link></Button>
          </BuyCard>
        </ProductBuyBox>
      </Detail> : ""}
    </ThemeProvider>
  )
}

export default ProductDetails;