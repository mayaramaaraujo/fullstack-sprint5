import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

export const Detail = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
`;
export const ProductViewBox = styled.div`
  flex-grow: 2;

  display: flex;
  flex-direction: column;
  /* width: 500px; */
  max-width: 100%;

  border: 1px solid #c1c1c1;

  :hover {
    opacity: 0.9;
  }
`;
export const ProductImageHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  /* min-height: 3rem;
  min-width: 550px; */

  :hover {
    cursor: pointer;
    background-color: #eeeeee60;
  }
`;
export const ProductPlusIcone = styled.img`
  padding: 0.5rem;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;
export const ProductBuyBox = styled.div`
  flex-grow: 1;
  width: 500px;
  margin-left: 2rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const ProductDescription = styled.div`
  font-size: 1.5rem;
  display: flex;
`;
export const ProductTitle = styled.h3`
  font-size: 1.5rem;
  display: flex;
  padding: 0rem 1rem 1rem 0rem;
`;
export const FavoriteBorder = styled(FavoriteBorderIcon)`
  padding: 0.5rem;
  color: rgba(0, 0, 0, 0.54);

  :hover {
    border-radius: 100%;
    background-color: #ececec;
    cursor: pointer;
  }
`;
export const Favorite = styled(FavoriteIcon)`
  padding: 0.5rem;

  :hover {
    border-radius: 100%;
    background-color: #ececec;
    cursor: pointer;
  }
`;
export const ShareProduct = styled(ShareIcon)`
  padding: 0.5rem;
  color: rgba(0, 0, 0, 0.54);

  :hover {
    border-radius: 100%;
    background-color: #ececec;
    cursor: pointer;
  }
`;
export const BuyCard = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin-top: 2rem;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const SoldBy = styled.p`
  text-align: center;
  font-weight: 300;
  padding: 1rem;
`;
export const SoldByLink = styled.a`
  text-decoration: underline;
  color: #0071a3;
  font-weight: bold;
`;
export const PriceCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Price = styled.div`
  font-size: 2rem;
  color: #d0403a;
  padding: 2rem;
`;
export const SelectSizeInput = styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  width: 40px;
  padding: 5px;
  background-color: #fff;
  margin: 2px;
  font-weight: bold;
  /* position: absolute;
  opacity: 0;
  cursor: pointer; */
`;
export const SelectedSizeInput = styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  width: 40px;
  padding: 5px;
  background-color: #000;
  margin: 2px;
  font-weight: bold;
  color: #fff;
`;
