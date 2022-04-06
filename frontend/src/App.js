import { HomePage } from "./HomePage/HomePage.tsx";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthPage } from "./AuthPage/AuthPage.tsx";
import { NavBar } from './NavBar/NavBar.tsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/auth" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router >
    // <HomePage />
  );
}

export default App;
