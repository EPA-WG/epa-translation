# epa-translation
in-browser runtime `translation integration` and `inline translation editor` microapplications

# Integration into web application
The client would need to include `syndication.js` (CDN tbd) into page or use Browser plugin(tbd).

## Features
* detection of browser locale and use one+ vocabulary 
* language preferences for selecting order of vocabularies
* <epa-translation> Languages </epa-translation> menu entry for preferences, displaying selected vocabularies.
* once vocabulary loaded or selected the translation on the page is activated, 
substituting the original text from selected vocabulary(-ies)

# Editor
Loaded on demand only. The `translation integration` client on *"enable inline translation editor"* trigger will 
pull `inline translation editor` microapplication into host application content. 

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

