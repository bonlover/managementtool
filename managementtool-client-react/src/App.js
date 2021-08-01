import './App.css';
import Dashboard  from './components/Dashboard';
import Header from './components/layouts/Header';
import AddProject from './components/project/AddProject';
import UpdateProject from './components/project/UpdateProject';
import ProjectBoard from './components/projectBoard/ProjectBoard';
import AddProjectTask from './components/projectBoard/projectTasks/AddProjectTask';
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
					<Route exact path="/add-project" component={AddProject} />
					<Route exact path="/update-project/:id" component={UpdateProject} />
					<Route exact path="/project-board/:id" component={ProjectBoard} />
					<Route exact path="/add-project-task/:id" component={AddProjectTask} />
				</div>
      		</Router>
    	</Provider>
  	);
}

export default App;
