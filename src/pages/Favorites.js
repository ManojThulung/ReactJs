import { useContext } from "react";
import FavoritesContext from "../components/store/Favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <h3>You have no favorites yet.</h3>;
  } else {
    content = <MeetupList items={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>Favorite Page</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
