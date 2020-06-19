import * as React from 'react';
import { Link } from 'react-router-dom';

const LayoutHCF = (props: any) => {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-default navbar-dark primary-color">
          <Link to="/" className="navbar-brand">Logo</Link>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer>
        <p className="text-center">&copy;2019</p>
      </footer>
    </React.Fragment>
  );
}

export default LayoutHCF;