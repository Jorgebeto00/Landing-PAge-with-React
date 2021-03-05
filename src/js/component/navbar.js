import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container">
				<h3 className="text-light">Start Bootstrap</h3>

				<div className="d-flex justify-content-end">
					<a className="navbar-brand text-light" href="#">
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
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link active text-light"
									aria-current="page"
									href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
