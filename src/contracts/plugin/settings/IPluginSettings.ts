// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {IColoredTagRecord} from "./IColoredTagRecord";
import {ISettingExtensions} from "./ISettingExtensions";
import {ISettingInfo} from "./ISettingInfo";

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export interface IPluginSettings {
	TagColors: IColoredTagRecord[],
	Extensions: ISettingExtensions,

	Info: ISettingInfo
}
