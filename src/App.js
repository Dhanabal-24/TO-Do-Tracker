// src/App.js
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Home from "./Home";
import Dashboard from "./Dashboard";
import TaskPage from "./TaskPage";
import ArchivePage from "./ArchivePage";

function App() {
  const { loggedIn, logout } = useAuth();

  if (!loggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/tasks">Tasks</Link> | <Link to="/archive">Archive</Link> |{" "}
        <button onClick={logout}>Logout</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
