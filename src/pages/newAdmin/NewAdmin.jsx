import "./newAdmin.css";
import Swal from 'sweetalert2';
import * as Notifications from '../../utils/notifications'
import React, { useState, useContext } from "react";
import { fetchPostAdmin } from '../../services/adminService';
import AuthContext from "../../contexts/authContext";

export default function NewAdmin() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    if (!name){
      window.alert('Please enter name !!!');
    } else {
      if (!role){
        window.alert('Please enter role !!!');
      } else {
        if (!email){
          window.alert('Please enter email !!!');
        } else {
          if (!username){
            window.alert('Please enter username !!!');
          } else {
            if (!password){
              window.alert('Please enter password !!!');
            } else {
      const newAdmin = {
        name: name,
        role: role,
        email: email,
        username: username,
        password: password,
      }
      setIsLoading(true);
      const result = await fetchPostAdmin(currentUser.token, newAdmin)
      console.log(result)
      if (result.data) {
        
        Swal.fire({
          title: "Success",
          text: "Create Admin account success",
          icon: "success",
          button: "Close",
        });
      }
      else if (result.error) {
        Swal.fire({
          title: "Error",
          text: "Create Admin account failed",
          icon: "error",
          button: "Close",
        });
      }
      
      setIsLoading(false);

    }
  }
}
    }
    }
  }
  
   
  return (
    <div className="newAdmin">
      <h1 className="newAdminTitle">New Admin</h1>
      <form className="newAdminForm">
        <div className="newAdminItem">
          <label>Name</label>
          <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="John Smith" />
        </div>
        <div className="newAdminItem">
          <label>Role</label>
          <input onChange={(e)=>setRole(e.target.value)} type="text"  />
        </div>
        <div className="newAdminItem">
          <label>Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newAdminItem">
          <label>Username</label>
          <input onChange={(e)=>setUsername(e.target.value)} type="text"  />
        </div>
        <div className="newAdminItem">
          <label>Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" />
        </div>
        <button onClick={handleCreateAdmin} color="primary" className="newAdminButton">Create</button>
      </form>
    </div>
  )
}

      
