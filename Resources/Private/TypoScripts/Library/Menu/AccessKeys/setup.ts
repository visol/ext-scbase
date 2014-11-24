lib.scbase.menu.accesskeys = COA
lib.scbase.menu.accesskeys {
	wrap = <ul id="accesskeys">|</ul>
	10 = TEXT
	10 {
		data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey0
		typolink {
			parameter = {$PID.homepage}
			ATagParams= accesskey="0"
			title.cObject = TEXT
			title.cObject.data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey0
		}
		wrap = <li>|</li>
	}
	20 = TEXT
	20 {
		data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey1
		typolink {
			parameter.data = TSFE:id
			addQueryString = 1
			addQueryString.method = GET
			section = {$site.id.mainNavigation}
			ATagParams= accesskey="1"
			title.cObject = TEXT
			title.cObject.data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey1
		}
		wrap = <li>|</li>
	}
	30 < .20
	30 {
		data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey2
		typolink {
			ATagParams= accesskey="2"
			section = {$site.id.mainContent}
			title.cObject.data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey2
		}
	}
	40 < .10
	40 {
		stdWrap.if.isTrue.data = {$PID.contact}
		data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey3
		typolink {
			parameter = {$PID.contact}
			ATagParams= accesskey="3"
			title.cObject.data =  LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey3
		}
	}
	50 < .10
	50 {
		stdWrap.if.isTrue.data = {$PID.sitemap}
		data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey4
		typolink {
			parameter = {$PID.sitemap}
			ATagParams= accesskey="4"
			title.cObject.data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey4
		}
	}
	60 < .10
	60 {
		stdWrap.if.isTrue.data = {$PID.search}
		data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey5
		typolink {
			parameter = {$PID.search}
			ATagParams= accesskey="5"
			title.cObject.data = LLL:{$FILE.translationFile}:pageElement.navAccesskey.accesskey5
		}
	}
}