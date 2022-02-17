import React from "react";
import * as S from "./styeld";

export const HighlightText: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	return <S.HighlightTextContainer {...props} />;
};
