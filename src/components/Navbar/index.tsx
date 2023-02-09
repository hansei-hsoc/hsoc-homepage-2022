import React from "react";
import * as S from "./styled";

import LogoPNG from "src/assets/png/logo.png";
import Image from "next/image";
import Link from "next/link";

const navMenuList = [
	{
		href: "/qna",
		text: "Q&A",
	},{
		href: "/history",
		text: "관제 일지",
	},
	{
		href: "https://wargame.hsoc.kr",
		text: "워게임",
	},
];

export const Navbar: React.FC = () => {
	return (
		<S.NavbarWrapper>
			<S.NavbarContainer className="container">
				<Link href="/" passHref>
					<a>
						<Image src={LogoPNG.src} alt="보안관제 동아리 로고" width="55" height="55" />
					</a>
				</Link>

				<S.NavbarMenuList>
					{navMenuList.map((menu, i) => {
						return (
							<S.NavbarMenuItem key={i}>
								<Link href={menu.href}>{menu.text}</Link>
							</S.NavbarMenuItem>
						);
					})}
				</S.NavbarMenuList>
			</S.NavbarContainer>
		</S.NavbarWrapper>
	);
};
