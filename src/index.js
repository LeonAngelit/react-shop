import React from "react";
import App from "./routes/app.jsx";
import{createRoot} from "react-dom/client";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
window.addEventListener('hashchange', function () {
  this.location.reload();
});


root.render(<App />);