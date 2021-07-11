import logo from './logo.svg';
import './App.css';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export function App() {
  return (
    <div className="App">
      <header className="App-header">

      {/* <Container>
          <h1>Create now your own CV <u>personilized</u> Card</h1>
          <Row>
            <Col>
              <Card>
                <Card.Img src='https://unsplash.com/200/300' />
                <Card.Title>Ismail Halouani</Card.Title>
                <Card.Text className='text-muted'>17/02/2005</Card.Text>
                <Card.Text>I'm a Taekwondo Player, a Developer, a Designer.</Card.Text>
                <Card.Button>Read More</Card.Button>
              </Card>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="formFullName" md>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control placeholder="FirstName - Name"/>
                </Form.Group>
                
                <Form.Group controlId="formBornDay" md>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control as="input" type="date" placeholder="day/month/year"/>
                </Form.Group>

                <Form.Group controlId="formDescription" md>
                  <Form.Label>little Description</Form.Label>
                  <Form.Control as="textarea" placeholder="Describe yourself in few sentences..."/>
                </Form.Group>

              </Form>
              
              <Row>
                  <Col>
                    <Button variant='primary'>Submit</Button>
                  </Col>
                  <Col>
                    <Button variant='secondary'>Unlock</Button>
                    <p className="text-muted">Unlock the other part of the card and get more features!</p>
                  </Col>
                </Row>
            </Col>
          </Row>
      </Container> */}



        <form action="">
          <h1>Login</h1>
          <div class="Email">
            <label for="email">Email :</label>
            <input type="email" id='email'>
          </div>
          <div class="Password">
            <label for="password">Password :</label>
            <input type="password" id="password">
          </div>
          <div class="buttons">
            <button class="primary">Log In</button>
            <button class="secondary">Register</button>
          </div>
        </form>

      </header>
    </div>
  );
}

