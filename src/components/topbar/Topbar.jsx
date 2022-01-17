import { useContext,  React } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings,MeetingRoom  } from "@material-ui/icons";
import logo from '../../assets/images/logo1.png'
import { removeFromLocalStorage } from "../../utils/localStorage";
import * as Constant from '../../utils/constant'
import AuthContext from "../../contexts/authContext";


export default function Topbar(  ) {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const handleLogout = () => {
    setCurrentUser(null)
    removeFromLocalStorage(Constant.LOCAL_STORAGE_USER)
  }
  return (
    <div className="topbar">
      
      <div className="topbarWrapper">
        <div className="logo">
                <img src={logo} alt="company logo" />
                <h1>Admin</h1>
            </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <MeetingRoom fontSize="large" className="icon" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
}
