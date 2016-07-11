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
		msapplication-starturl = {$site.baseUrl}
		msapplication-navbutton-color = {$site.meta.msapplication-navbutton-color}
		msapplication-tooltip = {$site.baseUrl}
		msapplication-square70x70logo = {$PATH.images}metro-square70x70.png
		msapplication-square150x150logo = {$PATH.images}metro-square150x150.png
		msapplication-wide310x150logo = {$PATH.images}metro-wide310x150.png
		msapplication-square310x310logo = {$PATH.images}metro-square310x310.png
	}
}