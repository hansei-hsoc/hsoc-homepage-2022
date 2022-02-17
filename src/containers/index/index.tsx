import type { NextPage } from "next";
import * as S from "./styled";

import LogoCardSVG from "src/assets/svg/logo-card.svg";
import { Button, HighlightText, Section } from "src/components";

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
						<Button>지원하러 가기 &nbsp;{">"}</Button>
					</div>

					<div>
						<LogoCardSVG />
					</div>
				</S.SectionContentContainer>
			</Section>
		</main>
	);
};

export default IndexPage;
