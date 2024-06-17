// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import { IColoredTagRecord } from "src/contracts/plugin/settings/IColoredTagRecord";
import {ICssWrangler} from "../../../contracts/plugin/services/css_styler/ICssWrangler";
import {rgbaToString} from "../../../lib/ColorConverters";
import {RGBA} from "../../../contracts/types/RGBA";
import {ServiceProvider} from "../../services/ServiceProvider";
import {themeSelectorDark, themeSelectorLight} from "../../services/css_styler/CssStylerService";

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------

export class CoreCssWrangler implements ICssWrangler {
	// -----------------------------------------------------------------------------------------------------------------
	// Methods
	// -----------------------------------------------------------------------------------------------------------------
	private _properties(record:IColoredTagRecord):Record<string, string> {
		return {
			"color" : `${rgbaToString(record.core_color_foreground)} !important`,
			"background" : `${rgbaToString(record.core_color_background)} !important`,
		}
	}

	private _selectors(theme:string, record:IColoredTagRecord):string[]{
		return [
			`${theme} .tag[href="#${record.core_tagText}" i]`,
			`${theme} .cm-tag-${record.core_tagText}`,
		]
	}

	getRules(): Record<string, Record<string, string>> {
		const dict : Record<string, Record<string, string>> = {};

		ServiceProvider.tagRecords
			.getTagsFlat(false)
			.filter(record => record.core_enabled)
			.forEach(record => {
				this._selectors(themeSelectorLight, record)
					.forEach((rule) => {
						dict[rule] = this._properties(record)
					})
				this._selectors(themeSelectorDark, record)
					.forEach((rule) => {
						dict[rule] = this._properties(record)
					})
				}
			)
		return dict
	}
}
