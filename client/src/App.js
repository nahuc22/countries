import { Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { Detail , Form , Home , Landing } from './views';
import NavBar from './components/NavBar/NavBar';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getQuery } from "./redux/actions";

function App() {
  const location = useLocation();

  const dispatch = useDispatch(); // VER ESTO
  function onSearch(name) {
    axios
      .get(`http://localhost:3001/countries?name=${name}`)
      .then(({ data }) => {
        console.log(data)
        const countryName = data.length ? data[0].name : null;
        dispatch(getQuery(countryName));
      })
      .catch((error) => {
        console.error(error);
        return alert("El Pais No Existe");
      });
  }

  
  return (
    <div>
      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
    <Route exact path="/" component= {Landing}/>
    <Route exact path="/home" render= { ()=> <Home/>}/>
    <Route exact path="/create" render= { ()=> <Form/>}/>
    <Route exact path="/detail" render= { ()=> <Detail/>}/>
    </div>
  );
}

export default App;
