import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AdminProducts from './components/Admin/AdminProducts';
import AdminOrder from './components/Admin/AdminOrder';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AdminAddProduct from './components/Admin/AdminAddProduct';



function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/admin" exact component={AdminProducts}/>
        <Route path="/signup" exact component={SignupPage}/>
        <Route path="/admin/orders" exact component={AdminOrder}/>
        <Route path="/addProduct" exact component={AdminAddProduct}/>
        <Route path="/admin/editProduct/:productId" exact component={AdminAddProduct}/>
      </Switch>
    </Router>
  );
}

export default App;
