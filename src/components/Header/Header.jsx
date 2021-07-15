import {
  HeaderContainer,
  HeaderDesktop,
  HeaderDrawer,
  HeaderIcon,
  HeaderInput,
  HeaderImage,
  HeaderLogo,
  HeaderMobile,
  HeaderSearch,
  HeaderStyle,
  MenuTitle,
} from "./HeaderStyle";
import React, { useContext } from "react";
import FilterContext from "../../contexts/FilterContext";
import Menu from "./Menu";

const Header = () => {
  const { setFilter } = useContext(FilterContext);

  return (
    <HeaderStyle>
      <HeaderContainer>
        <HeaderMobile>
          <HeaderDrawer>
            <img className="menu__img" src="/assets/menu.svg" alt="menu" />
            <MenuTitle>menu</MenuTitle>
          </HeaderDrawer>
          <HeaderDrawer>
            <img src="/assets/close.svg" alt="fechar menu" />
            <MenuTitle>fechar</MenuTitle>
          </HeaderDrawer>
          <HeaderLogo>
            <HeaderImage src="/assets/rchlo.svg" alt="Logo mobile" />
          </HeaderLogo>
        </HeaderMobile>
        <HeaderDesktop>
          <HeaderLogo>
            <HeaderImage src="/assets/riachuelo.svg" alt="Logo" />
          </HeaderLogo>
        </HeaderDesktop>
        <HeaderSearch>
          <HeaderIcon src="/assets/search.svg" alt="lupa" />
          <HeaderInput
            type="search"
            placeholder="O que você está procurando?"
            onChange={(event) => setFilter(event.target.value)}
          />
        </HeaderSearch>
        <Menu />
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
