import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// --- Static Components ---
const Home = () => <div className="p-4"><h2>Home Page</h2><p>Welcome to our site!</p></div>;
const About = () => <div className="p-4"><h2>About Us</h2><p>We are a React-driven team.</p></div>;

// --- Dynamic Component ---
const ProductDetail = () => {
  const { id } = useParams(); // Hook to grab the dynamic ID from the URL
  return (
    <div className="p-4 border mt-3">
      <h2>Product Details</h2>
      <p>Displaying information for Product ID: <strong>{id}</strong></p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand" to="/">RouterApp</Link>
        <div className="navbar-nav">
          {/* Static Links */}
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          
          {/* Dynamic Link Examples */}
          <Link className="nav-link text-info" to="/product/101">Laptop (ID 101)</Link>
          <Link className="nav-link text-info" to="/product/202">Phone (ID 202)</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Dynamic Route: ":id" is a placeholder for any value */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
