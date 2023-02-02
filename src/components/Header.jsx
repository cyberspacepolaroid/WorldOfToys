import React from "react";

import { Nav, NavLink, NavItem } from "reactstrap";
import { NavDropdown } from "react-bootstrap";
import { Container, Row } from "reactstrap";
import "../styles/navbar.css";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Row>
          <Nav justified pills>
            <NavItem>
              <NavLink href="/">Выберите город: г.Москва</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">О компании</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Франшиза WorldOfToys</NavLink>
            </NavItem>
            <NavDropdown title="Новости" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Действие</NavDropdown.Item>
              <NavDropdown.Item href="#action4">что-то тут</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/registr">что-то</NavDropdown.Item>
            </NavDropdown>
            <NavItem>
              <NavLink href="/registr">Войти</NavLink>
            </NavItem>
          </Nav>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
