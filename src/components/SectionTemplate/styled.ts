import styled from "styled-components";

export const SectionContentContainer = styled.div<{ isSecondary?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: ${(props) => (props.isSecondary ? " row-reverse" : "row")};

	div > p {
		text-align: ${(props) => (props.isSecondary ? "right" : "left")};
	}

	div {
		div:nth-child(4) {
			justify-content: ${(props) => (props.isSecondary ? " flex-end" : "flex-start")};
			//flex-direction:
		}
	}
`;

export const SortDescriptionText = styled.p`
	color: var(--color-primary);
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 7px;
`;

export const TitleText = styled.p`
	color: white;
	font-size: 40px;
	font-weight: 200;
	line-height: 50px;

	strong {
		font-weight: 700;
	}
`;

export const DescriptionText = styled.p`
	color: #b1b3ba;
	font-size: 18px;
	font-weight: 400;
	line-height: 22.54px;
	margin: 25px 0;
`;

export const LinksContainer = styled.div`
	display: flex;
	align-items: center;

	a {
		text-decoration: none;
		margin-right: 20px;
	}

	a:last-child {
		margin-right: 0;
	}
`;
