(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{657:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The Zigbee binding currently does not support the Dresden Elektronik Raspbee and Conbee Zigbee dongles.\nThe manufacturer provides a companion app called deCONZ together with the mentioned hardware.\ndeCONZ offers a documented real-time channel that this binding makes use of to bring support for all paired Zigbee sensors and switches.")]),t._v(" "),s("p",[t._v("deCONZ also acts as a HUE bridge.\nThis binding is meant to be used together with the HUE binding which makes the lights and plugs available.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("These configuration parameters are available:")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("The deCONZ bridge requires the IP address or hostname as a configuration value in order for the binding to know where to access it.\nIf needed you can specify an optional port for the HTTP interface or the Websocket.\nThe Websocket port can be filled automatically by requesting it via the HTTP interface - you only need to specify it if your deCONZ instance is running containerized.")]),t._v(" "),s("p",[t._v("The API key is an optional value.\nIf a deCONZ API key is available because it has already been created manually, it can also be entered as a configuration value.\nOtherwise the field can be left empty and the binding will generate the key automatically.\nFor this process the deCONZ bridge must be unlocked in the deCONZ software so that third party applications can register ("),s("a",{attrs:{href:"https://dresden-elektronik.github.io/deconz-rest-doc/getting_started/#unlock-the-gateway",target:"_blank",rel:"noopener noreferrer"}},[t._v("see deCONZ documentation"),s("OutboundLink")],1),t._v(").")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("If you use the textual configuration, the thing file without an API key will look like this, for example:")]),t._v(" "),t._m(9),s("p",[t._v("In this case, the API key is generated automatically as described above (the deCONZ bridge has to be unlocked).\nPlease note that the generated key cannot be written automatically to the "),s("code",[t._v(".thing")]),t._v(" file, and has to be set manually.\nThe generated key can be queried from the configuration using the openHAB console.\nTo do this log into the "),s("a",{attrs:{href:"https://www.openhab.org/docs/administration/console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("console"),s("OutboundLink")],1),t._v(" and use the command "),s("code",[t._v("things show")]),t._v(" to display the configuration parameters, e.g:")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),s("p",[t._v("The devices support some of the following channels:")]),t._v(" "),t._m(14),t._v(" "),s("p",[s("strong",[t._v("NOTE:")]),t._v(" Beside other non mandatory channels, the "),s("code",[t._v("battery_level")]),t._v(" and "),s("code",[t._v("battery_low")]),t._v(" channels will be added to the Thing during runtime if the sensor is battery-powered.\nThe specification of your sensor depends on the deCONZ capabilities.\nHave a detailed look for "),s("a",{attrs:{href:"https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Supported-Devices",target:"_blank",rel:"noopener noreferrer"}},[t._v("supported devices"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("The dimmer switch additionally supports a trigger channel.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"dresden-elektronik-deconz-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dresden-elektronik-deconz-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Dresden Elektronik deCONZ Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There is one bridge ("),e("code",[this._v("deconz")]),this._v(") that manages the connection to the deCONZ software instance.\nThese things are supported:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Device type")]),t._v(" "),s("th",[t._v("Resource Type")]),t._v(" "),s("th",[t._v("Thing type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Presence Sensor")]),t._v(" "),s("td",[t._v("ZHAPresence, CLIPPrensence")]),t._v(" "),s("td",[s("code",[t._v("presencesensor")])])]),t._v(" "),s("tr",[s("td",[t._v("Power Sensor")]),t._v(" "),s("td",[t._v("ZHAPower, CLIPPower")]),t._v(" "),s("td",[s("code",[t._v("powersensor")])])]),t._v(" "),s("tr",[s("td",[t._v("Consumption Sensor")]),t._v(" "),s("td",[t._v("ZHAConsumption")]),t._v(" "),s("td",[s("code",[t._v("consumptionsensor")])])]),t._v(" "),s("tr",[s("td",[t._v("Switch")]),t._v(" "),s("td",[t._v("ZHASwitch")]),t._v(" "),s("td",[s("code",[t._v("switch")])])]),t._v(" "),s("tr",[s("td",[t._v("Light Sensor")]),t._v(" "),s("td",[t._v("ZHALightLevel")]),t._v(" "),s("td",[s("code",[t._v("lightsensor")])])]),t._v(" "),s("tr",[s("td",[t._v("Temperature Sensor")]),t._v(" "),s("td",[t._v("ZHATemperature")]),t._v(" "),s("td",[s("code",[t._v("temperaturesensor")])])]),t._v(" "),s("tr",[s("td",[t._v("Humidity Sensor")]),t._v(" "),s("td",[t._v("ZHAHumidity")]),t._v(" "),s("td",[s("code",[t._v("humiditysensor")])])]),t._v(" "),s("tr",[s("td",[t._v("Pressure Sensor")]),t._v(" "),s("td",[t._v("ZHAPressure")]),t._v(" "),s("td",[s("code",[t._v("pressuresensor")])])]),t._v(" "),s("tr",[s("td",[t._v("Open/Close Sensor")]),t._v(" "),s("td",[t._v("ZHAOpenClose")]),t._v(" "),s("td",[s("code",[t._v("openclosesensor")])])]),t._v(" "),s("tr",[s("td",[t._v("Water Leakage Sensor")]),t._v(" "),s("td",[t._v("ZHAWater")]),t._v(" "),s("td",[s("code",[t._v("waterleakagesensor")])])]),t._v(" "),s("tr",[s("td",[t._v("Alarm Sensor")]),t._v(" "),s("td",[t._v("ZHAAlarm")]),t._v(" "),s("td",[s("code",[t._v("alarmsensor")])])]),t._v(" "),s("tr",[s("td",[t._v("Vibration Sensor")]),t._v(" "),s("td",[t._v("ZHAVibration")]),t._v(" "),s("td",[s("code",[t._v("vibrationsensor")])])]),t._v(" "),s("tr",[s("td",[t._v("deCONZ Artificial Daylight Sensor")]),t._v(" "),s("td",[t._v("deCONZ specific: simulated sensor")]),t._v(" "),s("td",[s("code",[t._v("daylightsensor")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("deCONZ software instances are discovered automatically in the same subnet.\nSensors, switches are discovered as soon as a "),e("code",[this._v("deconz")]),this._v(" bridge Thing comes online.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("host")]),t._v(" "),s("td",[t._v("Host address (hostname / ip) of deCONZ interface")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("n/a")])]),t._v(" "),s("tr",[s("td",[t._v("httpPort")]),t._v(" "),s("td",[t._v("Port of deCONZ HTTP interface")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("80")])]),t._v(" "),s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("Port of deCONZ Websocket (optional, can be filled automatically) "),s("strong",[t._v("(Advanced)")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("n/a")])]),t._v(" "),s("tr",[s("td",[t._v("apikey")]),t._v(" "),s("td",[t._v("Authorization API key (optional, can be filled automatically)")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("n/a")])]),t._v(" "),s("tr",[s("td",[t._v("timeout")]),t._v(" "),s("td",[t._v("Timeout for asynchronous HTTP requests (in milliseconds)")]),t._v(" "),s("td",[t._v("integer")]),t._v(" "),s("td",[t._v("2000")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"textual-thing-configuration-retrieving-an-api-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#textual-thing-configuration-retrieving-an-api-key","aria-hidden":"true"}},[this._v("#")]),this._v(" Textual Thing Configuration - Retrieving an API Key")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("deconz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("deconz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("homeserver")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.10"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("things show deconz:deconz:homeserver\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Afterwards the API key has to be inserted in the "),e("code",[this._v(".thing")]),this._v(" file as "),e("code",[this._v("apikey")]),this._v(" configuration value, e.g.:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("deconz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("deconz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("homeserver")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" apikey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABCDEFGHIJ"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Type ID")]),t._v(" "),s("th",[t._v("Item Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Access Mode")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Thing types")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("presence")]),t._v(" "),s("td",[t._v("Switch")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Status of presence: "),s("code",[t._v("ON")]),t._v(" = presence; "),s("code",[t._v("OFF")]),t._v(" = no-presence")]),t._v(" "),s("td",[t._v("presencesensor")])]),t._v(" "),s("tr",[s("td",[t._v("last_updated")]),t._v(" "),s("td",[t._v("DateTime")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Timestamp when the sensor was last updated")]),t._v(" "),s("td",[t._v("all, except daylightsensor")])]),t._v(" "),s("tr",[s("td",[t._v("power")]),t._v(" "),s("td",[t._v("Number:Power")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Current power usage in Watts")]),t._v(" "),s("td",[t._v("powersensor, sometimes for consumptionsensor")])]),t._v(" "),s("tr",[s("td",[t._v("consumption")]),t._v(" "),s("td",[t._v("Number:Energy")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Current power usage in Watts/Hour")]),t._v(" "),s("td",[t._v("consumptionsensor")])]),t._v(" "),s("tr",[s("td",[t._v("voltage")]),t._v(" "),s("td",[t._v("Number:ElectricPotential")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Current voltage in V")]),t._v(" "),s("td",[t._v("some powersensors")])]),t._v(" "),s("tr",[s("td",[t._v("current")]),t._v(" "),s("td",[t._v("Number:ElectricCurrent")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Current current in mA")]),t._v(" "),s("td",[t._v("some powersensors")])]),t._v(" "),s("tr",[s("td",[t._v("button")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Last pressed button id on a switch")]),t._v(" "),s("td",[t._v("switch")])]),t._v(" "),s("tr",[s("td",[t._v("lightlux")]),t._v(" "),s("td",[t._v("Number:Illuminance")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Current light illuminance in Lux")]),t._v(" "),s("td",[t._v("lightsensor")])]),t._v(" "),s("tr",[s("td",[t._v("light_level")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Current light level")]),t._v(" "),s("td",[t._v("lightsensor")])]),t._v(" "),s("tr",[s("td",[t._v("dark")]),t._v(" "),s("td",[t._v("Switch")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Light level is below the darkness threshold.")]),t._v(" "),s("td",[t._v("lightsensor, sometimes for presencesensor")])]),t._v(" "),s("tr",[s("td",[t._v("daylight")]),t._v(" "),s("td",[t._v("Switch")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Light level is above the daylight threshold.")]),t._v(" "),s("td",[t._v("lightsensor")])]),t._v(" "),s("tr",[s("td",[t._v("temperature")]),t._v(" "),s("td",[t._v("Number:Temperature")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Current temperature in ˚C")]),t._v(" "),s("td",[t._v("temperaturesensor, some Xiaomi sensors")])]),t._v(" "),s("tr",[s("td",[t._v("humidity")]),t._v(" "),s("td",[t._v("Number:Dimensionless")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Current humidity in %")]),t._v(" "),s("td",[t._v("humiditysensor")])]),t._v(" "),s("tr",[s("td",[t._v("pressure")]),t._v(" "),s("td",[t._v("Number:Pressure")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Current pressure in hPa")]),t._v(" "),s("td",[t._v("pressuresensor")])]),t._v(" "),s("tr",[s("td",[t._v("open")]),t._v(" "),s("td",[t._v("Contact")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Status of contacts: "),s("code",[t._v("OPEN")]),t._v("; "),s("code",[t._v("CLOSED")])]),t._v(" "),s("td",[t._v("openclosesensor")])]),t._v(" "),s("tr",[s("td",[t._v("waterleakage")]),t._v(" "),s("td",[t._v("Switch")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Status of water leakage: "),s("code",[t._v("ON")]),t._v(" = water leakage detected; "),s("code",[t._v("OFF")]),t._v(" = no water leakage detected")]),t._v(" "),s("td",[t._v("waterleakagesensor")])]),t._v(" "),s("tr",[s("td",[t._v("alarm")]),t._v(" "),s("td",[t._v("Switch")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Status of an alarm: "),s("code",[t._v("ON")]),t._v(" = alarm was triggered; "),s("code",[t._v("OFF")]),t._v(" = no alarm")]),t._v(" "),s("td",[t._v("alarmsensor")])]),t._v(" "),s("tr",[s("td",[t._v("tampered")]),t._v(" "),s("td",[t._v("Switch")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Status of a zone: "),s("code",[t._v("ON")]),t._v(" = zone is being tampered; "),s("code",[t._v("OFF")]),t._v(" = zone is not tampered")]),t._v(" "),s("td",[t._v("any IAS sensor")])]),t._v(" "),s("tr",[s("td",[t._v("vibration")]),t._v(" "),s("td",[t._v("Switch")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Status of vibration: "),s("code",[t._v("ON")]),t._v(" = vibration was detected; "),s("code",[t._v("OFF")]),t._v(" = no vibration")]),t._v(" "),s("td",[t._v("alarmsensor")])]),t._v(" "),s("tr",[s("td",[t._v("light")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Light level: "),s("code",[t._v("Daylight")]),t._v(","),s("code",[t._v("Sunset")]),t._v(","),s("code",[t._v("Dark")])]),t._v(" "),s("td",[t._v("daylightsensor")])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Sun position: "),s("code",[t._v("130")]),t._v(" = dawn; "),s("code",[t._v("140")]),t._v(" = sunrise; "),s("code",[t._v("190")]),t._v(" = sunset; "),s("code",[t._v("210")]),t._v(" = dusk")]),t._v(" "),s("td",[t._v("daylightsensor")])]),t._v(" "),s("tr",[s("td",[t._v("battery_level")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Battery level (in %)")]),t._v(" "),s("td",[t._v("any battery-powered sensor")])]),t._v(" "),s("tr",[s("td",[t._v("battery_low")]),t._v(" "),s("td",[t._v("Switch")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("R")]),t._v(" "),s("td",[t._v("Battery level low: "),s("code",[t._v("ON")]),t._v("; "),s("code",[t._v("OFF")])]),t._v(" "),s("td",[t._v("any battery-powered sensor")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"trigger-channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trigger-channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Trigger Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Type ID")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Thing types")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("buttonevent")]),t._v(" "),s("td",[t._v("Event for switch pressed.")]),t._v(" "),s("td",[t._v("switch")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"things-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#things-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Things file")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("deconz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("deconz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("homeserver")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" apikey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABCDEFGHIJ"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    presencesensor      livingroom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("presence     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Livingroom Presence"')]),t._v("       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    temperaturesensor   livingroom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("temperature  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Livingroom Temperature"')]),t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    humiditysensor      livingroom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("humidity     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Livingroom Humidity"')]),t._v("       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    pressuresensor      livingroom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pressure     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Livingroom Pressure"')]),t._v("       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    openclosesensor     livingroom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("window       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Livingroom Window"')]),t._v("         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    switch              "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("livingroom")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("hue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tap      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Livingroom Hue Tap"')]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    waterleakagesensor  basement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("water"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("leakage  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Basement Water Leakage"')]),t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    alarmsensor         basement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alarm          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Basement Alarm Sensor"')]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"items-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#items-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Items file")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Presence")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Presence Livingroom [%s]"')]),t._v("         "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <motion>")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deconz:presencesensor:homeserver:livingroom-presence:presence"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Temperature")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temperature Livingroom [%.1f °C]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deconz:temperaturesensor:homeserver:livingroom-temperature:temperature"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimensionless")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Humidity")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Humidity Livingroom [%.1f %%]"')]),t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <humidity>")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deconz:humiditysensor:homeserver:livingroom-humidity:humidity"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Pressure")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Pressure")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pressure Livingroom [%.1f hPa]"')]),t._v("   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <pressure>")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deconz:pressuresensor:homeserver:livingroom-pressure:pressure"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Contact")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Window")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Window Livingroom [%s]"')]),t._v("           "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <door>")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deconz:openclosesensor:homeserver:livingroom-window:open"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Basement_Water_Leakage")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Basement Water Leakage [%s]"')]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deconz:waterleakagesensor:homeserver:basement-water-leakage:waterleakage"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Basement_Alarm")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Basement Alarm Triggered [%s]"')]),t._v("                     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deconz:alarmsensor:homeserver:basement-alarm:alarm"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example trigger rule"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deconz:switch:homeserver:livingroom-hue-tap:buttonevent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("triggered")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("34")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hue Tap Button 1 pressed")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);e.default=r.exports}}]);