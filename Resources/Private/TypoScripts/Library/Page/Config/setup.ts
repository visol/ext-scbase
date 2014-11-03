/*
The PAGE CONFIG template.

Only page.config settings are done here, like character sets, url and language.
*/

config {
	// Administrator settings
	admPanel = {$site.page.configuration.adminPanel}
	debug = {$site.page.configuration.debug}

	doctype = html5
	// Include Boilerplate handling for IE browsers
	htmlTag_stdWrap {
		setContentToCurrent = 1
		cObject = COA
		cObject {
			10 = LOAD_REGISTER
			10 {
				newLine.char = 10
				tagEnd {
					current = 1
					split.max = 2
					split.token = <html
					split.returnKey = 1
				}
			}

			20 = TEXT
			20.value = <!--[if lt IE 7]> <html class="no-js ie6 oldie"{register:tagEnd} <![endif]-->
			20.wrap = |{register:newLine}
			20.insertData = 1
			30 < .20
			30.value = <!--[if IE 7]> <html class="no-js ie7 oldie"{register:tagEnd} <![endif]-->
			40 < .20
			40.value = <!--[if IE 8]> <html class="no-js ie8 oldie"{register:tagEnd} <![endif]-->
			50 < .20
			50.value = <!--[if gt IE 8]> <!--><html class="no-js"{register:tagEnd} <!--<![endif]-->

			90 = RESTORE_REGISTER
		}
	}

	noScaleUp = 1

	// Character sets
	renderCharset = utf-8
	metaCharset = utf-8

	// Cache settings
	cache_period = 43200
	sendCacheHeaders = 1
	# only if no fe_user login sendCacheHeaders = 1
	sendCacheHeaders_onlyWhenLoginDeniedInBranch = 1

	// URL Settings
	tx_realurl_enable = 1
	simulateStaticDocuments = 0

	// Language Settings
	uniqueLinkVars = 1
	linkVars := addToList(L(1),type(3))

	sys_language_uid = {$site.sys_language_uid}
	#sys_language_overlay = hideNonTranslated
	sys_language_mode = strict

	language = {$site.language}
	locale_all = {$site.locale_all}
	htmlTag_langKey = {$site.language}

	// Link settings
	absRefPrefix = /
	prefixLocalAnchors =

	// Targets for links
	intTarget =
	extTarget = _blank
	fileTarget = _blank

	// Code cleaning
	disablePrefixComment = 1

	// Move default CSS and JS to external file
	removeDefaultJS = external
	inlineStyle2TempFile = 1

	// Protect mail addresses from spamming
	spamProtectEmailAddresses = -3
	spamProtectEmailAddresses_atSubst = <span style="display:none;">remove-this.</span>@<span style="display:none;">remove-this.</span>

	// Comment in the <head> tag
	headerComment (
		integrated by Swisscom IT Services AG, www.swisscom.ch
	)

	//disableImgBorderAttr = 1
	meaningfulTempFilePrefix = 10

	noPageTitle = 2
	removeDefaultCss = 1

	concatenateJs = 0
	compressJs = 0
}

[browser = msie]
	config.additionalHeaders = X-UA-Compatible: IE=Edge,chrome=1
[global]