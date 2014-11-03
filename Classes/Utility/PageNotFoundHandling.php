<?php

class user_pageNotFound {
	/**
	 * Detect language and redirect to 404 error page
	 *
	 * @param array $params "currentUrl", "reasonText" and "pageAccessFailureReasons"
	 * @param \TYPO3\CMS\Frontend\Controller\TypoScriptFrontendController $tsfeObj
	 */
	function pageNotFound($params, $tsfeObj) {
		// get first realurl configuration array (important for multidomain)
		$realurlConf = array_shift($GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']);
		// look for language configuration
		foreach ($realurlConf['preVars'] as $conf) {
			if ($conf['GETvar'] == 'L') {
				foreach ($conf['valueMap'] as $k => $v) {
					// if the key is empty (e.g. default language without prefix), break
					if (empty($k)) {
						continue;
					}
					// we expect a part like "/de/" in requested url
					if (\TYPO3\CMS\Core\Utility\GeneralUtility::isFirstPartOfStr($params['currentUrl'], '/' . $k . '/')) {
						$tsfeObj->pageErrorHandler('/index.php?id=' . $GLOBALS['TYPO3_CONF_VARS']['FE']['pageNotFound_handling_redirectPageID'] . '&L=' . $v);
					}
				}
			}
		}
		// handle default language
		$tsfeObj->pageErrorHandler('/index.php?id=' . $GLOBALS['TYPO3_CONF_VARS']['FE']['pageNotFound_handling_redirectPageID']);
	}
}