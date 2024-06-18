// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {Setting, SettingTab} from "obsidian";
import {IExtension} from "../../../../../contracts/plugin/extensions/IExtension";
import {ServiceProvider} from "../../../../services/ServiceProvider";
import {capitalizeFirstLetter} from "../../../../../lib/StringUtils";
import {IExtensionRecord} from "../../../../../contracts/plugin/extensions/IExtensionRecord";

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export class SettingExtensionSelector {
	private parent: SettingTab;

	// private settingEl: Setting;
	private masterEl: HTMLElement;
	private gridContainerEl: HTMLElement;

	// -----------------------------------------------------------------------------------------------------------------
	// Constructor
	// -----------------------------------------------------------------------------------------------------------------
	constructor(parent: SettingTab) {
		this.parent = parent;
		this._AssignEls()
	}

	// -----------------------------------------------------------------------------------------------------------------
	// Helper Methods
	// -----------------------------------------------------------------------------------------------------------------
	private _AssignEls() {
		// this.settingEl = new Setting(this.parent.containerEl)
		this.masterEl = this.parent.containerEl.createDiv();
		this.masterEl.addClass("extension-selector");

		this.gridContainerEl = this.masterEl.createDiv();
		this.gridContainerEl.addClass("grid-container");
	}

	private createExtensionGridItem(extension: IExtension<IExtensionRecord>): HTMLElement {
		const gridItem = new Setting(document.createElement('div'))
			.setClass('grid-item')
			.setName(capitalizeFirstLetter(extension.extensionName))
			.setDesc(extension.description)
			.addToggle(cb => {
				cb.setValue(extension.isEnabled)
				cb.onChange(value => {
					extension.isEnabled = value;
					ServiceProvider.cssStyler.processExtensions() // This is so we can update all the styling when something changes

					this.parent.display() // Redraw entire settings
				})
			})
		return gridItem.settingEl;
	}

	// -----------------------------------------------------------------------------------------------------------------
	// Methods
	// -----------------------------------------------------------------------------------------------------------------
	public async display(): Promise<void> {
		for (const iExtension of ServiceProvider.extensions.FullList) {
			const el = this.createExtensionGridItem(iExtension)
			this.gridContainerEl.appendChild(el)
		}
	}
}
