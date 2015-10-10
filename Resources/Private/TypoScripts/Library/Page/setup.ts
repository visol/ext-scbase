page = PAGE
page {
	typeNum = 0

	includeCSS {
		stylesheets = {$PATH.stylesheets}Styles{$PATH.productionMinifiedPostfix}.css
		stylesheets.media = all
	}

	includeJSlibs {
		headScripts = {$PATH.scripts}HeadScripts{$PATH.productionMinifiedPostfix}.js
	}

	includeJSFooterlibs {
		bodyScripts = {$PATH.scripts}BodyScripts{$PATH.productionMinifiedPostfix}.js
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
		#BE layouts
		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {
			key.data = levelfield:-1,backend_layout_next_level,slide
			key.override.field = backend_layout
			default = TEXT
			default.value = {$PATH.privatePath}Templates/mobile_home.html
			2 = TEXT
			2.value = {$PATH.privatePath}Templates/mobile_page.html
		}
		partialRootPath = {$PATH.privatePath}Partials/
		layoutRootPath = {$PATH.privatePath}Layouts/

		variables {
			#cObjects werden direkt im Template mittels <f:cObject typoscriptObjectPath="lib.*" /> eingebunden

			mainContent < styles.content.get

			belayout = TEXT
			belayout.data = levelfield:-1,backend_layout_next_level,slide
			belayout.override.field = backend_layout
		}
	}
}