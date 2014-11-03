TYPO3 Base
==========

This extension is used as a base for TYPO3 sites. It contains general configuration.


Folder structure
----------------

* `Classes`
  * `./Classes/Hooks`
  * `./Classes/UserFuncs`
  * `./Classes/Utility`
* `./Configuration`  
  e.g. `realurl_conf.php`
* `./Documentation`
* `./Migrations`  
  Planned for releases. Currently not in use
* `./Resources`
  * `./Resources/Private`
    * `./Resources/Private/BodyScripts`  
      JavaScripts that should be inserted in the body of the HTML document (right before the closing body tag).
      These scripts will be merged and compressed by e.g. Grunt and stored in `./Resources/Public/Scripts/Build/bodyScripts.min.js`.
      Libraries (in `Vendor/Libs`) will be included first.
      * `./Resources/Private/BodyScripts/Vendor`
        * `./Resources/Private/BodyScripts/Vendor/Libs`
    * `./Resources/Private/Content` 
      Dumps (e.g. T3D files)
    * `./Resources/Private/HeadScripts`  
      JavaScripts that should be inserted in the body of the HTML document (right before the closing body tag).
      These scripts will be merged and compressed by e.g. Grunt and stored in `./Resources/Public/Scripts/Build/headScripts.min.js`
      Libraries (in `Vendor/Libs`) will be included first.
      * `./Resources/Private/HeadScripts/Vendor`
        * `./Resources/Private/HeadScripts/Vendor/Libs`
    * `./Resources/Private/Language`
    * `./Resources/Private/Layouts`
    * `./Resources/Private/Partials`
    * `./Resources/Private/Stylesheets`
    * `./Resources/Private/Templates`
    * `./Resources/Private/TSConfig`
      * `./Resources/Private/TSConfig/Library`
    * `./Resources/Private/TypoScripts`
      * `./Resources/Private/TypoScripts/Library`
  * `./Resources/Public`
    * `./Resources/Public/Fonts`
    * `./Resources/Public/Images`
    * `./Resources/Public/Scripts`
      * `./Resources/Public/Scripts/Build`
    * `./Resources/Public/Stylesheets`
      * `./Resources/Public/Stylesheets/Build`
* `./Shell`
* `./Tests`

Installation:

- User TSConfig
  * for admin users: add the following to the user or the group

          <INCLUDE_TYPOSCRIPT: source="FILE:EXT:scbase/Resources/Private/TSConfig/UserTSConfig/Library/adminTS.ts">

  * for standard users: add the following to the user or the group

          <INCLUDE_TYPOSCRIPT: source="FILE:EXT:scbase/Resources/Private/TSConfig/UserTSConfig/Library/userTS.ts">

