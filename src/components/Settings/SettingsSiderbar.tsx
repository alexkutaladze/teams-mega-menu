import React, { CSSProperties } from "react";
import {
	Header,
	Divider,
	Flex,
	Menu,
	OpenOutsideIcon,
	Text,
} from "@fluentui/react-northstar";

const avatarLabelStyle: CSSProperties = {
	color: "#fff",
	backgroundColor: "#6264a7",
	fontWeight: "bold",
	fontSize: 16,
	width: 32,
	height: 32,
	borderRadius: 32,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const settings1 = [
	{
		key: "step1",
		icon: <OpenOutsideIcon />,
		content: "Step 1",
	},
	{
		key: "step2",
		icon: <OpenOutsideIcon />,
		content: "Step 2",
	},
	{
		key: "step3",
		icon: <OpenOutsideIcon />,
		content: "Step 3",
	},
];

const settings2 = [
	{
		key: "licensing",
		icon: <OpenOutsideIcon />,
		content: "Licensing",
	},
	{
		key: "admins",
		icon: <OpenOutsideIcon />,
		content: "Administrators",
	},
];

const SettingsSiderbar = () => {
	return (
		<>
			<Header as="h2" style={{ fontWeight: 600 }} content="Settings" />
			<Divider size={2} />
			<Flex vAlign="center" gap="gap.medium">
				{/* I tried using <Avatar> here but with label only its default BG color is gray, 
				couldn't find a way to set it to MS Teams purple, so used a <Text> component instead */}
				<Text content="1" style={avatarLabelStyle} />
				<h3>Settings</h3>
			</Flex>
			<Menu
				items={settings1}
				vertical
				styles={{
					border: 0,
					paddingLeft: 15,
					width: "100%",
				}}
			/>
			<Flex vAlign="center" gap="gap.medium">
				<Text content="2" style={avatarLabelStyle} />
				<h3>Administration</h3>
			</Flex>
			<Menu
				items={settings2}
				vertical
				styles={{
					border: 0,
					paddingLeft: 15,
					width: "100%",
				}}
			/>
		</>
	);
};

export default SettingsSiderbar;
