import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Logo from '../Assets/imgs/logo.svg';

const AppBar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img
                        src={Logo}
                        width="200"
                        height="60"
                        className="d-inline-block align-top"
                        alt="DroughTracker"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                    <Nav.Link as={Link} to="/Demo">Demo</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        By: <a href='https://www.miguelmerlin.com'>Miguel Merlin</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppBar;