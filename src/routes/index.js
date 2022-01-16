
import { NonAuthRequired, AuthRequired } from "./authRoute";



import Home from "../pages/home/Home";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import NewUser from "../pages/newUser/NewUser";
import ProductList from "../pages/productList/ProductList";
import Product from "../pages/product/Product";
import NewProduct from "../pages/newProduct/NewProduct";
import LoginPage from '../pages/LoginPage';



const AppRouter = ()=>{
  return (
    
      <Routes>
        
          <Route exact path="/" element={
            <AuthRequired>
              <Home/>
            </AuthRequired>
          }/>
          <Route exact path="/login" element={
            <NonAuthRequired>
              <LoginPage/>
            </NonAuthRequired>
          }/>
          <Route exact path="/users" element={
            <AuthRequired>
              <UserList/>
            </AuthRequired>
          }/>
          <Route exact path="/user/:userId" element={
            <AuthRequired>
              <User/>
            </AuthRequired>
          }/>
          <Route exact path="/newUser" element={
            <AuthRequired>
              <NewUser/>
            </AuthRequired>
          }/>
          <Route exact path="/products" element={
            <AuthRequired>
              <ProductList/>
            </AuthRequired>
          }/>
          <Route exact path="/product/:productId" element={
            <AuthRequired>
              <Product/>
            </AuthRequired>
          }/>
          <Route exact path="/newproduct" element={
            <AuthRequired>
              <NewProduct/>
            </AuthRequired>
          }/>
          
        </Routes>
   
  )
}

export default AppRouter;