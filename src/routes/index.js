
import { NonAuthRequired, AuthRequired } from "./authRoute";



import AdminList from "../pages/adminList/AdminList";
import { Routes, Route } from "react-router-dom";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import Admin from "../pages/admin/admin";
import NewUser from "../pages/newUser/NewUser";
import ClassList from "../pages/classList/ClassList";
import Class from "../pages/class/Class";
import NewProduct from "../pages/newProduct/NewProduct";
import LoginPage from '../pages/LoginPage';



const AppRouter = ()=>{
  return (
    
      <Routes>
        
          <Route exact path="/" element={
            
              <AdminList/>
            
          }/>
          <Route exact path="/login" element={
           
              <LoginPage/>
            
          }/>
          <Route exact path="/admin/:userId" element={
            
            <Admin/>
          
        }/>
          <Route exact path="/users" element={
            
              <UserList/>
            
          }/>
          <Route exact path="/user/:userId" element={
            
              <User/>
            
          }/>
          <Route exact path="/newUser" element={
            
              <NewUser/>
           
          }/>
          <Route exact path="/classes" element={
           
              <ClassList/>
           
          }/>
          <Route exact path="/class/:productId" element={
           
              <Class/>
           
          }/>
          <Route exact path="/newproduct" element={
          
              <NewProduct/>
            
          }/>
          
        </Routes>
   
  )
}

export default AppRouter;