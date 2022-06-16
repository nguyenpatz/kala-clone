import React from "react";
import { useGlobalContext } from "../context";
import NewsItem from "./NewsItem";
const NewsTab = () => {
	const { minimal_news } = useGlobalContext();
	console.log(minimal_news);

	return (
		<div className="NewsTab-container">
			<div className="NewsTab-wrapper">
				<div className="NewsTab-action flex">
					<div>Tin mới nhất</div>
					<div>Tin tức nổi bật</div>
				</div>
				<div className="news flex">
					{minimal_news.map((item) => {

						return (
							<NewsItem key={item.id} {...item}/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default NewsTab;
