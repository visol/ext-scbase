# We want absolutely no target attribute as it is not XHTML-strict
# compliant and I really don't like new windows (_blank target)!
lib.parseFunc.tags.link.typolink.target >
	PAGE_TARGET =

	styles.content {
# This defines the maximum width of images inserted in content records of type Images or Text-with-images.
		# There are seperate settings for images floated next to text (..InText)
	imgtext {
		linkWrap.newWindow = 1
		linkWrap.lightboxEnabled = 1
	}
	uploads {
		jumpurl_secure = 1
		jumpurl_secure_mimeTypes = pdf=application/pdf, doc=application/msword
		jumpurl = 1
	}
	links {
		extTarget =
			target =
	}
}

content {
	pageFrameObj =
		defaultHeaderType = 3
}
