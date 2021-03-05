import React from "react";
import { Home } from "./component/home.js";
import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

export const App = () => {
	return (
		<>
			<Navbar />
			<Home />
			<Footer />
		</>
	);
};
