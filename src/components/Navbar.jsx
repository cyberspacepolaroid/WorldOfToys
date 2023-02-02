import { NavItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row } from "reactstrap";
import Navbar from "react-bootstrap/Navbar";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoworld1 from "../images/logoworld1.jpg";
import "../styles/navbar.css";

const NavScrollExample = () => {

  const {cartTotalQuantity} = useSelector((state) => state.cart);

  return (
    <Navbar className="navscroll sticky-top">
      <Spinner animation="border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      Загружаем
      <Container fluid>
        <nav class="navbar navbar-light">
          <div class="container">
            <a class="navbar-brand" href="/home">
              <img
                src={logoworld1}
                alt="WorldOfToys"
                width="100"
                height="100"
              />
            </a>
            <nav>
              <h5>WorldOfToys</h5>
            </nav>
          </div>
        </nav>

        <Row></Row>

        <NavItem>
          <>
            <Button variant="success">Личный кабинет</Button>
            {"  "}
            <Button variant="success">Регистрация</Button>
          </>

          <div className="navbar d-flex align-items-center gap-3">
            <span className="icon_cart">
              <Link to="/cart">
                <i class="ri-shopping-cart-fill ri-xl"></i>
              </Link>
              <span className="badge text-bg-warning">{cartTotalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="bi bi-person"></i>
              </Link>
            </span>

            <div className="iconmenu">
              <span>
                <i class="bi bi-list"></i>
              </span>
            </div>
          </div>
        </NavItem>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
