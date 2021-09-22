import React from "react";
import "./Navbar.css";

export const Dots = ({ activeIndex, onclick, sliderImages }) => {
	return (
		<div className="all-dots">
			{sliderImages?.map((slide, index) => (
				<span
					key={index}
					className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
					onClick={() => onclick(index)}
				></span>
			))}
		</div>
	);
};