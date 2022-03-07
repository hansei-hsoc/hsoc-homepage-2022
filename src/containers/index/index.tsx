import type { NextPage } from "next";
import * as S from "./styled";
import { Button, HighlightText, Section, SectionTemplate } from "src/components";
import LogoBig from "src/assets/png/logo-big.png";
import SixthSecurityContestJPG from "src/assets/png/6th-security-contest.jpg";
import SeventhSecurityContestJPG from "src/assets/png/7th-security-contest.jpg";
import ServerRoom1JPG from "src/assets/png/server-room-1.jpg";
import ServerRoom2JPG from "src/assets/png/server-room-2.jpg";
import ServerRoom3JPG from "src/assets/png/server-room-3.jpg";
import ServerRoom4JPG from "src/assets/png/server-room-4.jpg";
import Contest1PNG from "src/assets/png/contest-1.png";
import Contest2JPG from "src/assets/png/contest-2.jpg";
import Contest3JPG from "src/assets/png/contest-3.jpg";
import MentorJPG from "src/assets/png/mentor.jpg";
import Link from "next/link";

const IndexPage: NextPage = () => {
	return (
		<main style={{ width: "100%" }}>
			<Section>
				<S.SectionContentContainer>
					<div>
						<HighlightText>Hello, 2022!</HighlightText>
						<S.Title>
							보안관제 동아리
							<br />
							신입 부원 모집 중
						</S.Title>
						<S.RecruitmentDateText>2022. 03. 03 ~ 2022. 04. 01</S.RecruitmentDateText>
						<Link href="https://form.typeform.com/to/cIzGmf7t" passHref>
							<a target="_blank">
								<Button>지원하러 가기 &nbsp;{">"}</Button>
							</a>
						</Link>
					</div>

					<div>
						<S.LogoBigImage src={LogoBig.src} />
					</div>
				</S.SectionContentContainer>
			</Section>
			<SectionTemplate
				isSecondary
				shortDescription="보안관제에서는 이런 걸 해요!"
				title={
					<>
						선배들과 함께하는
						<br />
						<strong>교내 전공 수업, 멘토링</strong>
					</>
				}
				description={
					<>
						부족한 전공 지식을 선배들과 함께 공부하며,
						<br />
						각자 선택한 전공 기술과 여러 프로그램들을 멘토링을 통해 배워요
					</>
				}
			>
				<S.SectionImage src={MentorJPG.src} />
			</SectionTemplate>
			<SectionTemplate
				shortDescription="보안관제에서는 이런 걸 해요!"
				title={
					<>
						외부 강사님과 함께하는
						<br />
						<strong>1팀 1기업 프로젝트</strong>
					</>
				}
				description={
					<>
						외부 강사님을 초빙해 새로운 보안 이슈와
						<br />
						기술들을 배우며 강사님과 함께 대회 문제들을 출제해요
					</>
				}
			>
				<S.TeacherSectionImage src="" images={[Contest1PNG.src, Contest2JPG.src, Contest3JPG.src]} />
			</SectionTemplate>
			<SectionTemplate
				isSecondary
				shortDescription="보안관제에만 있어요!"
				title={
					<>
						교내 유일 교내/외
						<br />
						<strong>해킹 대회 운영</strong>
					</>
				}
				description={
					<>
						보안관제 동아리는 교내 동아리 중 유일하게
						<br />
						7년째 교내/외 해킹 대회를 매년 각각 1회 운영하고 있어요
					</>
				}
				links={[{ text: "관련 뉴스 기사", href: "https://www.boannews.com/media/view.asp?idx=102431" }]}
			>
				<S.ContestPosterImagesWrapper>
					<S.ContestPosterImage src={SixthSecurityContestJPG.src} />
					<S.ContestPosterImage src={SeventhSecurityContestJPG.src} />
				</S.ContestPosterImagesWrapper>
			</SectionTemplate>
			<SectionTemplate
				shortDescription="보안관제에만 있어요!"
				title={
					<>
						국내 최초 특성화고
						<br />
						<strong>보안관제센터</strong>
					</>
				}
				description={
					<>
						여러 기업과 마포구청, 교육청의 지원을 받아
						<br />
						국내 최초 특성화고에 보안관제센터를 구축했어요
					</>
				}
			>
				<S.ServerRoomSectionImage src="" images={[ServerRoom1JPG.src, ServerRoom2JPG.src, ServerRoom3JPG.src, ServerRoom4JPG.src]} />
			</SectionTemplate>
		</main>
	);
};

export default IndexPage;
