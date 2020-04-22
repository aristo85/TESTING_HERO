import React from 'react';
import LandingPage from "./landingPage";
import { Switch, Route } from 'react-router-dom';
import Resume from "./resume";
import Index from "./projects/index";
import Contact from "./contact";
import AboutMe from "./aboutMe";
const Main = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/about" component={AboutMe} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/project" component={Index} />
                <Route  path="/resume" component={Resume} />
            </Switch>
        </div>

        )

}

export default Main;