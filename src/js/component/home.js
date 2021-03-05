import React from "react";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Jumbotron />
			<div className="row">
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
			</div>
		</div>
	);
}
