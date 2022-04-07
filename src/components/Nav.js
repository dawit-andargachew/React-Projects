import Styles from "./nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <div className={Styles.header_div}>
        <h2 className={Styles.header_h2}>Logo</h2>
        <ul className={Styles.header_ul}>
          <Link className={Styles.none} to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link className={Styles.none} to="/about">
            <li>About</li>
          </Link>
          <Link className={Styles.none} to="/products">
            <li>Products</li>
          </Link>
          <Link className={Styles.none} to="/add">
            <li>Add New</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
