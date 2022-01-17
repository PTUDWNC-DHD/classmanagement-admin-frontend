import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

import { BrowserRouter as Router} from "react-router-dom";

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
