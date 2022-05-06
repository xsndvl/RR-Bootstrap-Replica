import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"


const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand>
                <img style={{width: "100%", height: "428px" }} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"/>
            </Navbar.Brand>
                <Nav className="mr-auto"> 
                </Nav>
                <Nav>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    // return(
    //     <Navbar bg="dark" variant="dark">
    //         <Container>
    //             <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //             <Nav className="me-auto">
    //                 <Nav.Link href="#home">instacart</Nav.Link>
    //                 <Nav.Link href="#features">Log in</Nav.Link>
    //                 <Nav.Link href="#pricing">Sign up</Nav.Link>
    //             </Nav>
    //         </Container>
    //   </Navbar> 
    // )
    // return(
    // <Navbar bg="dark" variant="dark">
    // <Container>
    //   <Navbar.Brand href="#home">
    //     <img
    //       alt=""
    //       src="/logo.svg"
    //       width="30"
    //       height="30"
    //       className="d-inline-block align-top"
    //     />{' '}
    //   React Bootstrap
    //   </Navbar.Brand>
    //   <Nav className="me-auto">
    //                  <Nav.Link href="#home">instacart</Nav.Link>
    //                  <Nav.Link href="#features">Log in</Nav.Link>
    //                  <Nav.Link href="#pricing">Sign up</Nav.Link>
    //              </Nav>
    // </Container>
    // </Navbar>
    // )
    )
}

export default NavBar