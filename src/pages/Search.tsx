import React, { Component } from "react";
import { IonRow, IonCol, IonButton, IonContent, IonGrid } from "@ionic/react";
import SelectActivities from "../components/Search/SelectActivities";
import SelectHoods from "../components/Search/SelectHoods";
import SelectCity from "../components/Search/SelectCity";
import SearchResult from "../components/Search/SearchResult";
import { activities } from "../data/activities";
import { neighborhoods } from "../data/hoods";
import Logo from "../components/Logo";

class Search extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectingActivities: false,
      selectingHoods: false,
      selectingCity: false,
      cityChange: false,
      firstSearchTriggered: false,
      searchPending: true,
      searchResults: null,
    };
  }

  componentDidMount = () => {
    if (this.props.appState.loggedIn) {
      if (
        Object.keys(this.props.appState.userData).length > 0 &&
        this.state.firstSearchTriggered === false
      ) {
        console.log("FIRST SEARCH LOGGED IN - MOUNT");
        this.setState(
          {
            firstSearchTriggered: true,
          },
          this.getSearchResults
        );
      }
    }

    if (
      this.props.appState.loggedIn === false &&
      this.state.firstSearchTriggered === false
    ) {
      console.log("FIRST SEARCH NOT LOGGED IN - MOUNT");
      this.setState(
        {
          firstSearchTriggered: true,
        },
        this.getSearchResults
      );
    }

    var content = document.getElementById("main");
    content.scrollTo(0, 0);
  };

  componentDidUpdate = () => {
    // console.log("test")
    if (this.props.appState.loggedIn) {
      if (
        Object.keys(this.props.appState.userData).length > 0 &&
        this.state.firstSearchTriggered === false
      ) {
        console.log("FIRST SEARCH LOGGED IN - UPDATE");
        this.setState(
          {
            firstSearchTriggered: true,
          },
          this.getSearchResults
        );
      }
    } else {
      if (
        this.props.appState.loggedIn === false &&
        this.state.firstSearchTriggered === false
      ) {
        console.log("FIRST SEARCH NOT LOGGED IN - UPDATE");
        this.setState(
          {
            firstSearchTriggered: true,
          },
          this.getSearchResults
        );
      }
      // if (this.props.) {

      // }
      // console.log(this.props.appState.offlineCity)
    }
  };

  toggleSelectActivities = (action: any) => {};

  toggleSelectHoods = (action: any) => {};

  toggleSelectCity = (action: any) => {};

  getSearchResults = (offlineCityChange: string = undefined) => {
    this.setState({
      cityChange: false,
    });
    let citySearch: string;
    if (this.props.appState.loggedIn) {
      citySearch = this.props.appState.userData.citySearch;
    } else if (offlineCityChange) {
      citySearch = offlineCityChange;
    } else {
      citySearch = this.props.appState.offlineCity;
    }
  };

  hoodFilter = (item: any) => {};

  activFilter = (item: any) => {};

  filterResultsByActivitiesAndHoods = (searchResults: any) => {};

  decreaseSearchPage = () => {};

  increaseSearchPage = () => {};

  render = () => {
    return (
      <IonContent>
        <Logo />
        <IonGrid>
          <IonRow className="firstFont">
            <IonCol>
              <div id="searchHeading" className="searchHeading">
                Search
              </div>
              {/* --- ACTIVITES --- */}
              <IonButton>Select</IonButton>
              <span
                style={{
                  fontSize: "13pt",
                  fontFamily: "Palanquin SemiBold",
                  verticalAlign: "-4px",
                }}
              >
                Interests & Activities:
              </span>
              <br />
              <div className="searchSelected"></div>

              {/* --- Neighborhoods --- */}
              <IonButton>Select</IonButton>
              <span
                style={{
                  fontSize: "13pt",
                  fontFamily: "Palanquin SemiBold",
                  verticalAlign: "-4px",
                }}
              >
                Neighborhoods:
              </span>
              <br />
              <div className="searchSelected"></div>

              {/* --- City --- */}
              <IonButton>Select</IonButton>
              <span
                style={{
                  fontSize: "13pt",
                  fontFamily: "Palanquin SemiBold",
                  verticalAlign: "-4px",
                }}
              >
                City:
              </span>
              <br />
              <div className="searchSelected"></div>

              <hr id="divider" />

              <div style={{ textAlign: "center" }}>
                <br />
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <SelectActivities
                appState={this.props.appState}
                toggleSelectActivities={this.toggleSelectActivities}
                selectingActivities={this.state.selectingActivities}
                cityChange={this.state.cityChange}
              />
              <SelectHoods
                appState={this.props.appState}
                toggleSelectHoods={this.toggleSelectHoods}
                selectingHoods={this.state.selectingHoods}
                cityChange={this.state.cityChange}
              />
              <SelectCity
                appState={this.props.appState}
                toggleSelectCity={this.toggleSelectCity}
                selectingCity={this.state.selectingCity}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    );
    // }
  };
}

export default Search;
