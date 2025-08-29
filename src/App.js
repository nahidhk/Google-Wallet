import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from './components/Login';

function App() {
  return (
  <div>
    {/* Login Page system  */}
    <Login />

    <Nav />
  </div>
  );
}

export default App;
