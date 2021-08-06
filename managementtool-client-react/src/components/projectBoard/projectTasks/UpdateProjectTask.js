import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {getProjectTask, updateProjectTask} from '../../../actions/backlogActions';
import Moment from 'moment';


export class UpdateProjectTask extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            summary: "",
            acceptanceCriteria: "",
            projectSequence: "",
            dueDate: "",
            priority: 0,
            status: "",
            projectIdentifier:"",
            created_at: "",
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
        const updateProjectTask = {
            id:this.state.id,
            projectSequence: this.state.projectSequence,
            projectIdentifier: this.state.projectIdentifier,
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            dueDate: this.state.dueDate,
            priority: this.state.priority,
            status: this.state.status,
            created_at: this.state.created_at,
        };
        // console.log(updateProjectTask);
        this.props.updateProjectTask(this.state.projectIdentifier, this.state.projectSequence, updateProjectTask, this.props.history);
    }

    componentDidMount(){
        const {backlog_id, pt_id} = this.props.match.params;
        this.props.getProjectTask(backlog_id, pt_id, this.props.history)
    }
    //Life Cycle Hooks
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({ errors: nextProps.errors });
        }
        const {
            id,
            summary,
            acceptanceCriteria,
            dueDate,
            priority,
            status,
            projectIdentifier,
            projectSequence,
            created_at,
        } = nextProps.project_task;

        this.setState({ 
            id,
            summary,
            acceptanceCriteria,
            dueDate,
            priority,
            status,
            projectIdentifier,
            projectSequence,
            created_at,
        })
    }

    render() {
        // const {id} = this.props.match.params;
        const {errors} = this.state;
        return (
            <div className="project_board">
               <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 mt-3">
                            <Link className="btn btn-info" to={`/project-board/${this.state.projectIdentifier}`}><i class="fas fa-arrow-circle-left"></i> Back to Project Board</Link>
                        </div>
    
                        <hr/>
                       
                    </div>

                    <div className="row">
                       <div className="col-md-8 m-auto">
                           
                            <h2 className="text-center">Edit Project Task</h2>
                            <p className="text-center my-1 lead">
                                <span> <sub className="fw-lighter text-muted">(Project Identifier)</sub>{this.state.projectIdentifier}</span>&nbsp;+&nbsp;
                                <span>{this.state.projectSequence}<sub className="fw-lighter text-muted">(Project Task Sequence)</sub></span>
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
                                        className="form-control form-control-lg"
                                        placeholder="Acceptance Criteria Here" 
                                        name="acceptanceCriteria" 
                                        value={this.state.acceptanceCriteria}
                                        onChange={this.onChange}
                                    ></textarea>
                                </div>

                                <div className="form-group mb-2">
                                    <div className="input-group">
                                        <span className="input-group-text" id="due_date">Due Date</span>
                                        <input name="dueDate" 
                                            type="date" 
                                            format="MM-dd-yyyy"
                                            className="form-control" 
                                            aria-describedby="due_date"
                                            value={this.state.dueDate}
                                            onChange={this.onChange}
                                            
                                        />
                                        
                                    </div>
                                    {Moment(this.state.dueDate).format('L')}
                                </div>

                                <div className="form-group mb-2">
                                    <select name="priority" 
                                        className="form-select form-select-md priority"
                                        aria-label=".form-select-md priority"
                                        value={this.state.priority}
                                        onChange={this.onChange}
                                    >
                                        <option value="0">Select Priority</option>
                                        <option value="1">HIGH</option>
                                        <option value="2">MEDIUM</option>
                                        <option value="3">LOW</option>
                                    </select>
                                </div>

                                <div className="form-group mb-2">
                                    <select name="status" 
                                        className="form-select form-select-md status"
                                        aria-label=".form-select-md status"
                                        value={this.state.status}
                                        onChange={this.onChange}
                                    >
                                        <option value="0">Select Status</option>
                                        <option value="TODO">TODO</option>
                                        <option value="inPrograss">In Prograss</option>
                                        <option value="Completed">Completed</option>
                                    </select>
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
UpdateProjectTask.propTypes = {
    getProjectTask: PropTypes.func.isRequired,
    updateProjectTask: PropTypes.func.isRequired,
    project_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    project_task: state.backlog.project_task,
    errors:state.errors

});

export default connect(mapStateToProps, {getProjectTask, updateProjectTask})(UpdateProjectTask)
