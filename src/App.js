import {
  Paper,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./index.css";
// import { theme } from "./Theme";
import Test from "./Test";
import Dashboard from "./layouts/Dashboard";
import Landing from "./layouts/Landing/Landing";
import Router from "./routes";
import { SnackbarProvider } from "notistack";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#fffbeb",
          },
          divider: "#fde68a",
          background: {
            default: "#ffffff",
            paper: "#ffffff",
          },
          text: {
            primary: "#000",
            secondary: "#27272a",
          },
        }
      : {
          primary: {
            main: "#dbf4ff",
          },
          divider: "#004282",
          background: {
            default: "#0B0952",
            paper: "#121212",
          },
          text: {
            primary: "#fff",
            secondary: "#71717a",
          },
        }),
  },
});

function App() {
  const [mode, setMode] = useState("dark");
  const darkMode = useSelector((state) => state.theme.darkMode);
  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <SnackbarProvider
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <ErrorBoundary>
              <Paper>
                <Router />
              </Paper>
            </ErrorBoundary>
          </SnackbarProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
