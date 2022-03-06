import type { NextPage } from "next";
import * as S from "./styled";

import LogoBig from "src/assets/png/logo-big.png";
import { Section } from "src/components";
import { useState } from "react";

const questions = [
	{
		question: "보안관제는 어떤 동아리 인가요?",
		answer: "해킹 대회 문제를 학습 및 연구하며 교내/외 대회 문제를 출제하고 개최하는 동아리에요",
	},
	{
		question: "전공 지식이 없어도 괜찮은가요?",
		answer: "전공 지식이 부족하거나 없더라도 선배님들과의 멘토링을 통해 천천히 배워 나가실 수 있어요",
	},
	{
		question: "모집 분야는 어떻게 되나요?",
		answer: "모집 분야는 웹, 포렌식, 네트워크, 시스템, 암호학 총 5가지의 분야로 구성되어있으며, 각 분야마다 최소 1명 이상의 멘토를 담당해주실 선배님이 계셔요",
	},
	{
		question: "동아리에서는 주로 어떤 활동을 하나요?",
		answer: "선배들과 함께하는 전공 수업과 멘토링, 외부 강사님과 함께하는 1팀 1기업 프로젝트, 그리고 교내/외 해킹 대회 운영 등 다양한 활동들이 준비되어 있어요!",
	},
	{
		question: "모집 인원은 몇 명인가요?",
		answer: "모집 인원 미정이에요 (언제든 열려있으니, 많은 관심과 지원 부탁드려요!)",
	},
];

const QnAPage: NextPage = () => {
	const [showList, setShowList] = useState(questions.map((v) => false));

	return (
		<main style={{ width: "100%" }}>
			<Section>
				<S.SectionContentContainer>
					<S.LogoBigImage src={LogoBig.src} />
					<S.TitleText>
						보안관제 동아리
						<br />
						<strong>Q & A</strong>
					</S.TitleText>
				</S.SectionContentContainer>
			</Section>
			<Section isSecondary>
				<S.QuestionsContainer>
					{questions.map((v, i) => {
						return (
							<S.QuestionContainer key={i} isOpen={showList[i]} onClick={(e) => setShowList((prev) => ({ ...prev, [i]: !prev[i] }))}>
								<S.QuestionButton>Q. {v.question}</S.QuestionButton>

								{showList[i] && (
									<S.AnswerContainer>
										<p>A. {v.answer}</p>
									</S.AnswerContainer>
								)}
							</S.QuestionContainer>
						);
					})}
				</S.QuestionsContainer>
			</Section>
		</main>
	);
};

export default QnAPage;
