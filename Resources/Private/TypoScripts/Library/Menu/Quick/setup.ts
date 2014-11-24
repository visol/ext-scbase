lib.scbase.menu.quick < lib.scbase.menu.template
lib.scbase.menu.quick {
	special = directory
	special.value = 452

	entryLevel = 0

	1 {
		NO {
			doNotLinkIt = 1
			linkWrap = <h4>|</h4>
		}
		ACT {
			linkWrap = <h4>|</h4>
		}

	}

	2 < lib.scbase.menu.template.1
	2 {

	}

	stdWrap.prepend = Quicknavigation
}