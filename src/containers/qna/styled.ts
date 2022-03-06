import styled from "styled-components";

export const LogoBigImage = styled.div<{ src: string }>`
	width: 150px;
	height: 150px;
	margin-bottom: 20px;
	opacity: 0.9;
	background-size: cover;
	background-image: url(${(props) => props.src});
	filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.25));
`;

export const SectionContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const TitleText = styled.p`
	color: white;
	font-size: 40px;
	font-weight: 200;
	line-height: 40px;
	text-align: center;

	strong {
		font-weight: 700;
	}

	@media screen and (max-width: 991px) {
		font-size: 34px;
		line-height: 45px;
	}

	@media screen and (max-width: 575px) {
		font-size: 30px;
		line-height: 39px;
	}
`;

export const QuestionsContainer = styled.div`
	& > div:not(:last-child) {
		margin-bottom: 40px;
	}
`;

export const QuestionContainer = styled.div<{ isOpen: boolean }>`
	width: 100%;
	font-size: 20px;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

	& > button {
		border-radius: ${(props) => (props.isOpen ? "10px 10px 0 0" : "10px")};
	}
`;

export const QuestionButton = styled.button`
	border: none;
	outline: none;
	width: 100%;
	padding: 25px 30px;

	text-align: left;
	color: white;
	font-weight: 500;
	letter-spacing: -0.055em;
	background-color: #1b1d26;
`;

export const AnswerContainer = styled.div`
	font-weight: 400;
	padding: 30px;
	background-color: #1b1d26;
	line-height: 30px;
	border-radius: 0 0 10px 10px;
`;
