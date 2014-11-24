lib.scbase.menu.language = HMENU
lib.scbase.menu.language {
	special = language
	special {
		value = {$site.menu.language.ids}
		normalWhenNoLanguage = 0
	}
	addQueryString = 1
	addQueryString.exclude = L,id,no_cache
	addQueryString.method = GET
	useCacheHash = 1
	1 = TMENU
	1 {
		stdWrap.wrap = <ul>|</ul>
		stdWrap.required = 1
		NO = 1
		NO {
			wrapItemAndSub >
			allWrap = <li class="first">|</li>|*|<li>|</li>|*|<li class="last">|</li>
			stdWrap.override = {$site.menu.language.labels}
			ATagTitle = {$site.menu.language.linkTitleLabels}
		}
		ACT < .NO
		ACT {
			allWrap = <li class="first active">|</li>|*|<li class="active">|</li>|*|<li class="last active">|</li>
			#doNotShowLink = 1
			#allWrap >
		}
		USERDEF1 < .NO
		USERDEF1 {
			doNotLinkIt = 1
			#doNotShowLink = 1
			#allWrap >
		}
		USERDEF2 < .USERDEF1
	}
}