# Index Markers

This file lists the inline markers added to `index.html` so you can quickly search (`CTRL/CMD + F`) for the relevant sections the next time you need to reference them.

| Marker | Search Token | Notes |
| --- | --- | --- |
| styles | `<!-- MARK:styles -->` | Whole CSS block near the top. |
| file-input | `<!-- MARK:file-input -->` | Hidden `<input type="file">` element. |
| app-shell | `<!-- MARK:app-shell -->` | Root flex container that wraps every layout. |
| drive-shell | `<!-- MARK:drive-shell -->` | All Drive tab markup and controls. |
| album-shell | `<!-- MARK:album-shell -->` | Photos tab (albums) markup. |
| theme-shell | `<!-- MARK:theme-shell -->` | Themes tab markup. |
| settings-modal | `<!-- MARK:settings-modal -->` | Settings dialog markup. |
| input-modal | `<!-- MARK:input-modal -->` | Generic single-field input modal. |
| text-file-modal | `<!-- MARK:text-file-modal -->` | New text-file creation modal. |
| list-picker-modal | `<!-- MARK:list-picker-modal -->` | Folder/album picker modal. |
| photo-viewer | `<!-- MARK:photo-viewer -->` | Full-screen media viewer dialog. |
| bottom-tabs | `<!-- MARK:bottom-tabs -->` | Bottom navigation + selection actions. |
| dom-refs | `// MARK:dom-refs` | Start of DOM query constants in the script. |
| theme-data | `// MARK:theme-data` | Theme configuration array. |
| modal-helpers | `// MARK:modal-helpers` | Utility functions that power the modals. |

> Tip: When you jump to a marker, add/remove nearby code inside the same block so future merges stay simple. Feel free to add more `<!-- MARK:... -->` or `// MARK:` entries and document them here when new areas need to be referenced often.
