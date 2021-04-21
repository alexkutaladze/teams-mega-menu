import {
	AddIcon,
	Avatar,
	Button,
	Divider,
	Flex,
	Header,
	Input,
	Menu,
	OpenOutsideIcon,
	SearchIcon,
} from "@fluentui/react-northstar";
import React from "react";
import AccordionComponent from "./Settings/Accordion";

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

const Settings = () => {
	return (
		<div className="settings-container">
			<div className="settings-sidebar">
				<Header
					as="h2"
					style={{ fontWeight: 600 }}
					content="Settings"
				/>
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
			</div>
			<div className="divider">
				<Divider vertical size={2} />
			</div>
			<div className="settings-main">
				<Header
					as="h2"
					content="Configure Navigation"
					style={{ fontSize: 20, paddingTop: 20, paddingBottom: 10 }}
					description={{
						content: "Mega menu can be configured here",
						style: {
							fontSize: 18,
						},
					}}
				/>
				<Header
					as="h3"
					content="Add Navigation entries"
					style={{
						fontWeight: 600,
						paddingBottom: 10,
					}}
					description={{
						content:
							"Here's an example of how a sections can be used to group inputs",
						style: {
							fontSize: 18,
						},
					}}
				/>
				<Flex gap="gap.small" style={{ paddingBottom: 30 }}>
					<Button
						icon={<AddIcon />}
						content="Add entry"
						iconPosition="before"
						primary
						size="smaller"
						style={{
							borderRadius: 4,
						}}
					/>
					<Input
						icon={<SearchIcon />}
						placeholder="Search for a navigation entry..."
					/>
				</Flex>
				<AccordionComponent />
				<Flex gap="gap.small" hAlign="end">
					<Button content="Discard" style={{ borderRadius: 4 }} />
					<Button
						content="Save"
						primary
						style={{ borderRadius: 4 }}
					/>
				</Flex>
			</div>
		</div>
	);
};

export default Settings;
