import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import MainNav from "./components/layout/MainNav";

function App() {
  return (
    <div>
      <Router>
        {/*👇 Make sure to use your Links or Its components ONLY within a <Router> contex */}
        <MainNav />
        <Routes>
          <Route exact path="/" element={<AllMeetupPage />} />
          <Route exact path="/new" element={<NewMeetupPage />} />
          <Route exact path="/favorite" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
