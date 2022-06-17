import React, { useRef, useState, useEffect } from "react";
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
	const [newBook, setNewBook] = useState([]);
	const [count, setCount] = useState(5);
	const valueWidth = useRef(null);

	let newItem = [];

	useEffect(() => {
		// console.log(valueWidth.current.getBoundingClientRect());
		const div = valueWidth.current;
		const rect = div.getBoundingClientRect();
		if(rect.width <= 800) {
			setCount(2);
		}
		
	}, []);

	useEffect(() => {
		let newArr = [];
		for(let i = 0; i < count; i++) {
			newArr.push(book[i]);
		}
		setNewBook([...newArr]);
	}, [count]);

	// console.log(newItem);
	for (let i = 0; i < count; i++) {
			newItem.push(book[i]);
		}

	return (
		<div className={`BooksCarousel`}>
			<div className="BooksCarousel-wrapper" ref={valueWidth}>
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
					{newBook.map((item) => {
						return <Book {...item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default BookCarousel;
