import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { FavoritesContextProvider } from "./components/store/Favorites-context";

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FavoritesContextProvider>
);
