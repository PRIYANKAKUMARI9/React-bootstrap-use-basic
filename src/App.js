
import { Button, Col, Container, Row } from 'react-bootstrap';
import './App.css';





function App() {
 
  return (
    <div className="App">
      <h1 className='text-danger'>hello</h1>
      <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center py-4' >
              welcome the world
              <h1>hello world this is class page</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
            
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
                </div>
                
            </Col>
            <Col lg="3" md="6">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </Col>
            <Col lg="3" md="6">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </Col>
            <Col lg="3" md="6">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;

