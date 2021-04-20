import ReactMegaMenu from "react-mega-menu";
import React from "react";
import Panels from "./Panels";

const data = [
	{
		label: "Sub Menu Item 1",
		key: 1,
		items: Panels(1),
	},
	{
		label: "Sub Menu Item 2",
		key: 2,
		items: Panels(2),
	},
	{
		label: "Sub Menu Item 3",
		key: 3,
		items: Panels(3),
	},
	{
		label: "Sub Menu Item 4",
		key: 4,
		items: Panels(4),
	},
];

interface MegaMenuProps {
	position: number;
	direction?: "LEFT" | "RIGHT";
	onExit: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ position, onExit }) => {
	const MegaMenuStyleConfig = {
		containerProps: {
			style: {
				backgroundColor: "rgb(237, 235, 233)",
				marginLeft: position,
				height: 600,
			},
		},
		menuItemProps: {
			style: {
				fontSize: 18,
				padding: 10,
				width: 200,
			},
		},
		menuItemSelectedProps: {
			style: {
				backgroundColor: "#fff",
				fontSize: 18,
				padding: 10,
			},
		},
		contentProps: {
			style: {
				backgroundColor: "#fff",
				padding: 10,
				width: 400,
			},
		},
	};

	return (
		<ReactMegaMenu
			tolerance={100} // optional, defaults to 100
			direction={"RIGHT"} // optional, defaults to "RIGHT", takes in "RIGHT" || "LEFT"
			styleConfig={MegaMenuStyleConfig}
			data={data} // array of data to be rendered
			onExit={onExit}
		/>
	);
};

export default MegaMenu;
