import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './components/Footer'

describe("home page", () => {
  describe("quando eu abro a página inicial", () => {
    test("o cabeçalho é carregado", () => {
      render(<App />);

      expect(screen.getByAltText("menu")).toBeInTheDocument();
      expect(screen.getByAltText("fechar menu")).toBeInTheDocument();
    })

    test("as logos são carregadas", () => {
      render(<App />);

      expect(screen.getByAltText("Logo mobile")).toBeInTheDocument();
      expect(screen.getByAltText("Logo")).toBeInTheDocument();
    })

    test("o campo de busca é carregado", () => {
      render(<App />);

      expect(screen.getByPlaceholderText("O que você está procurando?")).toBeInTheDocument();
    })
  })

  describe("quando eu desço até o footer", () => {
    test("as imagens de atendimento, fatura e extrato, perguntas frequentes e trabalhe conosco são carregados", () => {
      render(<Footer />);

      expect(screen.getByAltText("Atendimento")).toBeInTheDocument();
      expect(screen.getByAltText("Fatura e Extrato")).toBeInTheDocument();
      expect(screen.getByAltText("Trabalhe Conosco")).toBeInTheDocument();
      expect(screen.getByAltText("Perguntas Frequentes")).toBeInTheDocument();
    })

    test("são carregados os textos cartão riachuelo, sobre a riachuelo, moda que transforma, ajuda", () => {
      render(<Footer />);

      expect(screen.getByText("Cartão Riachuelo")).toBeInTheDocument();
      expect(screen.getByText("Sobre a Riachuelo")).toBeInTheDocument();
      expect(screen.getByText("Moda que Transforma")).toBeInTheDocument();
      expect(screen.getByText("Ajuda")).toBeInTheDocument();
    })
  })
})
