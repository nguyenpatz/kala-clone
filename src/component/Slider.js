import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import Slide from "./Slide";
const Slider = () => {
	const { slides } = useGlobalContext();

	// const getWidth = () => window.innerWidth;

	const [index, setIndex] = useState(0);
	const [translate, setTranslate] = useState(0);
	const [transition, setTransition] = useState(0.45);

	// const checkIndex = (index_value) => {
	// 	const lastIndex = slides.length - 1;
	// 	if (index_value > lastIndex) {
	// 		setIndex(0);
	// 	}
	// 	if (index_value < 0) {
	// 		setIndex(lastIndex);
	// 	}
	// };

	// useEffect(() => {
	// 	checkIndex();
	// }, [index]);

	// useEffect(() => {
	// const timeout = setTimeout(() => {
	// 	checkIndex(index);
	// }, 2000);
	// return () => clearTimeout(timeout);

	// }, [index]);

	// <div className="slider-container">
	// 		{slides.map((item) => {
	// 			const { id, url } = item;
	// 			return (
	// 				<div className="mySlides fade" key={id}>
	// 					<img src={url} alt="" />
	// 				</div>
	// 			);
	// 		})}
	// 	</div>

	useEffect(() => {
		const lastIndex = slides.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, slides]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);
		return () => clearInterval(slider);
	}, [index]);

	return (
		<div className="slider-container">
			{slides.map((item, slideIndex) => {
				return (
					<Slide
						{...item}
						key={item.id}
						index={index}
						slideIndex={slideIndex}
						setTranslate={setTranslate}
						translate={translate}
						transition={transition}
					/>
				);
			})}
		</div>
	);
};

export default Slider;
