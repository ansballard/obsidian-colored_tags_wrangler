// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {IExtension} from "../../extensions/IExtension";
import {IColoredTagRecord} from "../../settings/IColoredTagRecord";

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------

export interface IExtensionsService {
	readonly Core: IExtension
	readonly Boldify: IExtension

	// -----------------------------------------------------------------------------------------------------------------
	// Methods
	// -----------------------------------------------------------------------------------------------------------------
	get FullList(): IExtension[]
	get EnabledList(): IExtension[]
	get Dictionary(): Record<string, IExtension>
	getDefaultRecord() : IColoredTagRecord

	EnableExtension(extension: IExtension): void
	DisableExtension(extension: IExtension): void
}
