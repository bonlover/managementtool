import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteProject } from '../../actions/projectActions';
class ProjectItem extends Component {
    onDeleteClick = id => {
        this.props.deleteProject(id);
    }

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
                                    <Link to={`/project-board/${project.projectIdentifier}`} className="text-decoration-none">
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
                                    
                                    <li className="list-group-item delete" onClick={ this.onDeleteClick.bind(this, project.projectIdentifier)}>
                                        <i className="fa fa-minus-circle pe-2"></i>
                                        <span>Delete Project</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ProjectItem.propTypes = {
    deleteProject: PropTypes.func.isRequired,
}

export default connect(null, {deleteProject}) (ProjectItem);
