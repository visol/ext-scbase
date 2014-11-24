# For the breadcrumb cObject we use a HMENU of the type 'rootline'
lib.scbase.menu.breadcrumb = COA
lib.scbase.menu.breadcrumb {
	10 = HMENU
	10 {
		# Select HMENU type 'special.rootline'
		special = rootline

		# Traverse the pagetree starting at the rootpage (0) and ending at the current page (-1)
		special.range = 0|-1

		# Pages which are excluded from the regular menus should still be shown in the breadcrumb
		includeNotInMenu = 1

		excludeUidList = 1

		# This menu has only 1 level since this is a rootline-menu
		1 < lib.scbase.menu.template.1
		1 {
			stdWrap.innerWrap = <li><a href="/"><i class="uicon-home"></i></a></li>|

			NO.wrapItemAndSub = <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li> |*| <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li> |*| <li class="last" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li>
			NO.stdWrap.innerWrap = <span itemprop="title">|</span>
			NO.ATagParams = itemprop="url"

			ACT.wrapItemAndSub = <li class="active" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li> |*| <li class="active" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li> |*| <li class="active last" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li>
			ACT.stdWrap.innerWrap = <span itemprop="title">|</span>
			ACT.ATagParams = itemprop="url"

			CUR.wrapItemAndSub = <li class="selected" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li> |*| <li class="selected" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li> |*| <li class="selected last" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">|</li>
			CUR.stdWrap.innerWrap = <span itemprop="title">|</span>
			CUR.ATagParams = itemprop="url"

		}
	}
}

# Read-only breadcrumb for RSS feeds
lib.rssBreadcrumb < lib.scbase.menu.breadcrumb
lib.rssBreadcrumb {
	10 {
		excludeUidList >
		1 {
			NO {
				wrapItemAndSub >
				stdWrap.noTrimWrap = | | / |
				doNotLinkIt = 1
			}
			ACT {
				wrapItemAndSub >
				stdWrap.noTrimWrap = | | / |
				doNotLinkIt = 1
			}
			CUR {
				wrapItemAndSub >
				doNotLinkIt = 1
			}
			stdWrap.innerWrap >
			wrap >
		}
	}
}

# This condition checks whether a news article will be shown in single view
/*
[globalVar = GP:tx_news_pi1|news > 0]
lib.scbase.menu.breadcrumb {
	# Render the current page as the normal state (linked) because we'll append the title of the news article
	10.1 {
		CUR = 1
		CUR < .NO
	}

	# Append the title of the news item. Using this example, the breadcrumb can be extended with
	# any other thinkable kind of data and logic
	20 = RECORDS
	20 {
		if.isTrue.data = GP:tx_news_pi1|news
		dontCheckPid = 1
		tables = tx_news_domain_model_news
		source.data = GP:tx_news_pi1|news
		source.intval = 1
		conf.tx_news_domain_model_news = TEXT
		conf.tx_news_domain_model_news {
			field = title
			htmlSpecialChars = 1
			typolink {
				parameter.data = page:uid
				addQueryString = 1
			}
		}
		wrap =  <span>|</span>
	}
}
# Else configure the breadcrumb for normal cases when no news article is shown
[else]
lib.scbase.menu.breadcrumb {
	10.1 {
		# Add alternative, unlinked configuration for current page, which is always the last item in
		# the breadcrumb
		CUR.stdWrap.htmlSpecialChars = 1

		# Do not wrap a link around this item
		#CUR.doNotLinkIt = 1
	}
}
[global]
*/