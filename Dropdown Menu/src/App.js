import React from "react";
import "./styles.css";

// --------------- ICONS -----------
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";

import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropDownMenu from "./components/DropDownMenu";

export default function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      {/* DROPDOWN MENU */}
      <NavItem icon={<CaretIcon />}>
        <DropDownMenu />
      </NavItem>
    </Navbar>
  );
}
