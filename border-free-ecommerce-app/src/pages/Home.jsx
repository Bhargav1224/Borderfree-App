import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

const Home = () => {
	return (
		<div>
			<Announcement />
			<Slider />
			<Products />
			<Categories />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
