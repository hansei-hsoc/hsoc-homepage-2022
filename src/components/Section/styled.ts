import styled from "styled-components";

export const SectionContainer = styled.section<{ isSecondary?: boolean }>`
	padding: 142px 0;
	background-color: ${(props) => (props.isSecondary ? "#101116" : " #0E0F13")};
`;
