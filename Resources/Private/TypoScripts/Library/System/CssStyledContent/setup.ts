# remove class="bodytext" from paragraphs
lib.parseFunc_RTE {
	nonTypoTagStdWrap.encapsLines {
		addAttributes.P.class >
		addAttributes.P.class.setOnly >
	}
}

lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class {
	list := addToList(fullwidth,alternating-fullwidth,alternating)
}

tt_content {
	# Make some modifications to the rendering of the standard MAIL form records
	mailform.20 {
		accessibility = 1

		RADIO.layout = <div class="csc-mailform-field">###LABEL### ###FIELD###</div>
		radioWrap.accessibilityWrap = <fieldset###RADIO_FIELD_ID### class="csc-mailform-radio"><legend>###RADIO_GROUP_LABEL###</legend>|</fieldset>
	}

	# Define different wrappers for content elements depending on the page column
	stdWrap.outerWrap.cObject = CASE
	stdWrap.outerWrap.cObject {
		# Define wrappers for each column position (colPos 0,1,2,3)
		key.field = colPos

		# Default is no wrapper
		default = TEXT
		default.value = |

		# Add wrapper for content in right column (colPos=2)
		# we use this to style the box around content in this column
		2 = CASE
		2 {
			# Add wrapping to all content elements
			default = TEXT
			default.value = <div class="secondaryContentSection">|</div>

			# But - exclude inserted records from being wrapped
			key.field = CType
			shortcut = TEXT
			shortcut.value = |
			image = TEXT
			image.value = |
			html = TEXT
			html.value = |
		}
	}

	# Add image classes for lightbox
	image.20.1.imageLinkWrap {
		JSwindow = 0
		directImageLink = 1
		linkParams.ATagParams {
			dataWrap = class= "lightbox" rel="fancybox{field:uid}"
		}
	}
}

# *****************
# CType: uploads
# *****************
tt_content.uploads >
tt_content.uploads = COA
tt_content.uploads {
	10 = < lib.stdheader

	20 = FILES
	20 {
		# get from file references:
		references {
			table = tt_content
			fieldName = media
		}

		collections.field = file_collections

		# get from path (backwards compatibility, contains strings like "fileadmin/user_uploads/")
		folders.field = select_key

		sorting.field = filelink_sorting

		# render the files
		renderObj = COA
		renderObj {
			# preview
			10 >

			# icon
			15 = TEXT
			15 {
				data = file:current:extension
				case = lower
				wrap = <i class="uicon-file-inv uicon-file-|-inv"></i>
			}

			# filename
			20 = TEXT
			20 {
				data = file:current:title // file:current:name
				htmlSpecialChars = 1
				required = 1

				replacement {
					# equivalent to former useSpacesInLinkText = 0; remove using > to disable it
					10 {
 						search = _
 						replace.char = 32
					}

					# equivalent to former stripFileExtensionFromLinkText = 0; move "_20" to "20" to enable it. Disabled by default.
					_20 {
						search = /(.*)(\..*)/
						replace = \1
						useRegExp = 1
					}
				}

				typolink >

				wrap = <span class="csc-uploads-fileName">|</span>
			}

			# description
			30 = TEXT
			30 {
				data = file:current:description
				htmlSpecialChars = 1
				wrap = <span class="csc-uploads-description">|</span>

				required = 1
			}

			# file size
			40 = TEXT
			40 {
				if.isTrue.field = filelink_size
				data = file:current:size
				wrap = <span class="csc-uploads-fileSize">|</span>
				bytes = 1
				bytes.labels = {$styles.content.uploads.filesizeBytesLabels}
			}

			stdWrap.typolink {
					parameter.data = file:current:originalUid // file:current:uid
					parameter.wrap = file:|
					fileTarget < lib.parseTarget
					fileTarget =
					fileTarget.override = {$styles.content.uploads.target}
					fileTarget.override.override.field = target
					removePrependedNumbers = 1
			}

			# wrap of each listed file with odd/even class
			stdWrap.wrap.cObject = COA
			stdWrap.wrap.cObject {
				10 = LOAD_REGISTER
				10 {
					oddEvenClass = li-odd li-first |*| li-even || li-odd
					elementClass = csc-uploads-element csc-uploads-element-{file:current:extension}
					elementClass.insertData = 1
				}

				20 = TEXT
				20 {
					value = <li class="{register:oddEvenClass} {register:elementClass}">|</li>
					insertData = 1
				}
				30 = RESTORE_REGISTER
			}
		}

		# wrap around whole content element with <ul> and editIcons
		stdWrap {
			editIcons = tt_content: media, layout [table_bgColor|table_border|table_cellspacing|table_cellpadding], filelink_size
			editIcons.iconTitle.data = LLL:EXT:css_styled_content/pi1/locallang.xml:eIcon.filelist
			prefixComment = 2 | File list:
			dataWrap = <ul class="csc-uploads csc-uploads-{field:layout}">|</ul>
		}
	}
}