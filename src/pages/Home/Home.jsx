import { useEffect, useState } from 'react';
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header';
import Message from '../../components/Message';
import Spinner from '../../components/Spinner';
import CategoriesContext from '../../contexts/CategoriesContext';
import FilterContext from '../../contexts/FilterContext';
import LoadingContext from '../../contexts/LoadingContext';
import MessageContext from '../../contexts/MessageContext';
import useLoading from '../../hooks/useLoading';
import CategoriesService from '../../services/CategoriesService';
import { GlobalStyle } from '../../components/GlobalStyle';
import Routes from '../../routes/Routes';
import ProductsContext from '../../contexts/ProductsContext';
import ProductsService from '../../services/ProductsService';

function Home() {
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState({});
  const [addRequest, removeRequest, isLoading] = useLoading();

  // products
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  // eslint-disable-next-line
  useEffect(() => {
    loadCategories()
    loadProducts()
  }, []);

  function loadCategories() {
    addRequest();
    CategoriesService.get()
      .then(c => setCategories(c))
      .catch(() => setMessage("Ocorreu um erro ao carregar as categorias..."))
      .finally(() => removeRequest());
  }

  function loadProducts() {
    addRequest();
    ProductsService.get()
      .then(r => {
        setProducts(r.products);
        setFilters(r.filters);
      })
      .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
      .finally(() => removeRequest());
  }

  return (
    <>
      <GlobalStyle />
      <FilterContext.Provider value={{ filter, setFilter }}>
        <LoadingContext.Provider value={{ addRequest, removeRequest, isLoading }}>
          <MessageContext.Provider value={{ message, setMessage }}>
            <CategoriesContext.Provider value={{ categories }}>
              <ProductsContext.Provider value={{ products: products, filters: filters }}>
                <Spinner></Spinner>
                <div className="page-container">
                  <Message></Message>
                  <Header></Header>
                  <Routes />
                </div>
                <Footer></Footer>
              </ProductsContext.Provider>
            </CategoriesContext.Provider>
          </MessageContext.Provider>
        </LoadingContext.Provider>
      </FilterContext.Provider>
    </>
  );
}

export default Home;
