import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Router>
        {/*👇 Make sure to use your Links or Its components ONLY within a <Router> contex */}
        <Layout>
          <Routes>
            <Route exact path="/" element={<AllMeetupPage />} />
            <Route exact path="/new" element={<NewMeetupPage />} />
            <Route exact path="/favorite" element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
