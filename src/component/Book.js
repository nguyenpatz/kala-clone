import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
const Book = ({ id, img_front, img_back, name, price, sale, author }) => {
	return (
		<div className="BookBlock flip-card">
			<div className="BookBlock-image">
				<div className="BookBlock-image-front">
					<img src={img_front} alt="" />
				</div>
			</div>
			<div className="BookBlock-title">{name}</div>
			<div className="BookBlock-author">{author}</div>
			<div className="BookBlock-price">
				<del>{price} đ</del>
				<span>{sale} đ</span>
			</div>
			<div className="BookBlock-action flex justify-between items-center">
				<div className="Button BookBlock-icon">
					<button className="flex justify-center items-center">
						<MdOutlineShoppingBag className="shopping"/>
					</button>
				</div>
				<div className="Button BookBlock-outline">
					<button type="button">
						<span>Mua ngay</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Book;
