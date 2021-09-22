import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const Home = () => {
	return (
		<div>
			<Announcement />
			<Slider />
			<Footer/>
		</div>
	);
};

export default Home;
