import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

import AuthContext from '../contexts/authContext'
import { fetchGetAdmin } from "../services/adminService";




const NonAuthRequired = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";

  if (currentUser) {
    return <Navigate to={from} replace={true} />
  }

  return children
}

const AuthRequired = ({ children }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const location = useLocation()

  useEffect(()=>{
    const checkIsLoginExpired = async () => {
      if (currentUser) {
        const user = await fetchGetAdmin(currentUser.token, currentUser.user._id);
        if (user.error) {
          setCurrentUser(null);
        }
      }
    }
    checkIsLoginExpired()
  },[])

  if (!currentUser) {
    return <Navigate to='/login' />
  }

  return children
}

export {
  NonAuthRequired,
  AuthRequired
}