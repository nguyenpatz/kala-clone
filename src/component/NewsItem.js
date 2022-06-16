import React from "react";

const NewsItem = ({ id, img, title, content, date }) => {
	return (
		<div className="newsItem flex">
			<div className="newsItem-img">
				<img src={img} alt="" />
			</div>
			<div className="newsItem-info">
				<div className="newsItem-title">
					<div>{title}</div>
				</div>
				<div className="newsItem-content">
					<div>{content}</div>
				</div>
				<div className="newsItem-date flex">
					<div>{date}</div>
					<div>
						<div>Xem chi tiết ></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
