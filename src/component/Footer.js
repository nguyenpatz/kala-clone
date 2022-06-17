import React from "react";
import { useGlobalContext } from "../context";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
	const { logo } = useGlobalContext();

	return (
		<div className="footer">
			<div className="container flex justify-between">
				<div className="footer-logo footer-col col1 flex flex-column">
					<div className="footer-logo-img">
						<img src={logo} alt="" />
					</div>
					<div className="footer-logo-info">
						<span>
							GPKD số 10001

							
						</span>
						<br />
						<span>Cấp ngày 20/10/2020</span>
					</div>
					<div className="footer-logo-info">
						<IoLocationOutline />
						<span>
							Nhà sách Kala, Phố Sách Hà Nội, 19/12 Lý Thường
							Kiệt, Phường Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội
						</span>
					</div>
					<div className="footer-logo-info">
						<BsTelephone />
						<span>Hotline: 0943 19 6633</span>
					</div>
					<div className="footer-logo-info">
						<AiOutlineMail />{" "}
						<span>Email: support@kalabooks.vn</span>
					</div>
				</div>
				<div className="footer-info footer-col col2 flex flex-column">
					<div className="footer-info-title">
						<h2>Thông tin</h2>
					</div>
					<div className="footer-info-link ">
						<Link to="gioi-thieu">Giới thiệu</Link>
						<Link to="tin-tuc">Tin tức</Link>
						<Link to="dieu-khoan-chinh-sach">
							Điều khoản chính sách
						</Link>
					</div>
				</div>
				<div className="footer-app footer-col col3">
					<div className="footer-app-title">
						<h2>TẢI APP ĐỂ NHẬN ƯU ĐÃI</h2>
					</div>
					<div className="footer-app-image flex">
						<div className="footer-img img1">
							<img
								src="https://api.kalabooks.com/static/1654756828651ctfqrrr.png/high"
								alt=""
								className="qr"
							/>
						</div>
						<div className="footer-img img2">
							<div>
								<div>
									<img
										src="data:image/png;base64,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"
										alt=""
									/>
								</div>
								<div>
									<img
										src="data:image/png;base64,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"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
