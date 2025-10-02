import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export const Layout = ({ children, nav }) => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="container">
      <div className="logo">
        <img src={nav.data.logo.url}/>
      </div>
      <nav>
        <div className="contact">
          <PrismicNextLink field={nav.data.contact} />
        </div>
      </nav>
      {children}
      <footer id="footer">
        <PrismicRichText field={nav.data.footer}/>
        <span>© {year}</span>
      </footer>
    </div>
  );
};
