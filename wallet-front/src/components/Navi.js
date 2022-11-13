import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <div>
      <Nav className="bg-info">
        <NavItem>
          <NavLink tag={Link} to="/" className="text-white font-weight-bold">
            Anasayfa
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={Link}
            to="/accounts"
            className="text-white font-weight-bold"
          >
            Hesaplar
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={Link}
            to="/addAccount"
            className="text-white font-weight-bold"
          >
            Hesap Ekle
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
export default Navi;
