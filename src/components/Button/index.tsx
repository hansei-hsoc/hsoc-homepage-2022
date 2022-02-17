import React from "react";
import * as S from "./styled";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
	return <S.ButtonElement {...props} />;
};
