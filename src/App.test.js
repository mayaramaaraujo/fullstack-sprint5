import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './components/Footer'
import Breadcrumbs from './pages/Product/components/Breadcrumbs';
import BreadcrumbsItem from './pages/Product/components/Breadcrumbs';
import CategoriesContext from './contexts/CategoriesContext'

describe("home page", () => {
  describe("quando eu abro a página inicial", () => {
    test("o cabeçalho é carregado", () => {
      render(<App />);

      const { getByAltText } = screen;

      expect(getByAltText("menu")).toBeInTheDocument();
      expect(getByAltText("fechar menu")).toBeInTheDocument();
    })

    test("as logos são carregadas", () => {
      render(<App />);

      const { getByAltText } = screen;

      expect(getByAltText("Logo mobile")).toBeInTheDocument();
      expect(getByAltText("Logo")).toBeInTheDocument();
    })

    test("o campo de busca é carregado", () => {
      render(<App />);

      const { getByPlaceholderText } = screen;

      expect(getByPlaceholderText("O que você está procurando?")).toBeInTheDocument();
    })
  })

  describe("quando eu desço até o footer", () => {
    test("as imagens de atendimento, fatura e extrato, perguntas frequentes e trabalhe conosco são carregados", () => {
      render(<Footer />);

      const { getByAltText } = screen;

      expect(getByAltText("Atendimento")).toBeInTheDocument();
      expect(getByAltText("Fatura e Extrato")).toBeInTheDocument();
      expect(getByAltText("Trabalhe Conosco")).toBeInTheDocument();
      expect(getByAltText("Perguntas Frequentes")).toBeInTheDocument();
    })

    test("são carregados os textos cartão riachuelo, sobre a riachuelo, moda que transforma e ajuda", () => {
      render(<Footer />);

      const { getByText } = screen;

      expect(getByText("Cartão Riachuelo")).toBeInTheDocument();
      expect(getByText("Sobre a Riachuelo")).toBeInTheDocument();
      expect(getByText("Moda que Transforma")).toBeInTheDocument();
      expect(getByText("Ajuda")).toBeInTheDocument();

    })
  })
})

describe("product page", () => {
  it("Os breadcrumbs devem ser carregados", () => {
    const { getByTestId } = screen;

    const categories = {}

    render(
      <CategoriesContext.Provider value={{ categories }}>
        <Breadcrumbs />
      </CategoriesContext.Provider>
    );

    const element = getByTestId('breadcrumbs-component');

    expect(element).toBeInTheDocument();
  });

  it("Os itens dos breadcrumbs devem ser carregados", () => {
    const { getByText , getAllByTestId } = screen;

    const categories = {
      "all": [],
      "current": [
        {
          "id": 1,
          "link": "#home",
          "name": "Home"
        },
        {
          "id": 2,
          "link": "#home",
          "name": "Infantil"
        },
        {
          "id": 3,
          "link": "#home",
          "name": "Personagens"
        },
        {
          "id": 4,
          "name": "Mario Bros"
        }
      ]
    }

    render(
      <CategoriesContext.Provider value={{ categories }}>
        <BreadcrumbsItem />
      </CategoriesContext.Provider>
    );

    const text = getByText("Home");
    const element = getAllByTestId("breadcrumbs-item");

    expect(text).toBeInTheDocument();
    expect(element.length).toBe(4);
  })
})
