import * as React from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { Providers } from "./providers";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
