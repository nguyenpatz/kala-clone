import React, { useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useGlobalContext } from "../context";
import Book from "./Book";
const BookCarousel = ({ book, name }) => {
	// const { paper } = useGlobalContext();
	// <div className="container">
	// 			<div className="BooksCarousel-wrapper">
	// 				<div className="BooksCarousel-header flex items-center justify-between">
	// 					<div className="BooksCarousel-title">
	// 						Sách giấy
	// 					</div>
	// 					<div className="BooksCarousel-header-col flex items-center">
	// 						<div className="Button BooksCarousel-see-more primary-transparent show-arrow radius">
	// 							<button type="button" className="ant-btn ant-btn-default">
	// 								<span>Xem thêm</span>
	// 							</button>
	// 						</div>

	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>

	const [screenWidth, setScreenWidth] = useState();
	const valueWidth = useRef();

	let newItem = [];
	for (let i = 0; i < book.length - 1; i++) {
		newItem.push(book[i]);
	}
	return (
		<div className={`BooksCarousel`}>
			<div className="BooksCarousel-wrapper">
				<div className="BooksCarousel-header flex justify-between items-center">
					<div className="BooksCarousel-header-col">
						<div className="BooksCarousel-title">{name}</div>
					</div>
					<div className="BooksCaroursel-header-col flex items-center">
						<div className="BooksCarousel-see-more">
							<button
								className="Button flex ant-btn"
								type="button"
							>
								<span>Xem thêm</span>
							</button>
						</div>
						<div className="BooksCarousel-arrow">
							<button>
								<AiOutlineArrowLeft />
							</button>
							<button>
								<AiOutlineArrowRight />
							</button>
						</div>
					</div>
				</div>
				{/*	book paper list*/}
				<div className="BooksList flex">
					{newItem.map((item) => {
						return <Book {...item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default BookCarousel;
