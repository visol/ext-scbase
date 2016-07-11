
lib.scbase.menu.sub < lib.scbase.menu.template
lib.scbase.menu.sub {
	entryLevel >
	special = directory
	special.value = 1
	special.value.override.required = 1
	special.value.override.cObject = USER
	special.value.override.cObject.userFunc = Tx_Userunilutemplate_Hooks_Menuroot->getMenurootPid

	1 {
		expAll = 0
		# hide this navigation in mobile view
		wrap = <ul class="desktop--only">|</ul>
	}

	2 < lib.scbase.menu.template.1
	2 {
		expAll = 0
	}

	3 < lib.scbase.menu.template.1
	3 {
		expAll = 0
	}

	4 < lib.scbase.menu.template.1
	4 {
		expAll = 0
	}
}

[PIDinRootline = 28]
# Globale News
lib.scbase.menu.sub.special.value = 28
lib.scbase.menu.sub.special.value.override >

# don't hide it in the news page
lib.scbase.menu.sub.1.wrap >
lib.scbase.menu.sub.1.stdWrap.outerWrap.cObject = TEXT
lib.scbase.menu.sub.1.stdWrap.outerWrap.cObject.value = Weitere News
lib.scbase.menu.sub.1.stdWrap.outerWrap.cObject.lang.en = Additional news
lib.scbase.menu.sub.1.stdWrap.outerWrap.cObject.wrap = <h2 class="header--line touch--only"><span>|</span></h2>
lib.scbase.menu.sub.1.stdWrap.innerWrap = <ul>|</ul>
[GLOBAL]

[PIDinRootline = 29]
# Globale News
lib.scbase.menu.sub.special.value = 29
lib.scbase.menu.sub.special.value.override >

# don't hide it in the event page
lib.scbase.menu.sub.1.wrap >
lib.scbase.menu.sub.1.stdWrap.outerWrap.cObject = TEXT
lib.scbase.menu.sub.1.stdWrap.outerWrap.cObject.value = Weitere Veranstaltungen
lib.scbase.menu.sub.1.stdWrap.outerWrap.cObject.lang.en = Additional events
lib.scbase.menu.sub.1.stdWrap.outerWrap.cObject.wrap = <h2 class="header--line touch--only"><span>|</span></h2>
lib.scbase.menu.sub.1.stdWrap.innerWrap = <ul>|</ul>
[GLOBAL]
