import React, { useState } from "react";
import "../styles.css";

function NavItem(props) {
  const [open, setOpen] = useState();

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open ? props.children : null}
    </li>
  );
}

export default NavItem;
