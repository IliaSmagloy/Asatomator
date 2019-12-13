import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col, Container, Navbar, NavbarBrand } from "shards-react";

import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav/NavbarNav";
import NavbarToggle from "./NavbarToggle";
import Hidden from '@material-ui/core/Hidden';

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  return (
    <div className={classes}>
      <Container className="p-0">
        <Hidden smUp>
          <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
            <Col
            lg={{ size: 2 }}
            md={{ size: 2, disabled: true }}
            xs={{ size: 2 }}
            xs={{ size: 2 }}
  >
              <NavbarToggle />
            </Col>
          </Navbar>
        </Hidden>

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
