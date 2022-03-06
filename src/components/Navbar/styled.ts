import styled from "styled-components";

export const NavbarWrapper = styled.nav`
	position: sticky;
	top: 0;
	left: 0;

	backdrop-filter: blur(54px);
	background: linear-gradient(180deg, rgba(21, 21, 23, 0.7) 0%, rgba(21, 21, 23, 0) 100%);
	border: 2px solid rgba(13, 14, 18, 0.5);
	padding: 10px 0;
	z-index: 99;
`;

export const NavbarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavbarMenuList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	& > li:not(:last-child) {
		margin-right: 48px;
	}
`;

export const NavbarMenuItem = styled.li`
	font-size: 18px;
	font-weight: 400;
	float: left;

	&:hover {
		font-weight: 500;
		text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.39);
	}

	a {
		color: unset;
		text-decoration: none;
	}
`;
