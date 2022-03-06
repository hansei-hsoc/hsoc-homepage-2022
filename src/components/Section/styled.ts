import styled from "styled-components";

export const SectionContainer = styled.section<{ isSecondary?: boolean }>`
	padding: 170px 0;
	background-color: ${(props) => (props.isSecondary ? "#101116" : " #0E0F13")};

	@media screen and (max-width: 767px) {
		padding: 90px 0;
	}
`;
