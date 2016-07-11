lib.scbase.menu.meta = COA
lib.scbase.menu.meta.wrap = <ul>|</ul>
lib.scbase.menu.meta.1 < lib.scbase.menu.template
lib.scbase.menu.meta.1 {
	special = directory
	special.value = 3

	entryLevel = 0

	1 {

	}
	1.wrap >

	#stdWrap.prepend.data = LLL:{$filepaths.l10n}:nav_top
	#stdWrap.prepend = Footernavigation
}

lib.scbase.menu.meta.2 < lib.scbase.menu.language
lib.scbase.menu.meta.2 {
	1 {
		wrap >
		NO {
			wrapItemAndSub = <li class="language">|</li>
		}
	}
}
