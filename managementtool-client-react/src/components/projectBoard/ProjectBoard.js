import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export class ProjectBoard extends Component {

    render() {
        const {id} = this.props.match.params;
        return (
           <div className="project_board">
               <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 mt-3">
                            <Link className="btn btn-info" to={`/add-project-task/${id}`}><i class="fas fa-plus-circle"></i> Create Project Task</Link>
                        </div>
    
                        <hr/>
                       
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <div className="card-body bg-secondary">
                                    <h3 className="text-center">TODO</h3>
                                </div>                       
                            </div>
                            
                            <div className="card mb-3">
                                <div className="card-header bg-danger text-white">
                                    <span className="me-md-auto float-start"><i class="fas fa-id-badge"></i> ID: PROJ12 </span>
                                    <span className="  float-end"><i class="fas fa-exclamation-circle"></i> Priority: HIGH </span>
                                </div>
                                <div className="card-body">
                                    <p className="text-danger">Project Summary</p>
                                    <Link className="btn btn-primary float-start" to="">View/Update</Link>
                                    <Link className="btn btn-danger float-end" to="">Delete</Link>
                                </div>

                            </div>
                        </div>                       
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <div className="card-body bg-primary">
                                    <h3 className="text-center">Progress</h3>
                                </div>                       
                            </div>

                            <div className="card mb-3">
                                <div className="card-header bg-warning text-white">
                                    <span className="me-md-auto float-start"><i class="fas fa-id-badge"></i> ID: PROJ12 </span>
                                    <span className="  float-end"><i class="fas fa-exclamation-circle"></i> Priority: MEDIUM </span>
                                </div>
                                <div className="card-body">
                                    <p className="text-warning">Project Summary</p>
                                    <Link className="btn btn-primary float-start" to="">View/Update</Link>
                                    <Link className="btn btn-danger float-end" to="">Delete</Link>
                                </div>

                            </div>
                        </div>                       
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <div className="card-body bg-success">
                                    <h3 className="text-center">COMPLETED</h3>
                                </div>                       
                            </div>

                            <div className="card mb-3">
                                <div className="card-header bg-info text-white">
                                    <span className="me-md-auto float-start"><i class="fas fa-id-badge"></i> ID: PROJ12 </span>
                                    <span className="  float-end"> <i class="fas fa-exclamation-circle"></i> Priority: LOW </span>
                                </div>
                                <div className="card-body">
                                    <p className="text-info">Project Summary</p>
                                    <Link className="btn btn-primary float-start" to="">View/Update</Link>
                                    <Link className="btn btn-danger float-end" to="">Delete</Link>
                                </div>

                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectBoard
