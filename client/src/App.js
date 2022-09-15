import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Form from "./pages/Form";
import CountryDetails from "./pages/CountryDetails";
import Landing from "./pages/Landing";
import { GlobalStyles } from "./styled-components/Global";
import { theme } from "./styled-components/Theme";

const StyledApp = styled.div`
    text-align: center;
    .grid {
        display: grid;
        grid-template-columns: fit-content(300px) 1fr;
    }
`;

function App() {
    return (
        <StyledApp>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {/* <Route
                    path={["/home", "/countries", "/activities"]}
                    component={Navbar}
                /> */}
                <div className="grid">
                    <Route exact path="/" component={Landing} />
                    <Route
                        path={["/home", "/countries", "/activities"]}
                        component={Sidebar}
                    />
                    <Route path="/home" component={Home} />
                    <Route path="/countries/:id" component={CountryDetails} />
                    <Route path="/activities/add" component={Form} />
                </div>
            </ThemeProvider>
        </StyledApp>
    );
}

export default App;
