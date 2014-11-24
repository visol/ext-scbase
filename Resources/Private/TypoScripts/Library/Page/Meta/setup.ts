page {
	meta {
		viewport = width=device-width, initial-scale=1, maximum-scale=1

		keywords {
			field = keywords
			required = 1
		}
		description {
			field = description
			required = 1
		}
		author {
			field = author
			required = 1
		}

		application-name = {$site.meta.application-name}
		msapplication-TileColor = {$site.meta.msapplication-TileColor}
		msapplication-TileImage = {$site.meta.msapplication-TileImage}
	}
	headerData {
		1416820920 = COA
		1416820920 {
			1 = TEXT
			1 {
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
			33 < .1
			33.wrap = <meta property="og:url" content="{$site.baseUrl}|">

			34 = TEXT
			34.value = <meta property="og:image" content="{$site.logo.bitmap}" />
			39 = TEXT
			39.value = <link rel="icon" type="image/svg+xml" href="{$site.logo.vector}" />

			40 = TEXT
			40 {
				value (
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
				insertData = 1
			}
		}
	}
}