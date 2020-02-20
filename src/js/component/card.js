import React from "react";
import { PropTypes } from "prop-types";

// these are notes for creating a dynamic card component.
export function Card(props) {
	return (
		<div className="card col center" style={{ width: "300px" }}>
			<img
				className="card-img-top"
				src={props.mate}
				alt="Card image cap"
			/>
			<div className="card-body text-center">
				<h5 className="card-title"> {props.title} </h5>
				<p className="card-text">
					Water is the best drink out of the list. Do you agree.
				</p>
				<button>
					<a href={props.dUrl} className={props.buttonColor}>
						{/* className={"btn btn-" + props.buttonColor}> */}
						Click Me
					</a>
				</button>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	mate: PropTypes.string,
	dUrl: PropTypes.string,
	buttonColor: PropTypes.string
};
