
lib.scbase.menu.top < lib.scbase.menu.template
lib.scbase.menu.top {
	entryLevel = 0

	1 {
		IFSUB < .NO
		IFSUB {
			wrapItemAndSub = <li class="sub">|</li> |*| <li class="sub">|</li> |*| <li class="sub last">|</li>
		}

		ACTIFSUB < .ACT
		ACTIFSUB {
			wrapItemAndSub = <li class="active sub">|</li> |*| <li class="active sub">|</li> |*| <li class="active sub last">|</li>
		}

		CURIFSUB < .CUR
		CURIFSUB {
			wrapItemAndSub = <li class="selected sub">|</li> |*| <li class="selected sub">|</li> |*| <li class="selected sub last">|</li>
		}
	}

	2 < lib.scbase.menu.top.1

	3 < lib.scbase.menu.top.1

	#4 < lib.scbase.menu.top.1
}

[globalVar = TSFE:id = 1]
lib.scbase.menu.top {
	# PID 6 is a shortcut to home, show it as active
	alwaysActivePIDlist = 6
}
[end]
