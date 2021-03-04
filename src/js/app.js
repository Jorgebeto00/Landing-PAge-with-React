import React from "react";
import { Home } from "./component/home.js";
import { Navbar } from "./component/navbar.js";

export const App = () => {
	return (
		<div>
			<Navbar />

			<Home />
		</div>
	);
};
