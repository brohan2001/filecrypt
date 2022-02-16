import React from "react";
import { Layout, Icon } from "antd";
import FooterCSS from "./Footer.module.css";

const Footer = () => {
	return (
		<Layout.Footer className={FooterCSS.footer}>
			<div className={FooterCSS.footerContainer}>
				<p>
					Made by Srinil, Ali and Rohan.
				</p>
			</div>
		</Layout.Footer>
	);
};

export default Footer;
