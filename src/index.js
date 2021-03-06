import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { DataContextProvider } from "./context/DataContext";
import * as serviceWorker from "./serviceWorkerRegistration";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2667FF",
      dark: "#0049F5",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      800: 800,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <AuthContextProvider>
          <DataContextProvider>
            <App />
          </DataContextProvider>
        </AuthContextProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
reportWebVitals();
