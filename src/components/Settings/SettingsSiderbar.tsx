import React from "react";
import {
	Header,
	Divider,
	Flex,
	Avatar,
	Menu,
	OpenOutsideIcon,
} from "@fluentui/react-northstar";

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
				<Avatar name={"1"} />
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
				<Avatar name={"2"} />
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
