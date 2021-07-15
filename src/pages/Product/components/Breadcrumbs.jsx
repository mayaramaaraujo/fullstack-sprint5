import React, { useContext } from "react";
import CategoriesContext from "../../../contexts/CategoriesContext";

export function BreadcrumbItem({ link, name }) {
  return (
    <li className="breadcrumbs__item" data-testid="breadcrumbs-item">
      {link ? (
        <>
          <a className="breadcrumbs__link" href={link}>
            {name}
          </a>
          <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
        </>
      ) : (
        <span className="breadcrumbs__link">{name}</span>
      )}
    </li>
  );
}

function Breadcrumbs() {
  const { categories } = useContext(CategoriesContext);

  return (
    <section
      className="main__breadcrumbs breadcrumbs"
      data-testid="breadcrumbs-component"
    >
      <nav>
        <ol className="breadcrumbs__list">
          {categories.current &&
            categories.current.map((c) => (
              <BreadcrumbItem key={c.id} link={c.link} name={c.name} />
            ))}
        </ol>
      </nav>
    </section>
  );
}

export default Breadcrumbs;
