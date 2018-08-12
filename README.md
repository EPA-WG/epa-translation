# epa-translation
Provides support for multiple languages on site. Anyone could make own translation by changing the page text inline 
and share with friends. This way the community driven translations of web application will extend the application 
audience beyond of initially targeted countries and lingual dialects.
 
Project comprise in-browser runtime `translation integration` and `inline vocabulary editor` 
[microapplications](https://github.com/EPA-WG/EPA-concept/blob/master/microapplication.md)

# Integration into web application
The web page would need to include `epa-translation.js` (CDN tbd) into page, or use Browser plugin(tbd)
, or via bookmarklet(link TBD).

## Features
* detection of browser locale and use one+ vocabulary 
* language preferences for selecting order of vocabularies
* <epa-translation> Languages </epa-translation> menu entry for preferences, displaying selected vocabularies.
* once vocabulary loaded or selected the translation on the page is activated, 
substituting the original text from selected vocabulary(-ies)

# Editor
Loaded on demand only. The `translation integration` client on *"enable inline translation editor"* trigger will 
pull `inline vocabulary editor` microapplication into host application content. 

## Edit mode
Could be triggered by
* keyboard shortcut
* `translation integration` menu 

# Cloud sync
Available from epa-translation preferences. Requires identification per application, page or user.

# Customization & preferences
Host application could preconfigure the preferences enabling own cloud APIs to sync. 
The reference `translation cloud sync` application TBD.

# Vocabularies cloud sync
Simplest way is to serialize vocabularies from localStorage, save as JSON to server URL and use this URL as default value.

Sync to git TBD.

