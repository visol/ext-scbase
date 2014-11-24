lib.scbase.menu.language < lib.scbase.menu.template
lib.scbase.menu.language {

	special = language
	special.value = 0,1

	1 {

		NO = 1
		NO {
			# Override the standard menu item value (which is the page title) with our own cObject
			stdWrap.cObject = TEXT

			# Use the TypoScript option split function to display different values for the first and second item
			stdWrap.cObject.value = DE || EN
		}

		CUR < .NO
		CUR.doNotShowLink = 1
		CUR.wrapItemAndSub >

		ACT < .NO
		ACT.doNotShowLink = 1
		ACT.wrapItemAndSub >

		USERDEF1 = 1
		USERDEF1.doNotShowLink = 1
		USERDEF1.wrapItemAndSub >

		USERDEF2 < .USERDEF1
	}

}
