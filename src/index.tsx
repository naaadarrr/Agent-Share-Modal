import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ModalShare } from "./screens/ModalShare";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ModalShare />
  </StrictMode>,
);
