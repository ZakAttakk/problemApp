import React, { useRef, Component } from "react";
import {
  IonFab,
  IonFabButton,
  IonContent,
  IonMenu,
  IonButton,
  IonMenuToggle,
  isPlatform,
} from "@ionic/react";
// import { menu, mailOutline } from "ionicons/icons";
import menu from "../theme/menu.png";

class Menu extends Component<any, any> {
  constructor(props: any) {
    super(props);

    
  }
  sideMenuRef = React.createRef<any>();
  

  openMenu = () => {
    const sideMenu = this.sideMenuRef.current;
    sideMenu.open();
  }


  render = () => {
    let menuContent: any;

    menuContent = (
      <IonMenuToggle>
        <br />
        <IonButton
          routerLink="/profile"
          className="sideButton"
          color="primary"
          disabled={false}
        >
          Profile
        </IonButton>
        <br />
        <IonButton
          color="primary"
          routerLink="/search"
          className="sideButton"
          disabled={false}
        >
          Search
        </IonButton>
        <br />
      </IonMenuToggle>
    );

    return (
      <div>
        <IonFab
          // className={props.menuDisabled ? "ion-hide" : ""}
          vertical="top"
          horizontal="start"
          slot="fixed"
        >
          <IonFabButton
            onClick={this.openMenu}
            size="small"
            id="menuButton"
            color="light"
            className={
              isPlatform("iphone") ? "iosFabMargin" : "androidFabMargin"
            }
          >
            <img src={menu} />
          </IonFabButton>
        </IonFab>
        <IonMenu
          id="sideMenu"
          ref={this.sideMenuRef}
          contentId="main"
          max-edge-start="0"
        >
          <IonContent className="ion-text-center sideMenuContent">
            <br />
            <br />
            <br />
            {isPlatform("ios") ? <br /> : null}

            {menuContent}
          </IonContent>
        </IonMenu>
      </div>
    );
  };
}

export default Menu;
