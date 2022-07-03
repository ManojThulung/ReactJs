import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";
import FavoritesContext from "../store/Favorites-context";

function MainNav() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorite">
              Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
