
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AllPassaners from './Components/AllPassaners';
import AddPassengers from './Components/AddPassangers';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import {Link} from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'




function App() {
  return <>
  {/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#link">AllPassaners</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}




  <BrowserRouter>
    <Routes>
      <Route path='/allpassengers' element={<AllPassaners/>}/>
      <Route path='/addpassenger' element={<AddPassengers/>}/>
      <Route path='/' element={<AddPassengers/>}/>
    </Routes>
  </BrowserRouter>

    
  
  </>
}

export default App;
