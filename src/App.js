import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from "./pages/home/Home";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/newUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";






function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes> 

      <Topbar/>
      <div className="container">
      <Sidebar />
        
      <Routes>
  
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
        
      </Routes>
    
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
