import React, { Component, Fragment } from 'react';
import ProjectTask from './projectTasks/ProjectTask';

export class Backlog extends Component {
    render() {
        const {project_tasks} = this.props;

        const tasks =  project_tasks.map( project_task => 
            <ProjectTask key={project_task.id} project_task={ project_task }  />
        );

        let todoItems = [];
        let inPrograssItems = [];
        let completedItems = [];

        for (let i = 0; i < tasks.length; i++) {
            // console.log(tasks[i]);

            if(tasks[i].props.project_task.status === 'TODO') {
                todoItems.push(tasks[i]);
            }
            if(tasks[i].props.project_task.status === 'inPrograss') {
                inPrograssItems.push(tasks[i]);
            }
            if(tasks[i].props.project_task.status === 'Completed') {
                completedItems.push(tasks[i]);
            }
        }
         
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-body bg-secondary">
                                <h3 className="text-center text-light">TODO</h3>
                            </div>                       
                        </div>
                        { todoItems }
                        
                    </div>                       
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-body bg-primary">
                                <h3 className="text-center text-light">Progress</h3>
                            </div>                       
                        </div>
                        { inPrograssItems }
         
                    </div>                       
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-body bg-success">
                                <h3 className="text-center text-light">COMPLETED</h3>
                            </div>                       
                        </div>

                        { completedItems }
                    </div>                       
                </div>
            </Fragment>
        )
    }
}

export default Backlog;
