import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Backlog from './Backlog';
import {connect} from 'react-redux';
import { getBacklog} from '../../actions/backlogActions';

export class ProjectBoard extends Component {
    //constructor to handle errors
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getBacklog(id);
    }
    render() {
        const {id} = this.props.match.params;
        const {project_tasks} = this.props.backlog;
        return (
           <div className="project_board">
               <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 mt-3">
                            <Link className="btn btn-info" to={`/add-project-task/${id}`}><i class="fas fa-plus-circle"></i> Create Project Task</Link>
                        </div>
    
                        <hr/>
                       
                    </div>

                    <Backlog project_tasks={project_tasks} />
                </div>
            </div>
        )
    }
}
ProjectBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    backlog: PropTypes.object.isRequired
}

const mapStateToProps= state => ({
    backlog: state.backlog
});

export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
