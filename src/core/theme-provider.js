import React, { ReactNode, JSX } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

// import { createTheme } from "@/styles/theme/create-theme";

// import EmotionCache from "./emotion-cache";
import { createTheme } from "../theme/create-theme";

export function ThemeProvider({ children }) {
  const theme = createTheme();

  return (
    // <EmotionCache options={{ key: "mui" }}>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
    // </EmotionCache>
  );
}
