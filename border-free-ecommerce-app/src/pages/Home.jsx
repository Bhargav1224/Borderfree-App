import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Products from "../components/Products";

const Home = () => {
	return (
		<div>
			<Announcement />
			<Slider />
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
