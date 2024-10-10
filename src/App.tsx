import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./theme/theme";
import FormsDemo from "./pages/FormsDemo";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <FormsDemo />
    </ThemeProvider>
  );
}

export default App;
