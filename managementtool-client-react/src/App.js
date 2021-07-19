import './App.css';
import Dashboard  from './components/Dashboard';
import Header from './components/layouts/Header';
import AddProject from './components/project/AddProject';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
   <Router>
      <div className="App">
        <Header/>
        <Route exact path="/dashdash" component={Dashboard} />
        <Route exact path="/addProject" component={AddProject} />
    </div>
   </Router>
  );
}

export default App;
