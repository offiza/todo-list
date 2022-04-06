import { HomePage } from "./HomePage/HomePage.tsx";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthPage } from "./AuthPage/AuthPage.tsx";

function App() {
  return (
    <Router>
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
