import React from 'react';
import {Link} from 'react-router-dom';

const CreateProjectButton = () => {
    return (
        <React.Fragment>
            <Link to="/add-project" className="btn btn-lg btn-info">
                <i className="fas fa-plus-circle"></i>
                &nbsp; Create a Project
            </Link>
        </React.Fragment>
       
    )
}

export default CreateProjectButton;

