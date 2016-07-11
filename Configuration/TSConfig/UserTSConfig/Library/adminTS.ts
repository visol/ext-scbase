<INCLUDE_TYPOSCRIPT: source="FILE:./commonTS.ts">

options {
	pageTree {
		showPageIdWithTitle = 1
		showDomainNameWithTitle = 1
	}
}

# NO_CACHE = 1 !!!!! in AdmPanel
admPanel {
	override.tsdebug.forceTemplateParsing = 1
}