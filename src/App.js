import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
