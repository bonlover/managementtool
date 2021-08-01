import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {getProject, createProject} from '../../actions/projectActions';


 class UpdateProject extends Component {
     // Set state
     constructor(){
         super();

         this.state = {
             id:"",
             projectName: "",
             projectIdentifier: "",
             description: "",
             start_date: "",
             end_date: "",
             errors: {},
         };
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }

     componentWillReceiveProps(nextProps){
         if(nextProps.errors){
             this.setState({errors: nextProps.errors});
         }
         const {
            id,
            projectName,
            projectIdentifier,
            description,
            start_date,
            end_date
         } = nextProps.project;

         this.setState({ 
            id,
            projectName,
            projectIdentifier,
            description,
            start_date,
            end_date    
         })
     }

     componentDidMount() {
         const {id } = this.props.match.params;
         this.props.getProject(id, this.props.history);
     }
     onChange(e){
         this.setState({[e.target.name]: e.target.value})
     }

     onSubmit(e){
         e.preventDefault();

         const updateProject = {
            id: this.state.id,
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_date: this.state.start_date,
            end_date: this.state.end_date
         };

         this.props.createProject(updateProject, this.props.history);
     }
    render() {
        const { errors} = this.state;

        return (
            <div className="update_project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="text-center">Update Project form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
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
                                        disabled 
                                        value={this.state.projectIdentifier}

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
                                <h6>Start Date</h6>
                                <div className="form-group mb-2">
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="start_date" 
                                        value={this.state.start_date}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group mb-2">
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        name="end_date" 
                                        value={this.state.end_date} 
                                        onChange={this.onChange}
                                        />
                                </div>
                                <div className="d-grid">
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

UpdateProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    // project: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    project: state.project.project,
    errors: state.errors
})

export default connect(mapStateToProps, {getProject, createProject})(UpdateProject);
