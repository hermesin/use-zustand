import { createRoot } from "react-dom/client";
import "./style.css";
import { App as Canvas } from "./layout/Canvas";
import { Overlay } from "./components/Overlay";

const rootElement = document.getElementById("root");

createRoot(rootElement!).render(
  <>
    <Canvas />
    <Overlay />
  </>
);
