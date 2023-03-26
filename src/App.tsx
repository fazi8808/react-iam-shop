import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { routes as appRoutes } from "./routes";
import Header from "./components/Header";

function App() {
  // define theme
  const theme = createTheme({
    typography: {
      fontFamily: "Rubik, sans-serif",
    },
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#fff",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <Router>
          <Header />
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
