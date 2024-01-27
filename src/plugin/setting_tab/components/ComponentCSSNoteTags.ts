// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {Setting} from "obsidian";
import {SettingsTabComponent} from "src/plugin/setting_tab/SettingsTabComponent";
// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export class ComponentCSSNoteTags extends SettingsTabComponent{
	public create_component(containerEL:HTMLElement): void {
		new Setting(containerEL)
			.setName("Apply Tag colors in notes")
			.setDesc("Uses a tag set in the note's property Tags.")
			.addToggle(component => {
					component
						.setValue(this.plugin.settings.CSS.NoteTags)
						.onChange(async state => {
							this.plugin.settings.CSS.NoteTags = state;
							await this.plugin.saveSettings();
						})
				}
			);
	}
}



