import React, { Component } from "react";
import { Route } from "react-router-dom";
import { IonApp, IonContent, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Profile2 from "./pages/Profile2";
import Search from "./pages/Search";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
// import "./theme/theme.css";
import Menu from "./components/Menu";
import Logo from "./components/Logo";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      loggedIn: null,
      user: {},
      userData: {},
      fixBug: "0px"
    };
  }

  // fixBug: any = true;

  ionMenuScrollBug = () => {
    console.log("open")
    this.setState({
      fixBug: "1px"
    })
  }

  ionMenuScrollBugFix = () => {
    console.log("close")
    this.setState({
      fixBug: "0px"
    })
  }

  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <Menu ionMenuScrollBug={this.ionMenuScrollBug} ionMenuScrollBugFix={this.ionMenuScrollBugFix} />
          <IonRouterOutlet style={{top: this.state.fixBug}} id="main">
            <IonContent>
              <Logo />
              <Route path="/search" exact>
                <Search appState={this.state} />
              </Route>

              <Route path="/profile" exact>
                <Profile2 appState={this.state}></Profile2>
              </Route>

              <Route path="/" exact>
                <Home appState={this.state} />
              </Route>
            </IonContent>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default App;
