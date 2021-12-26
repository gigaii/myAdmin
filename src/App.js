import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/Newuser/NewUser";
import ProductList from "./pages/Productlist/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/Newproduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar/> 
      <div className="container">
        <Sidebar/>

        <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/users' exact element={<UserList/>}></Route>
        <Route path='/User/:userId' exact element={<User/>}></Route>
        <Route path='/newUser' exact element={<NewUser/>}></Route>
        <Route path='/products' exact element={<ProductList/>}></Route>
        <Route path='/product/:productId' exact element={<Product/>}></Route>
        <Route path='/newProduct' exact element={<NewProduct/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
