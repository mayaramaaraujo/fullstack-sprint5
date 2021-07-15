import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  width: 80%;
  max-width: 1100px;
  padding: 16px;
`;
export const MainProducts = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
  }
`;
export const ProductsRow = styled.div`
  margin: 8px;
`;

export const ProductsList = styled.ol`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media (min-width: 1201px) {
    flex-wrap: wrap;
    flex-basis: 25%;
  }
`;

export const ProductsCard = styled.li`
  @media (max-width: 1200px) {
    flex-basis: 50%;
  }

  @media (min-width: 1201px) {
    flex-basis: 25%;
  }
`;

export const Card = styled.div`
  cursor: pointer;
  border: 1px solid white;
  padding: 8px;

  :hover {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CardDescription = styled.p`
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 10px;
`;

export const CardPrice = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;
