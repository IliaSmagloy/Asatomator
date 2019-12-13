import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Nav, NavItem, NavLink } from "shards-react";
import { Link } from "react-router-dom";

const MainFooter = ({ contained, menuItems, copyright }) => (
  <div dir="rtl" style={{textAlign:"center"}}>
    <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
      <Container fluid={contained}>
        <Row>
          <div className="d-table mr-auto" >
            <div
            style={{textAlign: "center"}}>
              <img
              id="main-logo"
              className="d-inline-block align-left mr-1"
              style={{ maxWidth: "65%", padding: "2px"}}
              src={require("../../images/bhirotomator.png")}
              alt="Shards Dashboard"
              />

            </div>
          </div>
        </Row>
        <Row>
          <Nav>
            {menuItems.map((item, idx) => (
              <NavItem key={idx}>
                <NavLink tag={Link} to={item.to}>
                  {item.title}
                </NavLink>
              </NavItem>
              ))}
          </Nav>
          <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
        </Row>
      </Container>
    </footer>
  </div>
);

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "All Rights Reserved. Bedimos@Asat 2019. Special Thanks to Yarden Stossel",
  menuItems: [
    {
      title: "שאל את המתמודדים שאלה",
      to: "main-page"
    },
    {
      title: "בינגו בחירות",
      to: "/elections-bingo",
      htmlAfter: ""
    },
    {
      title: "שאלות נפוצות",
      to: "/faq",
      htmlAfter: ""
    },
    {
      title: "עימות בחירות",
      to: "/debate",
      htmlAfter: ""
    },
    {
      title: "למידע נוסף",
      to: "/promises",
      htmlAfter: ""
    },
  ]
};

export default MainFooter;
