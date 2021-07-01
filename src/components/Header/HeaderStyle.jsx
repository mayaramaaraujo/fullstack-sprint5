import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`

export const HeaderContainer = styled.div`
  margin: auto;
  width: 95%;
  max-width: 1200px;
`

export const HeaderMobile = styled.div`
  display: none;
  margin-bottom: 25px;

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`

export const HeaderDesktop = styled.div`
  @media (max-width: 1200px) {
      display: none;
  }
`

export const HeaderSearch = styled.div`
  position: relative;
`

export const HeaderDrawer = styled.div`
  width: 24px;
  opacity: 54%;
  display: none;

  text-transform: lowercase;
  font-size: 0.5625rem;
  font-weight: 400;
  line-height: 0;

  .menu {
    /* Não tem css nenhum */
  }

  .header__drawer--active {
    display: block;
  }

  .close {
    /* Não tem css nenhum */  
  }
`
export const MenuTitle = styled.p`
  text-transform: lowercase;
  font-size: 0.5625rem;
  font-weight: 400;
  line-height: 0;
`

export const HeaderLogo = styled.h1`
  height: 70px;
  line-height: 70px;
  text-align: center;

@media (max-width: 1200px) {
  flex-grow: 1;
}
`

export const HeaderImage = styled.img `
  height: 25px;
  transform: translateY(10px);
`

export const HeaderIcon = styled.img `
  width: 24px;
  opacity: 26%;
  top: 8px;
  position: absolute;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.26);
  line-height: 40px;
`

export const HeaderInput = styled.input `
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding-left: 40px;

:hover {
  border-color: #000;
}

::placeholder {
  font-size: 0.9375rem;
  font-weight: 600;
  font-family: "Open Sans";
  color: #9b9b9b;
}
`