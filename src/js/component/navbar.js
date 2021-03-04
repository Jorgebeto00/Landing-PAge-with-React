import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<h3>Start Bootstrap</h3>
					</div>
					<div className="col d-flex justify-content-right">
						<a className="navbar-brand" href="#">
							Home
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#">
										About
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Services
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
