import Router from "./Router";
import { ThemeProvider } from "@mui/material"
import { theme } from "./styles/styles"


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router/>    
    </ThemeProvider>
  );
}

export default App;
