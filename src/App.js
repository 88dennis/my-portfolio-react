import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import HomePage  from "./pages/HomePage";
import ProfilePage  from "./pages/ProfilePage";
import ResumePage  from "./pages/ResumePage";
import SettingsPage  from "./pages/SettingsPage";
import GamesPage  from "./pages/GamesPage";

import ProjectsPage  from "./pages/ProjectsPage";

import GetHelpPage  from "./pages/GetHelpPage";

import TestPage from "./pages/TestPage";

function App() {
  
  return (

<div className="App" style={{height: '100%'}}> 
    <Router basename = {process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/gamespage" component={GamesPage} />
          <Route exact path="/projectspage" component={ProjectsPage} />
          <Route exact path="/profilepage" component={ProfilePage} />
          <Route exact path="/resumepage" component={ResumePage} />

          <Route exact path="/settingspage" component={SettingsPage} />
          <Route exact path="/gethelppage" component={GetHelpPage} />
          <Route exact path="/testpage" component={TestPage} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
