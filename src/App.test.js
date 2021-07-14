import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './components/Footer'

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
