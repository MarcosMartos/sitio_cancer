import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Añadir todos los iconos de solid y brands a la librería
library.add(fas, far, fab);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
