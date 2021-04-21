import React from "react";
import { Accordion, Text } from "@fluentui/react-northstar";

const AccordionComponent = () => {
	const subPanel = [
		{
			title: "Sub Navigation Item 1",
			content: 1,
		},
		{
			title: "Sub Navigation Item 2",
			content: (
				<Accordion
					panels={[
						{ title: "Sub Sub Navigation Item 1", content: 1 },
					]}
					style={{ paddingLeft: 20 }}
				/>
			),
		},
	];

	const panels = [
		{
			title: (
				<Text content="Navigation Item 1" style={{ paddingLeft: 5 }} />
			),
			content: (
				<Accordion panels={subPanel} style={{ paddingLeft: 20 }} />
			),
		},
		{
			title: (
				<Text content="Navigation Item 2" style={{ paddingLeft: 5 }} />
			),
			content: 2,
		},
		{
			title: (
				<Text content="Navigation Item 3" style={{ paddingLeft: 5 }} />
			),
			content: 3,
		},
		{
			title: (
				<Text content="Navigation Item 4" style={{ paddingLeft: 5 }} />
			),
			content: 4,
		},
		{
			title: (
				<Text content="Navigation Item 5" style={{ paddingLeft: 5 }} />
			),
			content: 5,
		},
		{
			title: (
				<Text content="Navigation Item 6" style={{ paddingLeft: 5 }} />
			),
			content: 6,
		},
	];
	return (
		<Accordion
			panels={panels}
			style={{
				paddingLeft: 10,
				color: "#666",
				outline: "none",
			}}
			exclusive
		/>
	);
};

export default AccordionComponent;
