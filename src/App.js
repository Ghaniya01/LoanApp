import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { LogIn } from './Pages/logIn';
import { Dashboard } from './Pages/dashboard';
import { UserDetails } from './Pages/userdetails';
import { Signup } from './Pages/signup';

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
