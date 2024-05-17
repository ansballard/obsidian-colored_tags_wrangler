// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {TableContentPopulator} from "../ui/components/TableContentPopulator";
import {IExtensionRecord} from "./IExtensionRecord";
import {ICssWrangler} from "../services/css_styler/ICssWrangler";

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export interface IExtension {
	readonly TableContentPopulators: TableContentPopulator[];
	readonly extensionName: string;
	readonly cssWrangler : ICssWrangler;

	getDefaultRecord():IExtensionRecord;

}
