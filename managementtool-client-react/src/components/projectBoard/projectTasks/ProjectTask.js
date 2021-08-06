import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export class ProjectTask extends Component {

    render() {

        const {project_task} = this.props;

        return (
            <Fragment>
                <div className="card mb-3">
                    <div className={`card-header text-light ${project_task.priority === 1 ? 'bg-danger':(project_task.priority === 2 )? 'bg-warning': 'bg-info'}`}>
                        <span className="me-md-auto float-start"><i class="fas fa-id-badge"></i> ID: { project_task.projectSequence} </span>
                        <span className="  float-end"> <i class="fas fa-exclamation-circle"></i> Priority: {project_task.priority === 1? "HIGH": (project_task.priority === 2)? "MEDIUM" : "LOW" }</span> 
                    </div>
                    <div className="card-body">
                        <div className={project_task.priority === 1 ? 'text-danger':(project_task.priority === 2 )? 'text-warning': 'text-info'}>
                            <h5 className="card-title">{project_task.summary}</h5>
                            <p className="card-text text-truncate pb-3">{project_task.acceptanceCriteria}</p>
                        </div>
                        <Link className="btn btn-primary float-start" to={`/edit-project-task/${project_task.projectIdentifier}/${project_task.projectSequence}`}>View/Update</Link>
                        <Link className="btn btn-danger float-end" to="">Delete</Link>
                    </div>

                </div>
            </Fragment>
            
        )
    }
}

export default ProjectTask
