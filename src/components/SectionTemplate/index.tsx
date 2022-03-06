import React from "react";
import * as S from "./styled";
import { Section } from "..";
import Link from "next/link";

import RightArrowSVG from "src/assets/svg/right-arrow.svg";
import { useScrollFadeIn } from "src/hooks/useScrollFaedIn";

interface SectionTemplateProps {
	isSecondary?: boolean;
	shortDescription: string | React.ReactNode;
	title: string | React.ReactNode;
	description: string | React.ReactNode;
	links?: { text: string; href: string }[];
}

export const SectionTemplate: React.FC<SectionTemplateProps> = ({ isSecondary, shortDescription, title, description, links, children }) => {
	const animatedItem = useScrollFadeIn<HTMLDivElement>("up", 0.5);

	return (
		<Section isSecondary={isSecondary}>
			<S.SectionContentContainer isSecondary={isSecondary} {...animatedItem}>
				<div>
					<S.ShortDescriptionText>{shortDescription}</S.ShortDescriptionText>
					<S.TitleText>{title}</S.TitleText>
					<S.DescriptionText>{description}</S.DescriptionText>
					<S.LinksContainer>
						{links?.map((v, i) => {
							return (
								<Link key={i} href={v.href}>
									<a style={{ display: "flex" }}>
										<S.ShortDescriptionText style={{ marginRight: "3px", fontWeight: 500, fontSize: "14px" }}>{v.text}</S.ShortDescriptionText>
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
