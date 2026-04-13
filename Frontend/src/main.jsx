import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./Context/UserContext.jsx";
import CaptainContext from "./Context/CaptainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContext>
      <CaptainContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainContext>
    </UserContext>
  </StrictMode>,
);
