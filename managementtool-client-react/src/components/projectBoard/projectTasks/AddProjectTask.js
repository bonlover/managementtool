import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {createProjectTask} from '../../../actions/backlogActions';

export class AddProjectTask extends Component {

    constructor(props) {
        super(props);
        const {id} = this.props.match.params;

        this.state = {
            summary: "",
            acceptanceCriteria: "",
            dueDate: "",
            priority: 0,
            status: "",
            projectIdentifier: id,
            errors: {}

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        const newProjectTask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            dueDate: this.state.dueDate,
            priority: this.state.priority,
            status: this.state.status
        };
        console.log(newProjectTask);
        this.props.createProjectTask(this.state.projectIdentifier, newProjectTask, this.props.history);
    }
     //Life Cycle Hooks
     componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        const {id} = this.props.match.params;
        const {errors} = this.state;
        return (
            <div className="project_board">
               <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 mt-3">
                            <Link className="btn btn-info" to={`/project_board/${id}`}><i class="fas fa-arrow-circle-left"></i> Back to Project Board</Link>
                        </div>
    
                        <hr/>
                       
                    </div>

                    <div className="row">
                       <div className="col-md-8 m-auto">
                           
                            <h2 className="text-center">Add Project Task</h2>
                            <p className="text-center my-1 lead">
                                <span>ProjectName</span>&nbsp;+&nbsp;
                                <span>project Code</span>
                            </p>
                            <hr />
                            <form onSubmit={this.onSubmit} className="mt-4">
                                <div className="form-group mb-2">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {"is-invalid":errors.summary}) }
                                        placeholder="Summary here" 
                                        name="summary" 
                                        value={this.state.summary}
                                        onChange={this.onChange}
                                    />
                                    {errors.summary && (
                                        <div className="invalid-feedback">{errors.summary}</div>
                                    )}
                                </div>

                                <div className="form-group mb-2">
                                    <textarea 
                                        className={classnames("form-control form-control-lg", {"is-invalid":errors.acceptanceCriteria})}
                                        placeholder="Acceptance Criteria Here" 
                                        name="acceptanceCriteria" 
                                        value={this.state.acceptanceCriteria}
                                        onChange={this.onChange}
                                    ></textarea>
                                    {errors.acceptanceCriteria && (
                                        <div className="invalid-feedback">{errors.acceptanceCriteria}</div>
                                    )}
                                </div>

                                <div className="form-group mb-2">
                                    <div className={classnames("input-group", {"is_invalid":errors.dueDate})}>
                                        <span className="input-group-text" id="due_date">Due Date</span>
                                        <input name="dueDate" 
                                            type="date" 
                                            className="form-control" aria-describedby="due_date"
                                            value={this.state.dueDate}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    {errors.dueDate && (
                                        <div className="invalid-feedback">{errors.dueDate}</div>
                                    )}
                                </div>

                                <div className="form-group mb-2">
                                    <select name="priority" 
                                        className={classnames("form-select form-select-md priority", {"is_invalid": errors.priority})} 
                                        aria-label=".form-select-md priority"
                                        value={this.state.priority}
                                        onChange={this.onChange}
                                    >
                                        <option value="0">Select Priority</option>
                                        <option value="1">HIGH</option>
                                        <option value="2">MEDIUM</option>
                                        <option value="3">LOW</option>
                                    </select>
                                    {errors.priority && (
                                        <div className="invalid-feedback">{errors.priority}</div>
                                    )}
                                </div>

                                <div className="form-group mb-2">
                                    <select name="status" 
                                        className={classnames("form-select form-select-md status", {"is_invalid": errors.status} )}
                                        aria-label=".form-select-md status"
                                        value={this.state.status}
                                        onChange={this.onChange}
                                    >
                                        <option value="0">Select Status</option>
                                        <option value="TODO">TODO</option>
                                        <option value="inPrograss">In Prograss</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                    {errors.status && (
                                        <div className="invalid-feedback">{errors.status}</div>
                                    )}
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
AddProjectTask.propTypes = {
    createProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    errors: state.errors

});

export default connect(mapStateToProps, {createProjectTask})(AddProjectTask)
