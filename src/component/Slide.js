import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Slide = ({ id, url, index,slideIndex, setTranslate, setTransition, transition, translate }) => {
	// console.log(url);

	const { slides } = useGlobalContext();

	// const getWidth = () => window.innerWidth;

	let position = "nextSlide";
	// setTranslate(()=>{return (index + 1)*getWidth()});
	// console.log(translate);

	if (index === slideIndex) {
		position = "activeSlide";
	}

	if (slideIndex === index - 1 || (index === 0 && slideIndex === slides.length - 1)) {
		position = "lastSlide";
	}

	return (
		<div className={`mySlides fade ${position}`} 
		style={{
		transition:`${transition}`}}
		key={id}>
			<img src={url} alt="" />
		</div>
	);
};

export default Slide;
