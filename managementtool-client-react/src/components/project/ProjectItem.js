import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProjectItem extends Component {
    render() {
        const { project } = this.props;
        return (
            <div className="project-item">
                <div className="container">
                    <div className="card card-body bg-light mb-3">
                        <div className="row">
                            <div className="col-2">
                                <span className="mx-auto">{project.projectIdentifier}</span>
                            </div>
                            <div className="col-lg-6 col-md-4 col-8">
                                <h3>{project.projectName}</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="col-md-4 d-none d-lg-block">
                                <ul className="list-group">
                                    <Link to="#" className="text-decoration-none">
                                        <li className="list-group-item board">
                                            <i className="fa fa-flag-checkered pe-2"></i>
                                            <span>Project Board </span>
                                        </li>
                                    </Link>
                                    <Link to={`update-project/${project.projectIdentifier}`} className="text-decoration-none">
                                        <li className="list-group-item update">
                                            <i className="fa fa-edit pe-2"></i>
                                            <span className="">Update Project Info</span>
                                        </li>
                                    </Link>
                                    <Link to="" className="text-decoration-none">
                                        <li className="list-group-item delete">
                                            <i className="fa fa-minus-circle pe-2"></i>
                                            <span>Delete Project</span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectItem;
