import React from 'react';
import Header from "./Header";
import HeaderSearch from "./HeaderSearch";
const HeaderContainer = () => {
	return (
		<div className="header-container">
			<Header />
			<HeaderSearch />
		</div>
	);
}

export default HeaderContainer;