import "./App.css";
import Navigation from "./components/NavigationBar/navigationBar";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import {
    createMuiTheme,
    MuiThemeProvider,
    StylesProvider,
} from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

// Local Imports
import ShoppingPage from "./pages/ShoppingPage";
import WelcomePage from "./pages/WelcomePage";
import CartPage from "./pages/CartPage";

function App() {
    const defaultTheme = createMuiTheme();

    const AppContainer = styled.div``;

    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={defaultTheme}>
                <ThemeProvider theme={defaultTheme}>
                    <AppContainer>
                        <Navigation />

                        <Switch>
                            <Route exact path="/" render={WelcomePage} />
                            <Route path="/cart" render={CartPage} />
                            <Route path="/shopping" render={ShoppingPage} />
                        </Switch>
                    </AppContainer>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
}

export default App;
