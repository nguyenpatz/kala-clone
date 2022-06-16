import React from "react";
import { FaRegBell, FaPhoneAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="Header-wrapper flex items-center justify-between">
					<div className="Header-col"></div>
					<div className="Header-col flex items-center">
						<div className="Header-item flex items-center cursor-pointer">
							<div className="Header-item-icon">
								<div className="Icon flex justify-center items-center">
									<FaRegBell className="icon-bell" />
								</div>
							</div>
							<div className="Header-item-label">Thông báo</div>
						</div>
						<div className="Header-item flex items-center">
							<div className="Header-item-icon">
								<div className="Icon flex justify-center items-center">
									<BsTelephone className="icon-bell" />
								</div>
							</div>
							<div className="Header-item-label">
								Hotline: 1900 8654
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
