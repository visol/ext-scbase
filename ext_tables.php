<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

if (version_compare(TYPO3_branch, '6.2', '>=')) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Resources/Private/TypoScripts', 'scbase template');
}else{
	t3lib_extMgm::addStaticFile($_EXTKEY, 'Resources/Private/TypoScripts', 'scbase template');
}