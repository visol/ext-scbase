<INCLUDE_TYPOSCRIPT: source="FILE:./commonTS.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:./simpleBE.ts">

options {
	RTEkeyList = bold, italic, subscript, superscript, orderedlist, unorderedlist, outdent, indent, textindicator, insertcharacter, link, findreplace, removeformat, undo, redo, table, toggleborders, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge, formatblock

	clearCache {
		pages = 1
		all = 1
	}
	saveDocNew = 1
	showHistory = 1
}