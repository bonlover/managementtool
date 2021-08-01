import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {createProject} from '../../actions/projectActions';

export class AddProject extends Component {
    constructor() {
        super();

        this.state = {
            projectName: "",
            projectIdentifier: "",
            description:"",
            start_date: "",
            end_date: "",
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e){
        e.preventDefault();
        const newProject = {
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_date:this.state.start_date,
            end_date:this.state.end_date
        }
        this.props.createProjectTask(newProject, this.props.history);
    }

    //Life Cycle Hooks
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({ errors: nextProps.errors });
        }
    }
    render() {
        const { errors} = this.state;
        return (
            <div className="add-project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h2 className="text-center fw-bolder mt-4">Create Project form</h2>
                            <hr />
                            <form onSubmit={this.onSubmit} className="mt-4">
                                <div className="form-group mb-2">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg ", {"is-invalid":errors.projectName})} 
                                        placeholder="Project Name" 
                                        name="projectName" 
                                        value={this.state.projectName}
                                        onChange={this.onChange}
                                    />
                                    {errors.projectName && (
                                        <div className="invalid-feedback">{errors.projectName}</div>
                                    )}
                                </div>
                                <div className="form-group mb-2">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {"is-invalid":errors.projectIdentifier})} 
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier" 
                                        value={this.state.projectIdentifier}
                                        onChange={this.onChange}

                                    />
                                   { errors.projectIdentifier && (
                                       <div className="invalid-feedback">{errors.projectIdentifier}</div>
                                   )}

                                </div>
                                {
                                // <!-- disabled for Edit Only!! remove "disabled" for the Create operation -->
                                }
                                <div className="form-group mb-2">
                                    <textarea 
                                        className={classnames("form-control form-control-lg", {"is-invalid":errors.description})} 
                                        placeholder="Project Description" 
                                        name="description" 
                                        value={this.state.description}
                                        onChange={this.onChange}

                                    ></textarea>
                                    { errors.description && (
                                       <div className="invalid-feedback">{errors.description}</div>
                                   )}
                                </div>

                                <div className="form-group mb-2">
                                    <div class="input-group">
                                        <span class="input-group-text" id="start_date">Start Date</span>
                                        <input type="date" 
                                            class="form-control form-control-lg" 
                                            aria-describedby="start_date" 
                                            name="start_date" 
                                            value={this.state.start_date}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-2">
                                    <div class="input-group">
                                        <span class="input-group-text" id="end_date">&nbsp;End Date&nbsp;</span>
                                        <input type="date" 
                                            class="form-control form-control-lg" 
                                            aria-describedby="end_date" 
                                            name="end_date" 
                                            value={this.state.end_date}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>

                                <div className="d-grid mt-3">
                                    <input type="submit" className="btn btn-primary" />
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AddProject.propTypes = {
    createProject : PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, { createProject})(AddProject);
