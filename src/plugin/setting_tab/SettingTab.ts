// ---------------------------------------------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------------------------------------------
import {PluginSettingTab}
    from "obsidian";
import ColoredTagWranglerPlugin
    from "src/main";
import {
	ComponentCSSNoteBackground, ComponentCSSNoteProperties,
	ComponentCSSNoteTags,
	ComponentCSSTagsNoWrap,
	ComponentDebug,
	ComponentDebugReloadCSS,
	ComponentDebugExperimentalCommands,
	ComponentFolderNote,
	ComponentFolderNoteAutoDetect,
	ComponentFolderNoteDetect,
	ComponentFolderNoteFolderTagLinks,
	ComponentKanban,
	ComponentKanbanCards,
	ComponentKanbanHideHashtags,
	ComponentKanbanLists,
	ComponentTags,
	ComponentTagsCanvas,
	ComponentTagsEnableBackgroundOpacity,
	ComponentTagsEnableDarkLightDifference,
	ComponentTagsEnableMultipleTags,
	ComponentTagsEnableSeparateBackground,
	ComponentTagsEnableSeparateLuminance,
} from "src/plugin/setting_tab/components";
import {SettingsTabComponent} from "./SettingsTabComponent";
// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
export class SettingTab extends PluginSettingTab {
	plugin: ColoredTagWranglerPlugin;
	_components: {
		tags: 								SettingsTabComponent,
		tags_canvas:						SettingsTabComponent,
		tags_enable_multiple_tags:			SettingsTabComponent,
		tags_enable_background:				SettingsTabComponent,
		folder_note:						SettingsTabComponent,
		folder_note_auto_detect:			SettingsTabComponent,
		folder_note_detect:					SettingsTabComponent,
		folder_note_folder_tag_links:		SettingsTabComponent,
		kanban:								SettingsTabComponent,
		kanban_cards:						SettingsTabComponent,
		kanban_lists:						SettingsTabComponent,
		kanban_hashtags:					SettingsTabComponent,
		debug:								SettingsTabComponent,
		debug_reloadcss:					SettingsTabComponent,
		debug_experimental_commands:		SettingsTabComponent,
		tags_enable_luminance:			    SettingsTabComponent,
		tags_enable_dark_light_difference: 	SettingsTabComponent,
		tags_enable_background_opacity: 	SettingsTabComponent,
		css_tags_no_wrap: 					SettingsTabComponent,
		css_note_tags: 						SettingsTabComponent,
		css_note_background: 				SettingsTabComponent,
		css_note_properties:				SettingsTabComponent,
	}

	constructor(plugin: ColoredTagWranglerPlugin) {
		super(plugin.app, plugin);
		this.plugin = plugin;
		this._components = {
			tags: 								new ComponentTags(plugin, this),
			tags_canvas:						new ComponentTagsCanvas(plugin, this),
			tags_enable_multiple_tags:			new ComponentTagsEnableMultipleTags(plugin, this),
			tags_enable_background: 			new ComponentTagsEnableSeparateBackground(plugin, this),
			folder_note:						new ComponentFolderNote(plugin, this),
			folder_note_auto_detect:			new ComponentFolderNoteAutoDetect(plugin, this),
			folder_note_detect:					new ComponentFolderNoteDetect(plugin, this),
			folder_note_folder_tag_links:		new ComponentFolderNoteFolderTagLinks(plugin, this),
			kanban: 							new ComponentKanban(plugin,this),
			kanban_cards:						new ComponentKanbanCards(plugin,this),
			kanban_lists:						new ComponentKanbanLists(plugin,this),
			kanban_hashtags:					new ComponentKanbanHideHashtags(plugin,this),
			debug:								new ComponentDebug(plugin,this),
			debug_reloadcss:					new ComponentDebugReloadCSS(plugin,this),
			debug_experimental_commands:		new ComponentDebugExperimentalCommands(plugin, this),
			tags_enable_luminance:				new ComponentTagsEnableSeparateLuminance(plugin, this),
			tags_enable_dark_light_difference: 	new ComponentTagsEnableDarkLightDifference(plugin,this),
			tags_enable_background_opacity: 	new ComponentTagsEnableBackgroundOpacity(plugin,this),
			css_tags_no_wrap: 					new ComponentCSSTagsNoWrap(plugin,this),
			css_note_tags: 						new ComponentCSSNoteTags(plugin,this),
			css_note_background: 				new ComponentCSSNoteBackground(plugin,this),
			css_note_properties: 				new ComponentCSSNoteProperties(plugin,this),

		}
	}
	async display() {
        // Refresh the Element container
		const {containerEl} = this;
		containerEl.empty();
		containerEl.addClass("cwt-settings-tab")

		// Tags Settings
		// -------------------------------------------------------------------------------------------------------------
		containerEl.createEl('h2', {text: "Obsidian tags"});
		containerEl.createDiv({cls:"setting-item-description",text: `Don't add the '#' before the tag.`});
		containerEl.createDiv({cls:"setting-item-description",text: `If you forget this, this is done in code for you, resulting in the input being changed.`});
		containerEl.createEl('br');

		// Tags lists and which component they should adhere to
		this._components.tags.create_component(containerEl);

 		// Below this should be boolean options for the tags
		this._components.tags_canvas.create_component(containerEl);
		this._components.tags_enable_multiple_tags.create_component(containerEl);
		this._components.tags_enable_background.create_component(containerEl);
		this._components.tags_enable_luminance.create_component(containerEl);
		this._components.tags_enable_dark_light_difference.create_component(containerEl);
		this._components.tags_enable_background_opacity.create_component(containerEl);

		// CSS Settings
		// -------------------------------------------------------------------------------------------------------------
		containerEl.createEl('br');
		containerEl.createEl('h2', {text: "CSS options"});
		containerEl.createEl('div', {cls:"setting-item-description",text: "A collection of CSS tweaks for tags"});

		this._components.css_note_tags.create_component(containerEl);
		this._components.css_note_properties.create_component(containerEl);
		this._components.css_tags_no_wrap.create_component(containerEl);
		this._components.css_note_background.create_component(containerEl);

		// Kanban Settings
		// -------------------------------------------------------------------------------------------------------------
		containerEl.createEl('br');
		containerEl.createEl('h2', {text: "Kanban plugin integration"});

        this._components.kanban.create_component(containerEl);
		if (this.plugin.settings.Kanban.Enable){
			this._components.kanban_cards.create_component(containerEl);
			this._components.kanban_lists.create_component(containerEl);
			this._components.kanban_hashtags.create_component(containerEl);
		}

		// Folder Note Settings
		// -------------------------------------------------------------------------------------------------------------
		containerEl.createEl('br');
		containerEl.createEl('h2', {text: "Folder Note integration"});
		containerEl.createEl('div', {cls:"setting-item-description",text: "Doesn't integrate with a particular plugin, but relies of the concept of 'Folder Notes'."});

		this._components.folder_note.create_component(containerEl);
		if (this.plugin.settings.FolderNote.Enable){
			this._components.folder_note_auto_detect.create_component(containerEl);
			this._components.folder_note_detect.create_component(containerEl);
			this._components.folder_note_folder_tag_links.create_component(containerEl);

		}

		// Debug Settings
		// -------------------------------------------------------------------------------------------------------------
		containerEl.createEl('br');
		containerEl.createEl('h2', {text: "Debug options"});

		this._components.debug.create_component(containerEl);

		if (this.plugin.settings.Debug.Enable){
			this._components.debug_reloadcss.create_component(containerEl);
			this._components.debug_experimental_commands.create_component(containerEl);
    	}
	}
}
