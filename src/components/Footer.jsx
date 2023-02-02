import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import logoworld1 from "../images/logoworld1.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <img src={logoworld1} alt="logo" width="250" />
            <h5>Знаем, чего хотят дети</h5>
          </Col>
          <Col>
            <ListGroup className="catalog_category">
              <ListGroupItem className="cat-footer"></ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
