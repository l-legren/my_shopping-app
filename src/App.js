import "./App.css";
import Navigation from "./components/NavigationBar/navigationBar";
import styled from "styled-components";
import {Switch, Route} from 'react-router-dom'

// Local Imports
import ShoppingPage from "./pages/ShoppingPage";
import WelcomePage from "./pages/WelcomePage";
import CartPage from "./pages/CartPage";

function App() {
    const AppContainer = styled.div`
    `;

    return (
        <AppContainer>
            <Navigation />

            <Switch>
                <Route exact path="/" render={WelcomePage} />
                <Route path="/cart" render={CartPage} />
                <Route path="/shopping" render={ShoppingPage} />
            </Switch>
        </AppContainer>
    );
}

export default App;
