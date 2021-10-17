import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AdminProducts from './components/Admin/AdminProducts';
import Orders from './components/Admin/Orders';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/admin" exact component={AdminProducts}/>
        <Route path="/signup" exact component={SignupPage}/>
        <Route path="/admin/orders" exact component={Orders}/>
      </Switch>
    </Router>
  );
}

export default App;
