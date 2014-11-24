page {
	headerData {
		1416820920 = COA
		1416820920 {
			1 = TEXT
			1.value = <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
			5 = TEXT
			5 {
				data = page:title
				stdWrap.stripHtml = 1
				stdWrap.noTrimWrap = || - {$site.browserTitle}|
				#for homepage see at bottom
				wrap = <title>|</title>
			}
			10 = TEXT
			10 {
				typolink {
					parameter.data = TSFE:id
					addQueryString = 1
					addQueryString {
						method = GET
						// prevent double id:
						exclude = id
					}
					returnLast = url
				}
				wrap = <link rel="canonical" href="{$site.baseUrl}|" />
			}
			30 = TEXT
			30.value = <meta property="og:type" content="{$site.meta.og_type}" />
			31 = TEXT
			31 {
				field = title
				wrap = <meta property="og:title" content="|" />
				required = 1
			}
			32 < .31
			32 {
				field = description
				wrap = <meta property="og:description" content="|" />
			}
			33 < .10
			33.wrap = <meta property="og:url" content="{$site.baseUrl}|">

			34 = TEXT
			34.value = <meta property="og:image" content="{$site.logo.bitmap}" />

			40 = TEXT
			40 {
				value (
					<!--[if lte IE 8 ]>
					<link rel="shortcut icon" type="image/x-icon" href="{$site.favicon.icon}" />
					<![endif]-->
					<!--[if gte IE 9 ]>
					<link rel="shortcut icon" type="image/x-icon" href="{$site.favicon.icon}" />
					<![endif]-->
					<link rel="icon" type="image/svg+xml" href="{$site.favicon.vector}" />
					<link rel="icon" type="image/png" href="{$site.favicon.bitmap}" />

					<link rel="apple-touch-icon" sizes="57x57" href="{$PATH.images}apple-touch-icon-57x57.png">
					<link rel="apple-touch-icon" sizes="114x114" href="{$PATH.images}apple-touch-icon-114x114.png">
					<link rel="apple-touch-icon" sizes="72x72" href="{$PATH.images}apple-touch-icon-72x72.png">
					<link rel="apple-touch-icon" sizes="144x144" href="{$PATH.images}apple-touch-icon-144x144.png">
					<link rel="apple-touch-icon" sizes="60x60" href="{$PATH.images}apple-touch-icon-60x60.png">
					<link rel="apple-touch-icon" sizes="120x120" href="{$PATH.images}apple-touch-icon-120x120.png">
					<link rel="apple-touch-icon" sizes="76x76" href="{$PATH.images}apple-touch-icon-76x76.png">
					<link rel="apple-touch-icon" sizes="152x152" href="{$PATH.images}apple-touch-icon-152x152.png">
					<link rel="apple-touch-icon" sizes="180x180" href="{$PATH.images}apple-touch-icon-180x180.png">
					<link rel="apple-touch-icon" href="{$PATH.images}apple-touch-icon.png" />
				)
			}
		}
	}
}

[globalVar = TSFE:id = {$PID.homepage}]
	page.headerData.1416820920.5.stdWrap.noTrimWrap = |{$site.browserTitle} - ||
[global]