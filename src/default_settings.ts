// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
// Interface
// ---------------------------------------------------------------------------------------------------------------------
export interface IColoredTagWranglerSettings {
    customTagColors: Record<string, { r: number, g: number, b: number }>;
    enableKanban:boolean;
}

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export const DEFAULT_SETTINGS: IColoredTagWranglerSettings = {
    customTagColors: {},
    enableKanban:false,
}
