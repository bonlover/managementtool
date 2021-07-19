import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/dashdash">PP Management Tool</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNav" >
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="mobileNav">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/dashdash">Dashboard</a>
							</li>
							
							<li className="nav-item">
								<a className="nav-link" href="#">Project</a>
							</li>
						</ul>
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link" href="#">Sign Up</a>
							</li>
							
							<li className="nav-item">
								<a className="nav-link" href="#">Sign In</a>
							</li>
							
							<li className="nav-item dropdown d-none">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									<span>UserName</span> 
								</a>
								
								<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li><a className="dropdown-item" href="#">Profile</a></li>
									<li><a className="dropdown-item" href="#">Logout</a></li>
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
