import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Dashboard from "../pages/dashboard";
import "./App.scss";
import "../assets/scss/styles.scss"

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
