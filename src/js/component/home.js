import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { Footer } from "./footer";

export function Home() {
	const [planets, setPlanets] = useState([]);
	// const [planets, setPlanets] = useState([]);
	// "Coffee",
	// "Tea",
	// "Soda",
	// "Water",
	// "OatMilk",

	useEffect(() => {
		fetch("https://swapi.co/api/planets/")
			.then(resp => resp.json())
			.then(data => {
				setPlanets(data);
				// console.log(data);
			});
	}, []);

	// useEffect(() => {
	//     fetch("https://swapi.co/api/planets/")
	//         .then(resp => resp.json())
	//         .then(data => {
	//             setPlanets(data);
	//             // console.log(data);
	//         });
	// }, []);

	return (
		<>
			<div className="row">
				{planets.results &&
					planets.results.map((item, index) => {
						return (
							<Card
								key={index}
								title={item.terrain}
								mate={item.image}
							/>
						);
					})}
			</div>
		</>
	);
}

// export function Home() {
// 	const [color, setColor] = useState("btn btn-info");
// 	const [drinks, setDrinks] = useState([]);
// 	// "Coffee",
// 	// "Tea",
// 	// "Soda",
// 	// "Water",
// 	// "OatMilk",

// 	return (
// 		<>
// 			{drinks.map((item, index) => {
// 				return (
// 					<Card
// 						key={index}
// 						title={item}
// 						mate={
// 							"https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2019/08/GRT-still-life-drinking-water-glass-1296x728-header-1296x728.jpg?w=1155&h=1528"
// 						}
// 						buttonColor={color}
// 						dUrl={"https://en.wikipedia.org/wiki/Water"}
// 					/>
// 				);
// 			})}
// 			<Footer />
// 		</>
// 	);
// }
