(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{441:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("The Video Disk Recorder (VDR) binding allows openHAB to control your own digital satellite receiver and "),a("a",{attrs:{href:"http://www.tvdr.de",target:"_blank",rel:"noopener noreferrer"}},[t._v("Video Disk Recorder"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("If you have any suggestions or questions don't hesitate to contact me ("),a("a",{attrs:{href:"http://groups.google.com/groups/profile?enc_user=2fum3R0AAACkAo_xkzjYxXMLRwdKLvZ72A6NcFQ3yZH-XCKBlyRD_Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("iwow"),a("OutboundLink")],1),t._v(").")]),t._m(1),t._m(2),t._m(3),t._m(4),a("p",[t._v("The syntax for the VDR binding configuration string is explained here:")]),t._m(5),t._m(6),a("p",[t._v("Command must be one of the following:")]),t._m(7),a("p",[t._v("The VDR-Id corresponds to the configuration in openhab.cfg where one has to configure the VDRs. Which looks like this")]),t._m(8),t._m(9),t._m(10),a("p",[t._v("Here are some examples for valid binding configuration strings:")]),a("p",[t._v("For Switch items:")]),t._m(11),a("p",[t._v("For String items:")]),t._m(12),a("p",[t._v("As a result, your lines in the items file might look like the following:")]),t._m(13),t._m(14),a("p",[t._v("This example requires TV with LAN connection.")]),a("p",[t._v("First you need two items with NetworkHealthBinding")]),t._m(15),a("p",[t._v("A rule for the openHAB rule engine can look like this:")]),t._m(16),t._m(17),a("p",[t._v("Same requirements and prerequisites as VDR PC on use-case above.")]),a("p",[t._v("A rule for the openHAB rule engine (not drools) can look like this:")]),t._m(18),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"video-disk-recorder-vdr-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video-disk-recorder-vdr-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Video Disk Recorder (VDR) Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/vdr.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("TBD")]),a("td",[t._v("TBD")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("TBD")]),a("td",[t._v("TBD")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('vdr="<VDR-ID>:<command>[,<VDR-ID>:<command>][,..]"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The parts in brackets "),s("code",[this._v("[]")]),this._v(" signify an optional information.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("message")]),t._v(": show message on OSD; must be bound to a String item")]),a("li",[a("code",[t._v("powerOff")]),t._v(": switch VDR off (same as hit power on remote control); must be bound to a Switch item")]),a("li",[a("code",[t._v("recording")]),t._v(": recording state; must be bound to a Switch item")]),a("li",[a("code",[t._v("channel")]),t._v(": channel up / down; can be bound to a Switch item(ON=increase, OFF=decrease) or a number item")]),a("li",[a("code",[t._v("volume")]),t._v(": volume up / down; can be bound to a Switch item (ON=increase, OFF=decrease) or a number item (value between 0 and 255)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("vdr:<id>.host=[host]\nvdr:<id>.port=[port]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"basic-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('vdr="LivingRoom:powerOff"\nvdr="LivingRoom:recording"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('vdr="LivingRoom:message"\n')])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VDR_LivingroomPower")]),t._v("          "),a("span",{attrs:{class:"token string"}},[t._v('"VDR (livingroom) Power"')]),t._v("         "),a("span",{attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"LivingRoom:powerOff"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("wol"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"192.168.1.2#F4:6D:15:32:F3:F7"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VDR_LivingroomOSDMessage")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"VDR (livingroom) OSD message"')]),t._v("           "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"LivingRoom:message"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VDR_LivingroomChannelUpDown")]),t._v("\t"),a("span",{attrs:{class:"token string"}},[t._v('"VDR Livingroom Channel Up/Down"')]),t._v(" "),a("span",{attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"LivingRoom:channel"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VDR_LivingroomChannel")]),t._v("        "),a("span",{attrs:{class:"token string"}},[t._v('"VDR Livingroom Channel"')]),t._v("         "),a("span",{attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"LivingRoom:channel"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VDR_LivingroomVolumeUpDown")]),t._v("\t"),a("span",{attrs:{class:"token string"}},[t._v('"VDR Livingroom Volume Up/Down"')]),t._v("  "),a("span",{attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"LivingRoom:volume"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VDR_LivingroomVolume")]),t._v("         "),a("span",{attrs:{class:"token string"}},[t._v('"VDR Livingroom Volume"')]),t._v("          "),a("span",{attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"LivingRoom:volume"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VDR_LivingroomRecording")]),t._v("      "),a("span",{attrs:{class:"token string"}},[t._v('"VDR (livingroom) Recording"')]),t._v("     "),a("span",{attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"LivingRoom:recording"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"switch-vdr-pc-on-if-tv-switch-on"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-vdr-pc-on-if-tv-switch-on","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch VDR PC on if TV switch on:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TV_PowerState")]),t._v("                "),a("span",{attrs:{class:"token string"}},[t._v('"TV Power State"')]),t._v("    "),a("span",{attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("nh"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"192.168.1.2"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VDR_LIVINGROOM_POWER_STATUS")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"VDR Power Status"')]),t._v("  "),a("span",{attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("nh"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"192.168.1.3"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" CheckTVStateOn\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" TV_PowerState "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VDR_LIVINGROOM_POWER_STATUS"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),a("span",{attrs:{class:"token constant"}},[t._v("OFF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t"),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VDR_LivingroomPower"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"switch-vdr-pc-off-if-tv-switch-off"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-vdr-pc-off-if-tv-switch-off","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch VDR PC off if TV switch off")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" CheckTVStateOff\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" TV_PowerState "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("OFF")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VDR_LIVINGROOM_POWER_STATUS"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VDR_LivingroomRecording"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token operator"}},[t._v("==")]),a("span",{attrs:{class:"token constant"}},[t._v("OFF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\t"),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VDR_LivingroomPower"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("OFF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);