import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Heading = styled.h1`
	text-align: center;
	color: teal;
	font-weight: 600;
	margin-top: 10px;
`;

const Products = () => {
	return (
		<>
			<Heading>Products</Heading>
			<Container>
				{popularProducts.map((item) => (
					<Product item={item} key={item.id} />
				))}
			</Container>
		</>
	);
};

export default Products;
