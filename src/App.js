import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { LogIn } from './pages/LogIn';
import { Dashboard } from './pages/Dashboard';
import { UserDetails } from './pages/UserDetails';
import { Signup } from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path='/signup' element= {<Signup/>}/>
            <Route path="/login" element={<LogIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/userpage" element={<UserDetails />}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
