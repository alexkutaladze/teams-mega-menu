import { AddIcon, SearchIcon } from "@fluentui/react-icons-northstar";
import { Button, Flex, Input } from "@fluentui/react-northstar";
import React from "react";

const InputComponent = () => {
	return (
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
			<div style={{ width: 350 }}>
				<Input
					icon={<SearchIcon />}
					placeholder="Search for a navigation entry"
					fluid
				/>
			</div>
		</Flex>
	);
};

export default InputComponent;
