import './App.css';
import {Route, Link, Routes} from 'react-router-dom';
import Heading from './Heading';
import Card from './Card';

function App() {
  return (
    <div className = "App">
      <nav>
        <Link to="/" className="nav-item" >Homepage</Link>
        <Link to="card" className="nav-item" >Card</Link>
      </nav>
      <Routes>
        <Route path = "/" element= {<Heading/>}/>
        <Route path = "/card" element= {<Card/>}/>
      </Routes>
    </div>
  )
}

export default App;
