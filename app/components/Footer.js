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
						<FooterLink href="#">About Us</FooterLink>
						<FooterLink href="#">News</FooterLink>
						<FooterLink href="#">Services</FooterLink>
						<FooterLink href="#">Messagerie</FooterLink>
						<FooterLink href="#">Feedback</FooterLink>
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
