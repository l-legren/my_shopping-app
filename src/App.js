import React from "react";
import "./App.css";
import Navigation from "./components/NavigationBar/navigationBar";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

// Local Imports
import ShoppingPage from "./pages/ShoppingPage";
import WelcomePage from "./pages/WelcomePage";
import CartPage from "./pages/CartPage";

const AppContainer = styled.div``;

function App() {
    return (
        <ThemeProvider theme={{}}>
            <AppContainer>
                <Navigation />

                <Switch>
                    <Route exact path="/" render={() => <WelcomePage />} />
                    <Route path="/cart" render={() => <CartPage />} />
                    <Route path="/shopping" render={() => <ShoppingPage />} />
                </Switch>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
