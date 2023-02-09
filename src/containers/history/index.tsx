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

const historyPage: NextPage = () => {
    return (
        <main style={{ width: "100%" }}>
            <Section>
                <S.SectionContentContainer>
                    <S.LogoBigImage src={LogoBig.src} />
                    <S.TitleText>
                        보안관제 동아리
                        <br />
                        <br />
                        <strong>활동 일지</strong>
                    </S.TitleText>
                </S.SectionContentContainer>
            </Section>
            <SectionTemplate
                isSecondary
                shortDescription="보안관제에서는 이런걸 해요!"
                ShortDescriptionTextSecondary=" 2022/3/14~2022/4/14"
                title={
                    <>
                        <strong>분야별 소개</strong>
                    </>
                }
                description={
                    <>
                        네트워크, 포렌식, 시스템, 암호학, 웹의 멘토들이 자신의 분야를 발표하며 자신의 분야에 대해 
                        <br />
                        알려주었어요. 이를 통해 보안에 대한 기본적인 분야들을 습득할 수 있었고, 각 분야가 
                        <br />
                        어떤식으로 운영되는지 알 수 있었어요.
                    </>
                }
            >
                <S.SectionImage src={MentorJPG.src} />
            </SectionTemplate>
            <SectionTemplate
                shortDescription="보안관제에서는 이런 걸 해요!"
                ShortDescriptionTextSecondary=" 2022/4/21~2022/6/27"
                title={
                    <>
                        <strong>분야별 멘토링</strong>
                    </>
                }
                description={
                    <>
                        분야별 멘토링을 통해 자신이 선택한 분야에 대해 선배들과 함께 공부하고, 문제를 풀어보며
                        <br />
                        실력을 키워나갔어요. 멘토님들의 피드백을 통해 자신의 실력을 더욱 키울 수 있었어요.
                    </>
                }
            >
                <S.TeacherSectionImage src="" images={[Contest1PNG.src, Contest2JPG.src, Contest3JPG.src]} />
            </SectionTemplate>
            <SectionTemplate
                isSecondary
                shortDescription="보안관제에만 있어요!"
                ShortDescriptionTextSecondary=" 2022/9/21~2022/11/27"
                title={
                    <>
                        <strong>교내/외 해킹 대회</strong>
                    </>
                }
                description={
                    <>
                        1학기때 쌓아온 실력을 바탕으로 대회에서 실제 문제를 출제해보고, 부원들끼리 풀어보는 
                        <br />
                        시간을 가졌어요. 
                        풀어보면서 서로가 서로의 문제를 봐주고, 피드백을 주고받는 시간을 가졌어요.
                        마지막으로 외부강사님이 오셔서 문제를
                        <br />
                        봐주시고, 피드백을 주시는 시간을 가졌어요.
                    </>
                }
            >
                <S.ContestPosterImagesWrapper>
                    {/*  */}
                    <S.ContestPosterImage src={SixthSecurityContestJPG.src} /> 
                    <S.ContestPosterImage src={SeventhSecurityContestJPG.src} />
                </S.ContestPosterImagesWrapper>
            </SectionTemplate>
            {/* <SectionTemplate
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
            </SectionTemplate> */}
        </main >
    );
};

export default historyPage;
