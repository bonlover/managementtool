import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Backlog from './Backlog';
import {connect} from 'react-redux';
import { getBacklog} from '../../actions/backlogActions';

export class ProjectBoard extends Component {
    //constructor to handle errors
    constructor() {
        super();
        this.state = {
            errors:{}
        };
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getBacklog(id);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    
    render() {
        const {id} = this.props.match.params;
        const {project_tasks} = this.props.backlog;
        const {errors} = this.state;

        let BoardContent;

        const boardAlgorithm = (errors, project_tasks) => {
            if(project_tasks.length < 1) {
                if(errors.projectNotFound){
                    return (
                        <div className="alert alert-danger text-center" role="alert">
                            <h2>{errors.projectNotFound}</h2>
                        </div>
                    );
                }
                else {
                    return (
                        <div className="alert alert-info text-center" role="alert">
                            <h2> No Project Tasks found on this Board</h2>
                        </div>
                    );
                }
            }
            else{
                return (
                    <Backlog project_tasks={project_tasks} />
                );
            }
        };

        BoardContent = boardAlgorithm(errors, project_tasks);

        return (
           <div className="project_board">
               <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 mt-3">
                            <Link className="btn btn-info" to={`/add-project-task/${id}`}><i class="fas fa-plus-circle"></i> Create Project Task</Link>
                        </div>
    
                        <hr/>
                       
                    </div>
                    { BoardContent }
                </div>
            </div>
        )
    }
}
ProjectBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    backlog: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps= state => ({
    backlog: state.backlog,
    errors: state.errors,
});

export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
