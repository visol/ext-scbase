page = PAGE
page {
	typeNum = 0

	includeCSS {
		stylesheets = {$PATH.stylesheets}Build/styles{$PATH.productionMinifiedPostfix}.css
		stylesheets.media = all
	}

	includeJSlibs {
		headScripts = {$PATH.scripts}Build/headScripts{$PATH.productionMinifiedPostfix}.js
	}

	includeJSFooterlibs {
		bodyScripts = {$PATH.scripts}Build/bodyScripts{$PATH.productionMinifiedPostfix}.js
	}


	bodyTagCObject = COA
	bodyTagCObject {
		wrap = <body|>

		10 = TEXT
		10 {
			value = layout{field:backend_layout} lang{TSFE:sys_language_uid} type{TSFE:type} uid{TSFE:id}
			stdWrap.noTrimWrap = | class="|"|
			insertData = 1
		}

		20 = TEXT
		20 {
			value.field = uid
			stdWrap.noTrimWrap = | data-uid="|"|
		}

		30 = HMENU
		30 {
			special = rootline
			special.range = 0|-1
			includeNotInMenu = 1
			stdWrap.noTrimWrap = | data-rootline="|"|

			1 = TMENU
			1 {
				noBlur = 1

				NO = 1
				NO {
					wrapItemAndSub = |/ |*| |/ |*| |
					linkWrap = |
					ATagBeforeWrap = 0
					doNotLinkIt = 1
					stdWrap.htmlSpecialChars = 0

					stdWrap.cObject = COA
					stdWrap.cObject {
						10 = TEXT
						10 {
							field = uid
						}
					}
				}
			}
		}
	}

	10 = FLUIDTEMPLATE
	10 {
		file = {$PATH.privatePath}Templates/index.html
		partialRootPath = {$PATH.privatePath}Partials/
		layoutRootPath = {$PATH.privatePath}Layouts/

		variables {
		#cObjects werden direkt im Template mittels <f:cObject typoscriptObjectPath="lib.*" /> eingebunden

			homeLinkUri = TEXT
			homeLinkUri.typolink.parameter = {$PID.homepage}
			homeLinkUri.typolink.returnLast = url
		}
	}
}
