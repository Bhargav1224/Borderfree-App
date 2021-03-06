import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import { Dots } from "./Dots";

const len = sliderItems.length - 1;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	${mobile({ width: "100%", height: "100vh" })}
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	color: black;
	opacity: 0.5;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	cursor: pointer;
	transform: translateX(${(props) => props.activeIndex * -100}vw);
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
`;

const Image = styled.img`
	height: 80%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;

const Desc = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

const Slider = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		//every 5sec the images are moved one after another
		var interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
		}, 5000);

		//unmounting phase
		return () => {
			clearInterval(interval);
		};
		// eslint-disable-next-line
	}, [activeIndex]);

	return (
		<Container>
			<Arrow
				direction="left"
				onClick={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
			>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper activeIndex={activeIndex}>
				{sliderItems?.map((item) => (
					<Slide bg={item.bg} key={item.id}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Dots
				activeIndex={activeIndex}
				sliderImages={sliderItems}
				onclick={(activeIndex) => setActiveIndex(activeIndex)}
			/>
			<Arrow
				direction="right"
				onClick={() =>
					setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
				}
			>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
