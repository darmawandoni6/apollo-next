import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { MENUS } from "@constants/menus";
import { withRouter } from "next/router";

const NavLeft = (props) => {
  const { router } = props;

  const activeRoute = (routeName) => router.pathname.indexOf(routeName) > -1;

  return (
    <div className="h-100">
      <img
        className="logo-dashboard my-4"
        src={require("@images/new_logo.svg")}
        alt=""
      />
      <ListGroup flush className="list-group-nav-left" tag="div">
        {MENUS.map((menu, i) => (
          <ListGroupItem
            active={activeRoute(menu.href)}
            tag="a"
            href="#"
            key={i}
          >
            <i className={menu.icon} />
            {menu.label}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default withRouter(NavLeft);
