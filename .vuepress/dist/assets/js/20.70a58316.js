(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{161:function(e,t,r){"use strict";r.r(t);var a=r(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[r("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/ImageTransformer?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/ImageTransformer&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/49a59dad1899460fa451510ef96307bb",alt:"Codacy Badge"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://styleci.io/repos/96102464",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://styleci.io/repos/96102464/shield?branch=master",alt:"StyleCI"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/imagetransformer",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/imagetransformer/license",alt:"License"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/imagetransformer",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/imagetransformer/downloads",alt:"Total Downloads"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/imagetransformer",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/imagetransformer/version",alt:"Latest Stable Version"}}),r("OutboundLink")],1)]),r("p",[e._v("Image transformer dependency for "),r("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),r("OutboundLink")],1),e._v(".")]),r("p",[e._v("This package can work independently of the "),r("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enso"),r("OutboundLink")],1),e._v(" ecosystem.")]),r("p",[e._v("For live examples and demos, you may visit "),r("a",{attrs:{href:"https://www.laravel-enso.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("laravel-enso.com"),r("OutboundLink")],1)]),e._m(1),r("p",[e._v("Comes pre-installed in Enso.")]),r("p",[e._v("To install outside of Enso:")]),e._m(2),r("p",[e._v("In order for the optimization to work, you need to have the following packages installed:")]),e._m(3),e._m(4),e._m(5),e._m(6),r("p",[e._v("Failure to do so may result in silent errors if allotted memory is insufficient.")]),e._m(7),r("ul",[r("li",[e._v("handles image optimization, using the "),r("a",{attrs:{href:"https://github.com/spatie/laravel-image-optimizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Image Optimizer"),r("OutboundLink")],1),e._v(" library")]),r("li",[e._v("handles image cropping, using the "),r("a",{attrs:{href:"https://github.com/intervention/image",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intervention Image"),r("OutboundLink")],1),e._v(" library")]),r("li",[e._v("for the non essential libraries, handles missing libraries gracefully, logging the fact but does not throw an error")])]),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/spatie/laravel-image-optimizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Image Optimizer"),r("OutboundLink")],1)]),r("li",[r("a",{attrs:{href:"https://github.com/intervention/image",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intervention Image"),r("OutboundLink")],1)])]),e._m(14),r("p",[e._v("are welcome. Pull requests are great, but issues are good too.")]),e._m(15),r("p",[e._v("This package is released under the MIT license.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"image-transformer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-transformer","aria-hidden":"true"}},[this._v("#")]),this._v(" Image Transformer")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("composer require laravel-enso/imagetransformer")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("pngquant")]),t("li",[this._v("gifsicle")]),t("li",[this._v("jpegoptim")]),t("li",[this._v("php7.1-gd or php-imagick")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("On Linux, you can do that with: "),t("code",[this._v("sudo apt-get install pngquant gifsicle jpegoptim php7.1-gd")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("IMPORTANT NOTE:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The underlying image processing libraries may use a lot of memory,\nespecially if the processed files are large (for example, for an 8MB file, more than 128MB of memory might be used ),\nso make sure to configure php accordingly and/or do "),t("code",[this._v("ini_set(‘memory_limit’, ‘256M’);")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("ImageTransformer")]),this._v(" class has 2 public methods:")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("code",[e._v("optimize")]),e._v(", takes no argument and tries to optimize the file")]),r("li",[r("code",[e._v("resize")]),e._v(", takes the target width and height and resizes the file, possibly changing the aspect ration")]),r("li",[r("code",[e._v("width")]),e._v(", resizes the file to the given width, maintaining aspect ratio")]),r("li",[r("code",[e._v("height")]),e._v(", resizes the file to the given height, maintaining aspect ratio")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Note, an "),t("code",[this._v("ImageTransformerException")]),this._v(" is thrown if:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("the "),t("code",[this._v("gd")]),this._v(" or "),t("code",[this._v("imagick")]),this._v(" extensions are missing")]),t("li",[this._v("a file type not supported for an uploaded file")]),t("li",[this._v("an uploaded file fails the basic validation")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"external-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" External dependencies")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"contributions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributions","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);t.default=i.exports}}]);