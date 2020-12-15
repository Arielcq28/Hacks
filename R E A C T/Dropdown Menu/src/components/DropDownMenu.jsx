import React, { useState } from "react";

// --------------- ICONS ---------------

import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";

// --------------- CSS TRANSITION ---------------
import { CSSTransition } from "react-transition-group";

export default function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button"> {props.leftIcon} </span>

        {props.children}

        <span className="icon-right"> {props.rightIcon} </span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        className="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem> My Profile </DropDownItem>
          <DropDownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>

      {/* SECONDARY */}

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        className="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
