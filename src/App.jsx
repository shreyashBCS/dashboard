import Sidebar from "./Component/Sidebar"
import Dashboard from "./Component/Dashboard"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: "20px", width: "100%" }}>
          <Routes>
            {/* Define routes for each menu item */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App