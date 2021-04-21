import React, { useState } from "react";
import { Menu } from "@fluentui/react-northstar";
import { MenuIcon, MoreIcon } from "@fluentui/react-icons-northstar";
import MegaMenu from "../MegaMenu/MegaMenu";

const MenuExampleWithIcons = () => {
	const [megaMenuActive, setMegaMenuActive] = useState(false);
	const [megaMenuPosition, setMegaMenuPosition] = useState(0);
	const activateMegaMenu = (index: number) => {
		setMegaMenuActive(true);
		setMegaMenuPosition(52 + (index - 1) * 111);
	};

	const items = [
		{
			icon: <MenuIcon />,
			key: "menu",
		},
		{
			content: "Menuitem 1",
			key: "item1",
			onMouseEnter: () => {
				activateMegaMenu(1);
			},
		},
		{
			content: "Menuitem 2",
			key: "item2",
			onMouseEnter: () => {
				activateMegaMenu(2);
			},
		},
		{
			content: "Menuitem 3",
			key: "item3",
			onMouseEnter: () => {
				activateMegaMenu(3);
			},
		},
		{
			content: "Menuitem 4",
			key: "item4",
			onMouseEnter: () => {
				activateMegaMenu(4);
			},
		},
		{
			content: "Menuitem 5",
			key: "item5",
			onMouseEnter: () => {
				activateMegaMenu(5);
			},
		},
		{
			icon: <MoreIcon />,
			key: "more",
		},
	];

	return (
		<>
			<Menu defaultActiveIndex={0} items={items} color="brand" />
			{megaMenuActive && (
				<MegaMenu
					position={megaMenuPosition}
					onExit={() => setMegaMenuActive(false)}
				/>
			)}
		</>
	);
};

export default MenuExampleWithIcons;
