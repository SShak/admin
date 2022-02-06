import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from "./pages/home/Home";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/newUser";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Topbar/>
      <div className="container">
        <Sidebar />
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
      </Routes>
    
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
