// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {JqueryWrangler} from "./JqueryWrangler";
import $ from "jquery";
import {get_tags} from "../../../api/tags";
import {rgbToString} from "../../../api/ColorConverters";
import {IColoredTagWrangler} from "../../IColoredTagWrangler";

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export class JqueryWranglerNoteBackgrounds extends JqueryWrangler{
    // -----------------------------------------------------------------------------------------------------------------
    // Constructor
    // -----------------------------------------------------------------------------------------------------------------
    constructor(plugin:IColoredTagWrangler) {
        super(plugin);
    }
    // -----------------------------------------------------------------------------------------------------------------
    // Methods
    // -----------------------------------------------------------------------------------------------------------------
    assemble_styling(): void {
        const color_picker = this.plugin.settings.TagColors.ColorPicker;
        const enable_multiple_tags = this.plugin.settings.TagColors.EnableMultipleTags;
        const tags = get_tags(color_picker, enable_multiple_tags, false);

        tags.map(
            ({tag_name, background_color}) =>{
                const page = $('div.workspace-leaf-content[data-type="markdown"] div.view-content');
                const tag = page.find($(`div.multi-select-pill:has(span:contains("${tag_name}"))`));

                // noinspection JSUnresolvedReference
                if (tag.length !== 0) {
                    page.css('background-color', rgbToString(background_color))
                }
            }
        )
    }
    remove_styling(): void {
        const page = $('div.workspace-leaf-content[data-type="markdown"] div.view-content');
        page.removeAttr("style");
    }
}