(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{253:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[r("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/TrackWho?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/TrackWho&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/c2848e5734e44faab61fb3391a91a11e",alt:"Codacy Badge"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://styleci.io/repos/85499255",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://styleci.io/repos/85499255/shield?branch=master",alt:"StyleCI"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/trackwho",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/trackwho/license",alt:"License"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/trackwho",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/trackwho/downloads",alt:"Total Downloads"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/trackwho",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/trackwho/version",alt:"Latest Stable Version"}}),r("OutboundLink")],1)]),r("p",[e._v("Create, update and delete authoring tracking dependency for "),r("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),r("OutboundLink")],1),e._v(".")]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),r("p",[e._v("The "),r("a",{attrs:{href:"https://github.com/laravel-enso/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso Core"),r("OutboundLink")],1),e._v(" package comes with this package included.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"track-who"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#track-who","aria-hidden":"true"}},[this._v("#")]),this._v(" Track Who")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#details","aria-hidden":"true"}},[this._v("#")]),this._v(" Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("keeps track of the user that performed various actions on a record / model")]),t("li",[this._v("requires the presence of the proper model attributes / table columns")]),t("li",[this._v("once the structure is set up, by using the proper trait, the information is added automatically")]),t("li",[this._v("the trait works only when the user is authenticated, in order to avoid issues during tests or when using the cli/tinker")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[this._v("#")]),this._v(" Use")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("In the Model where you want to track the creating, updating or deleting user, add")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-php extra-class"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token package"}},[e._v("CreatedBy")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" UpdatedBy"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" DeletedBy"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("Make sure that the model's table has the "),t("code",[this._v("created_by")]),this._v(" | "),t("code",[this._v("updated_by")]),this._v(" | "),t("code",[this._v("deleted_by")]),this._v(" field(s)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("config/enso/trackWho.php")]),this._v(" configuration file, lets you customize the following:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[t("code",[this._v("resourcePersonAttributes")]),this._v(":")]),t("ul",[t("li",[t("code",[this._v("name")]),this._v(", - string, the attribute used for name | default 'name'")]),t("li",[t("code",[this._v("appellative")]),this._v(", - string, the attribute used for the person's appellative | default 'appellative'")])]),t("p",[this._v("These options are useful for customizing the person resource, when the people table has been updated for due to\nspecific project requirements.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"publishes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[this._v("#")]),this._v(" Publishes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("php artisan vendor:publish --tag=trackWho-config")]),this._v(" - configuration file")]),t("li",[t("code",[this._v("php artisan vendor:publish --tag=enso-config")]),this._v(" - a common alias for when wanting to update the configuration,\nonce a newer version is released, usually used with the "),t("code",[this._v("--force")]),this._v(" flag")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The traits will also define relationships with the "),r("code",[e._v("User")]),e._v(" model so you can call "),r("code",[e._v("$model->createdBy")]),e._v(", "),r("code",[e._v("$model->updatedBy")]),e._v(", "),r("code",[e._v("$model->deletedBy")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("DeletedBy")]),this._v(" can be useful where you are using soft deletes.")])}],!1,null,null,null);t.default=s.exports}}]);