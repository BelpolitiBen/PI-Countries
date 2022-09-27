import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Form from "./pages/Form";
import CountryDetails from "./pages/CountryDetails";
import Landing from "./pages/Landing";
import { GlobalStyles } from "./styled-components/Global";
import { dark, light } from "./styled-components/Theme";
import { useSelector } from "react-redux";

const StyledApp = styled.div`
    text-align: center;
    .grid {
        display: grid;
        grid-template-columns: fit-content(300px) 1fr;
    }
`;

function App() {
    const themeSelector = useSelector((state) => state?.theme);

    return (
        <StyledApp>
            <ThemeProvider theme={themeSelector === "dark" ? dark : light}>
                <GlobalStyles />
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
