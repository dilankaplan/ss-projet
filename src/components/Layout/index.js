import { useMutation } from "@apollo/client";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../graphql/mutation";

function Layout({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [logout, { data, loading, error }] = useMutation(LOGOUT);

  return (
    <div className="100vw 100vh">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Stock
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {token ? (
                <>
                  <Nav.Link
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                    }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/products");
                    }}
                  >
                    Products
                  </Nav.Link>
                  <Nav.Link
                    href="/orders"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/orders");
                    }}
                  >
                    Orders
                  </Nav.Link>
                  <Nav.Link
                    href="/profile"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </Nav.Link>
                </>
              ) : null}
            </Nav>
            <Nav.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (token) {
                  logout();
                  localStorage.removeItem("token");
                }
                navigate("/login");
              }}
            >
              {token ? "Logout" : "Login"}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3">{children}</Container>
    </div>
  );
}

export default Layout;
