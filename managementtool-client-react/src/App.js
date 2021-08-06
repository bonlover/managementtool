import './App.css';
import Dashboard  from './components/Dashboard';
import Header from './components/layouts/Header';
import AddProject from './components/project/AddProject';
import UpdateProject from './components/project/UpdateProject';
import ProjectBoard from './components/projectBoard/ProjectBoard';
import AddProjectTask from './components/projectBoard/projectTasks/AddProjectTask';
import UpdateProjectTask from './components/projectBoard/projectTasks/UpdateProjectTask';
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
					<Route exact path="/edit-project-task/:backlog_id/:pt_id" component={UpdateProjectTask} />
				</div>
      		</Router>
    	</Provider>
  	);
}

export default App;
