import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Main from '../../Views/Main';
import AboutMe from '../../Views/AboutMe';

import '../../styles/NavBar.css';

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Brand Name</a>
					</div>
					<div className="collapse navbar-collapse navbar-ex1-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li><NavLink to="/">Home</NavLink></li>
							<li><NavLink to="/Aboutme">About Me</NavLink></li>
						</ul>
					</div>

				</div>
			</nav>
			<div className="content">
				<Switch>
					<Route exact path='/' component={Main} />
					<Route path="/AboutMe" component={AboutMe} />
				</Switch>
			</div>
		</div>
	);
};

export default NavBar;