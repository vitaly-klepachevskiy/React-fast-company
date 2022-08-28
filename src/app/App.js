import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import Users from "./layouts/users";
import Main from "./layouts/main";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Route path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
