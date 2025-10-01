import { PrismicRichText } from "@prismicio/react";

export const Layout = ({ children, page, nav }) => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="container">
      <div className="logo">
        <img src={nav.data.logo.url}/>
      </div>
      {children}
      <footer>
        <PrismicRichText field={nav.data.footer}/>
        <span>© {year}</span>
      </footer>
    </div>
  );
};
