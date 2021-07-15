import React, { useContext } from "react";
import CategoriesContext from "../../contexts/CategoriesContext";

const MenuItem = ({ label }) => (
  <li className="menu__item" data-testid="categoriesForTest">
    <a className="menu__link" href="#home">
      <span>{label}</span>
    </a>
  </li>
);

const Menu = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        {categories.all &&
          categories.all.map((cat) => (
            <MenuItem key={cat.id} label={cat.label} />
          ))}
      </ul>
    </nav>
  );
};

export default Menu;
