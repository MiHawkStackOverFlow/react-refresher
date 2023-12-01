import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <AllMeetupsPage />
        </Route>
        <Route exact path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route exact path="/favorites">
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
