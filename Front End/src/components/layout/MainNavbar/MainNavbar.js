import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col, Container, Navbar, NavbarBrand } from "shards-react";

import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav/NavbarNav";
import NavbarToggle from "./NavbarToggle";

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <Col>
            <NavbarBrand
              className="w-100 mr-0"
              href="#"
              style={{ lineHeight: "25px" }}
            >
              <div className="d-table mr-auto" >
                <img
                id="main-logo"
                className="d-inline-block align-left mr-1"
                style={{ maxWidth: "50px" }}
                src={require("../../../images/bhirotomator.png")}
                alt="Shards Dashboard"
                />
                <img
                id="main-logo"
                className="d-inline-block align-left mr-1"
                style={{ maxWidth: "50px" }}
                src={require("../../../images/logo.png")}
                alt="Shards Dashboard"
                />
              </div>
            </NavbarBrand>
          </Col>
          <Col
          lg={{ size: 2 }}
          md={{ size: 3 }}
>
            <NavbarToggle />
          </Col>
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
