import React from "react";
import { BlogCard, Events, Feature, HeroSection } from "../../components";

const Home = () => {
	return (
		<div>
			<HeroSection />
			<Feature />
			<BlogCard />
			<Events />
		</div>
	);
};

export default Home;
