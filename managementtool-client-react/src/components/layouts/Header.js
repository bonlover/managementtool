import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/dashboard">PP Management Tool</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNav" >
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="mobileNav">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<Link className="nav-link active"  to="/dashboard">Dashboard</Link>
							</li>
							
							<li className="nav-item">
								<Link className="nav-link" to="#">Project</Link>
							</li>
						</ul>
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<Link className="nav-link" to="#">Sign Up</Link>
							</li>
							
							<li className="nav-item">
								<Link className="nav-link" to="#">Sign In</Link>
							</li>
							
							<li className="nav-item dropdown d-none">
								<Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									<span>UserName</span> 
								</Link>
								
								<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li><Link className="dropdown-item" to="#">Profile</Link></li>
									<li><Link className="dropdown-item" to="#">Logout</Link></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}
export default Header
