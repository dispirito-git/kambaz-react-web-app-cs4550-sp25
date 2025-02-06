import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css' // comment out, or delete this line
// leave the rest of this file alone
import App from "./App.tsx";
createRoot(document.getElementById("root")!).render(
 <StrictMode>
   <App />
 </StrictMode>);
