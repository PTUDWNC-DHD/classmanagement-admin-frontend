
import { NonAuthRequired, AuthRequired } from "./authRoute";



import AdminList from "../pages/adminList/AdminList";
import { Routes, Route } from "react-router-dom";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import Admin from "../pages/admin/admin";
import NewAdmin from "../pages/newAdmin/NewAdmin";
import ClassList from "../pages/classList/ClassList";
import Class from "../pages/class/Class";
import LoginPage from '../pages/LoginPage';
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";


const AppRouter = ()=>{
  return (
    
      <Routes>
        
          <Route exact path="/" element={
            <AuthRequired>
                <Topbar />
                    <div className="container">
                        <Sidebar />
                        <AdminList/>
                    </div>
            </AuthRequired>
          }/>
          <Route exact path="/login" element={
             <NonAuthRequired>  
              <LoginPage/>
            </NonAuthRequired>
          }/>
          <Route exact path="/admin/:id" element={
            <AuthRequired>
                <Topbar />
                    <div className="container">
                        <Sidebar />
                         <Admin/>
                    </div>
            </AuthRequired>
        }/>
          <Route exact path="/users" element={
            <AuthRequired>
                <Topbar />
                    <div className="container">
                        <Sidebar />
                        <UserList/>
                    </div>
            </AuthRequired>
          }/>
          <Route exact path="/user/:id" element={
            <AuthRequired>
                <Topbar />
                    <div className="container">
                        <Sidebar />
                        <User />
                    </div>
            </AuthRequired>
          }/>
          <Route exact path="/newAdmin" element={
            <AuthRequired>
                <Topbar />
                    <div className="container">
                        <Sidebar />
                        <NewAdmin/>
                    </div>
            </AuthRequired>
          }/>
          <Route exact path="/classes" element={
            <AuthRequired>
                <Topbar />
                    <div className="container">
                        <Sidebar />
                        <ClassList/>
                    </div>
            </AuthRequired>
          }/>
          <Route exact path="/class/:id" element={
            <AuthRequired>
                <Topbar />
                    <div className="container">
                        <Sidebar />
                        <Class/>
                    </div>
            </AuthRequired>

          }/>
          
        </Routes>
   
  )
}

export default AppRouter;