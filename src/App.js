import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Payment from './Pages/Dashboard/Payment/Payment';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';


function App() {
  return (

    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute exact path="/purchase/:_id">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageOrders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageProducts">
            <ManageProducts></ManageProducts>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/pay">
            <Payment></Payment>
          </PrivateRoute>
          <Route path="/dashboard/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
