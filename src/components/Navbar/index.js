import { Link } from "react-router-dom";
import styles from "./index.module.css";

function Navbar() {
    return (
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div>
            <h1 className={styles.navbar__brand}>Covid ID</h1>
          </div>
          <div>
            <ul className={styles.navbar__list}>
              <li className={styles.navbar__item}>
              <Link to="/">Global</Link>
              </li>
              <li className={styles.navbar__item}>
              <Link to="/indonesia">Indonesia</Link>
              </li>
              <li className={styles.navbar__item}>
              <Link to="/provinsi">Provinsi</Link>
              </li>
              <li className={styles.navbar__item}>
              <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
