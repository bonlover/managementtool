import './App.css';
import Dashboard  from './components/Dashboard';
import Header from './components/layouts/Header';
import AddProject from './components/project/AddProject';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  	return (
    	<Provider store={store}>
      		<Router>
				<div className="App">
					<Header/>
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/addProject" component={AddProject} />
				</div>
      		</Router>
    	</Provider>
  	);
}

export default App;
