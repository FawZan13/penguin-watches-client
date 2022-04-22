import './App.css';
import {
  BrowserRouter as Router,
  Routes,
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
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Payment from './Pages/Dashboard/Payment/Payment';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';


function App() {
  return (

    <AuthProvider>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />}>

          </Route>
          <Route path="/login" element={<Login />}>

          </Route>
          <Route path="/register" element={<Register />}>

          </Route>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/explore" element={<Explore />}>

          </Route>
          <Route exact path="/purchase/:_id" element={<PrivateRoute><Purchase /></PrivateRoute>}>

          </Route>
          <Route path="/dashboard/manageOrders" element={<AdminRoute><ManageOrders /></AdminRoute>}>

          </Route>
          <Route path="/dashboard/manageProducts" element={<AdminRoute><ManageProducts /></AdminRoute>}>

          </Route>
          <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}>

          </Route>
          <Route path="/dashboard/addProduct" element={<AdminRoute><AddProduct /></AdminRoute>}>

          </Route>
          <Route path="/dashboard/addReview" element={<PrivateRoute><AddReview /></PrivateRoute>}>

          </Route>
          <Route path="/dashboard/pay" element={<PrivateRoute><Payment /></PrivateRoute>}>

          </Route>
          <Route path="/dashboard/myOrders" element={<PrivateRoute><MyOrders /></PrivateRoute>}>

          </Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>

          </Route>
          <Route path="*" element={<NotFound />}>

          </Route>

        </Routes>

      </Router>
    </AuthProvider>

  );
}

export default App;
