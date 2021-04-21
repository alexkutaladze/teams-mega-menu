import { Header } from "@fluentui/react-northstar";
import React from "react";

const SettingsHeader = () => {
	return (
		<>
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
		</>
	);
};

export default SettingsHeader;
