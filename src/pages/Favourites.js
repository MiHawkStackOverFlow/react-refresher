import React , { useContext } from 'react';
import FavoritesContext from "../store/favorites.context";
import MeetupList from "../components/meetups/MeetupList";

export default function FavouritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content = <p>You got no favorites yet. Start adding some?</p>
  if(favoritesCtx.favorites !== 0) {
    content = <MeetupList meetups={favoritesCtx.favorites}/>;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}
