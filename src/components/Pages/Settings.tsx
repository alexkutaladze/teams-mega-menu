import React from "react";
import { Divider } from "@fluentui/react-northstar";
import AccordionComponent from "../Settings/SettingsAccordion";
import InputComponent from "../Settings/InputComponent";
import SettingsFooter from "../Settings/SettingsFooter";
import SettingsHeader from "../Settings/SettingsHeader";
import SettingsSiderbar from "../Settings/SettingsSiderbar";

const Settings = () => {
	return (
		<div className="settings-container">
			<div className="settings-sidebar">
				<SettingsSiderbar />
			</div>
			<div className="divider">
				<Divider vertical size={2} />
			</div>
			<div className="settings-main">
				<SettingsHeader />
				<InputComponent />
				<AccordionComponent />
				<SettingsFooter />
			</div>
		</div>
	);
};

export default Settings;
