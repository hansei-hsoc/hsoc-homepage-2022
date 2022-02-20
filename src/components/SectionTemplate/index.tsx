import React from "react";
import * as S from "./styled";
import { Section, SectionProps } from "..";
import Link from "next/link";

import RightArrowSVG from "src/assets/svg/right-arrow.svg";

interface SectionTemplateProps {
	isSecondary?: boolean;
	sortDescription: string | React.ReactNode;
	title: string | React.ReactNode;
	description: string | React.ReactNode;
	links?: { text: string; href: string }[];
}

export const SectionTemplate: React.FC<SectionTemplateProps> = ({ isSecondary, sortDescription, title, description, links, children }) => {
	return (
		<Section isSecondary={isSecondary}>
			<S.SectionContentContainer isSecondary={isSecondary}>
				<div>
					<S.SortDescriptionText>{sortDescription}</S.SortDescriptionText>
					<S.TitleText>{title}</S.TitleText>
					<S.DescriptionText>{description}</S.DescriptionText>
					<S.LinksContainer>
						{links?.map((v, i) => {
							return (
								<Link key={i} href={v}>
									<a style={{ display: "flex" }}>
										<S.SortDescriptionText style={{ marginRight: "3px", fontWeight: 400 }}>{v.text}</S.SortDescriptionText>
										<RightArrowSVG />
									</a>
								</Link>
							);
						})}
					</S.LinksContainer>
				</div>
				<div>{children}</div>
			</S.SectionContentContainer>
		</Section>
	);
};
