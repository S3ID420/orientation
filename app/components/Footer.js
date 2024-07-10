import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
	Paragraph,
	ContactPhrase,
	SocialMediaContainer,
	SocialIcon,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>Orientini</Heading>
						<Paragraph>
							We are committed to providing the best services and resources to help you succeed.
						</Paragraph>
					</Column>
					<Column>
						<Heading>Links</Heading>
						<FooterLink href="AboutUs">About Us</FooterLink>
						<FooterLink href="News">News</FooterLink>
						<FooterLink href="ser">Services</FooterLink>
						<FooterLink href="Contact">Messagerie</FooterLink>
						<FooterLink href="FeedBack">Feedback</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<ContactPhrase>
							Feel free to reach out to us through our social media channels!
						</ContactPhrase>
						<SocialMediaContainer>
							<FooterLink href="#">
								<SocialIcon src="/facebook-icon.png" alt="Facebook" />
							</FooterLink>
							<FooterLink href="#">
								<SocialIcon src="/twitter-icon.png" alt="Twitter" />
							</FooterLink>
							<FooterLink href="#">
								<SocialIcon src="/instagram-icon.png" alt="Instagram" />
							</FooterLink>
						</SocialMediaContainer>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};

export default Footer;
