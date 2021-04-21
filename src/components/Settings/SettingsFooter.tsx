import { Flex, Button } from "@fluentui/react-northstar";
import React from "react";

const SettingsFooter = () => {
	return (
		<Flex
			gap="gap.small"
			hAlign="end"
			style={{ position: "absolute", right: 20, bottom: 70 }}
		>
			<Button content="Discard" style={{ borderRadius: 4 }} />
			<Button content="Save" primary style={{ borderRadius: 4 }} />
		</Flex>
	);
};

export default SettingsFooter;
