import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar1 from "./components/Navbar1";
import LoginAdmin from "./pages/admin/LoginAdmin";
import Sidebar from "./components/admin/Sidebar";
import Room from "./pages/admin/Room";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>

          {/* User */}
          <Route
            path="/*"
            element={
              <>
                <Navbar1 />
                <Routes>
                  <Route index element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                </Routes>
              </>
            }
          />

          {/* Admin */}
          <Route path="/admin" element={<LoginAdmin />} />
          <Route
            path="/home/*"
            element={
              <>
                <Sidebar />
                <div className="md:ml-64 px-16 mx-auto">
                  <Routes>
                    <Route path="room" element={<Room />} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
