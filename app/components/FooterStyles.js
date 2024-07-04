'use client'
import styled from "styled-components";

export const Box = styled.div`
	padding: 5% 2.5%;
	background-color: #F9F9FF;
	width: 100%;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-center; 
	max-width: 1200px;
	margin: auto; 
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-right: 50px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: 2fr 0.75fr 2fr; /* Allocate more space to the first column */
	grid-gap: 40px; /* Increase gap between columns */
	width: 100%;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`;

export const FooterLink = styled.a`
	color: #6c757d; /* muted color */
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
	transition: transform 200ms ease-in;

	&:hover {
		color: blue;
		transform: translateY(-3px);
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: black;
	margin-bottom: 40px;
	font-weight: bold;
`;

export const Paragraph = styled.p`
	font-size: 20px;
	color: #6c757d; /* muted color */
	margin-bottom: 40px;
	width: 100%; /* Adjust to fit the paragraph in 2 lines */
`;

export const ContactPhrase = styled.p`
	font-size: 20px;
	color: #6c757d; /* muted color */
	margin-bottom: 40px;
	width: 100%;
`;

export const SocialMediaContainer = styled.div`
	display: flex;
	justify-content: flex-end; /* Align icons to the right */
	margin-top: 20px;
	width: 100%;
`;

export const SocialIcon = styled.img`
	width: 40px; /* Make icons slightly bigger */
	height: 40px;
	margin-left: 20px;
	cursor: pointer;

	&:hover {
		transform: scale(1.2);
		transition: 200ms ease-in;
	}
`;
