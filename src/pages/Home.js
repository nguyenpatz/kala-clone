import React from "react";
import Slider from "../component/Slider";
import BookCarousel from "../component/BookCarousel";
import NewsTab from "../component/NewsTab";
import { useGlobalContext } from "../context";

const Home = () => {
	const { paper, ebook } = useGlobalContext();

	return (
		<div className="home-container">
			<Slider />
			<BookCarousel book={paper} name={"Sách Giấy"} />
			<BookCarousel book={ebook} name={"Ebook"} />
			<NewsTab />
		</div>
	);
};

export default Home;
