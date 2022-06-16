import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
const logo = "https://api.kalabooks.com/static/1654755954240logo.png/high";

const HeaderSearch = () => {
	return (
		<div className="HeaderSearch ">
			<div className="container flex justify-center">
				<div className="HeaderSearch-wrapper flex items-center justify-center">
					<div className="HeaderSearch-logo">
						<Link to="/">
							<img src={logo} className="logo" alt="logo" />
						</Link>
					</div>
					<form className="ant-form ant-form-horizontal HeaderSearch-search flex items-center">
						<div className="Input">
							<input
								type="text"
								placeholder="Tìm kiếm"
								className="ant-input"
							/>
						</div>
						<div className="Button only-icon">
							<button
								type="submit"
								className="ant-btn ant-btn-primary"
							>
								<div className="Button-icon">
									<div className="Icon flex justify-center items-center">
										<AiOutlineSearch className="icon-search"/>
									</div>
								</div>
							</button>
						</div>
					</form>
					<div className="HeaderSearch-account flex items-center">
						<div className="HeaderSearch-account-link">Đăng ký</div>
						/
						<div className="HeaderSearch-account-link">
							Đăng nhập
						</div>
					</div>
					<div className="DropdownCustom">
						<div className="ant-dropdown-trigger DropdownCustom-body">
							<div className="HeaderSearch-cart">
								<div className="Icon flex justify-center items-center">
									<MdOutlineShoppingBag className="icon-"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderSearch;
