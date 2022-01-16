import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { AuthProvider } from "./contexts/authContext";
import AppRouter from './routes'

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <AuthProvider>
      <AppRouter />
    </AuthProvider>
        
      </div>
    </Router>
  );
}

export default App;
