import { Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { Detail , Form , Home , Landing } from './views';
import NavBar from './components/NavBar/NavBar/NavBar';

function App() {
  const location = useLocation();
  
  return (
    <div>
      {location.pathname !== "/" && <NavBar/>}
    <Route exact path="/" component= {Landing}/>
    <Route path="/home" render= { ()=> <Home/>}/>
    <Route exact path="/create" render= { ()=> <Form/>}/>
    <Route exact path="/detail" render= { ()=> <Detail/>}/>
    </div>
  );
}

export default App;
