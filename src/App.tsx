import React, { Component } from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
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
import "./theme/theme.css";
import Menu from "./components/Menu";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      loggedIn: null,
      menuDisabled: false,
      needToShowEmailReminder: false,
      user: {},
      userData: {},
      connectOnOff: null,
      connectMailboxOneOnOff: null,
      connectMailboxTwoOnOff: null,
      unreadMessages: false,
      offlineCity: "New York City / NY Metropolitan Area",
      searchPage: 0,
      mailbox: [],
      signupPending: false,
      notificationToken: "",
    };
  }

  render() {
    // console.log(this.allContent)
    return (
      <IonApp>
        <IonReactRouter>
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/search" exact>
              <Search appState={this.state} />
            </Route>

            <Route path="/profile" exact>
              <Profile2 appState={this.state}></Profile2>
            </Route>

            <Route path="/" exact>
              <Home appState={this.state} />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default App;
