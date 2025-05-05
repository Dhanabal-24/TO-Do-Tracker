import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import TaskPage from './TaskPage';
import ArchivePage from './ArchivePage';
import LoginPage from './LoginPage';
import { useAuth } from './AuthContext';

function App() {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link> |{' '}
        <Link to="/tasks">Tasks</Link> |{' '}
        <Link to="/archive">Archive</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
