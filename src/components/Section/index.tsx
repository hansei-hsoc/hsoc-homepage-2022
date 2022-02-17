import React from "react";
import * as S from "./styled";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	isSecondary?: boolean;
}

export const Section: React.FC<SectionProps> = ({ className, children, ...props }) => {
	return (
		<S.SectionContainer {...props}>
			<div className="container">{children}</div>
		</S.SectionContainer>
	);
};
