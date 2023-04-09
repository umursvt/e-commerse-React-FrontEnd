import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import logo from '../../img/logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-bootstrap';

function NavScrollExample() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return (
    <div>
      <Navbar
        className={`${
          isScrolled ? 'fixed-top bg-green-700 ' : 'mt-5 bg-orange-400 '
        }`}
        expand="lg"
        fixed="top"
        style={{ transition: 'all 0.3s ease-in-out' }}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <Nav.Link href="#action1">
              <img src={logo} alt="" style={{ width: '60px' }} />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <div className=" relative ">
                <input
                  type="search"
                  className=" rounded placeholder:ps-2 w-60 h-10   "
                  placeholder="search your item here"
                />
                <SearchIcon className=" absolute top-3 right-2 hover:cursor-pointer  " />
              </div>
            </Form>
            <Nav
              className="me-auto my-2 d-flex"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown
                className="custom-dropdown lg:ms-[150px]"
                title="CANDLE's"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className=" custom-dropdown lg:ps-[50px]"
                title="SOAP's"
                id="navbarScrollingDropdown"
                style={{ color: 'white' }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="custom-dropdown lg:ps-[50px]"
                title="BATH SALT's"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">
                <button
                  className={` lg:ms-48  border-2 px-2 py-1 rounded border-none font-bold  ${
                    isScrolled
                      ? 'text-green-900 bg-orange-400 '
                      : ' text-orange-400 bg-green-900 '
                  }`}
                >
                  Login
                </button>
              </Nav.Link>
              <Nav.Link href="#action1">
                <button
                  className={` border-2 px-2 py-1 rounded border-none font-bold  ${
                    isScrolled
                      ? 'text-green-900 bg-orange-400 '
                      : ' text-orange-400 bg-green-900 '
                  }`}
                >
                  Register
                </button>
              </Nav.Link>

              <Nav.Link href="#action1">
                <Stack
                  spacing={4}
                  direction="row"
                  sx={{ color: 'action.active' }}
                >
                  <Badge color="secondary" badgeContent={100}>
                    <AddShoppingCartIcon
                      style={{ width: '30px', height: '30px' }}
                      className={` shop-car  rounded border-none font-bold  ${
                        isScrolled
                          ? 'text-green-900 bg-orange-400 '
                          : ' text-orange-400 bg-green-900 '
                      }`}
                    />
                  </Badge>
                </Stack>
              </Nav.Link>
              <Nav.Link href="#action1">
                <FavoriteBorderIcon
                  style={{ width: '30px', height: '30px' }}
                  className={` deneme2  rounded border-none font-bold  ${
                    isScrolled
                      ? 'text-green-900 bg-orange-400 '
                      : ' text-orange-400 bg-green-900 '
                  }`}
                />
              </Nav.Link>
              <NavLink></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
