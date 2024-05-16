// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {RecordExtensionBoldify} from "../../../plugin/extensions/boldify/boldify";
import {RecordExtensionCore} from "../../../plugin/extensions/core/core";

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export interface IColoredTagRecord extends
	RecordExtensionCore,
	RecordExtensionBoldify
{}


export type BooleanProperties = "core_enabled"

	// Add extension enablers
	| "boldify_enabled"

export type TextAreaProperties = "core_tagText";

export type RGBSelectorProperties = "core_color_foreground" | "core_color_background";
