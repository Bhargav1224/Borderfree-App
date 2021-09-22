import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useHistory } from "react-router";
const Image = styled.img`
	width: 99%;
	height: 45%;
	${mobile({ width: "99%", height: "70%" })}
`;

const Button = styled.button`
	width: 10%;
	height: 40px;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-left: 20px;
	${mobile({ width: "50%", height: "40px" })}
`;

export const PagenotFound = () => {
	const history = useHistory();
	const handleHomePage = () => {
		history.push("/");
	};
	return (
		<div>
			<Image src="https://i.stack.imgur.com/V1fUu.png"></Image>
			<Button onClick={handleHomePage}>GoBack</Button>
		</div>
	);
};
