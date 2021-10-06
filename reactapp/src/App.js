import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12}>
            <Switch>
              <Route path="/" exact component={LoginPage}/>
              <Route path="/login" exact component={LoginPage}/>
              <Route path="/signup" exact component={SignupPage}/>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
