// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {Plugin} from "obsidian";
import {IPluginSettings} from "./settings/IPluginSettings";

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export interface IColoredTagWranglerPlugin extends Plugin{
	settings : IPluginSettings
}
