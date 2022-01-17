
import "./App.css";

import { BrowserRouter as Router} from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import AppRouter from './routes'

function App() {
  return (
    <Router>
        <AuthProvider>
      <AppRouter />
    </AuthProvider>
    </Router>
  );
}

export default App;
