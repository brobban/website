(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{867:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Visonic produces the Powermax alarm panel series (PowerMax, PowerMax+, PowerMaxExpress, PowerMaxPro and PowerMaxComplete) and the Powermaster alarm series (PowerMaster 10 and PowerMaster 30). This binding allows you to control the alarm panel (arm/disarm) and allows you to use the Visonic sensors (movement, door contact, ...) within openHAB.")]),t._v(" "),a("p",[t._v("The PowerMax provides support for a serial interface that can be connected to the machine running openHAB. The serial interface is not installed by default but can be ordered from any PowerMax vendor (called the Visonic RS-232 Adaptor Kit).")]),t._v(" "),a("p",[t._v("Visonic does not provide a specification of the RS232 protocol and, thus, the binding uses the available protocol specification given at the "),a("a",{attrs:{href:"http://www.domoticaforum.eu/viewtopic.php?f=68&t=6581",target:"_blank",rel:"noopener noreferrer"}},[t._v("​domoticaforum"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("The binding implemntation of this protocol is largely inspired by the "),a("a",{attrs:{href:"http://code.mios.com/trac/mios_visonic-powermax",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vera plugin"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This binding supports the following thing types:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("The alarm system is not discovered automatically. First you have to create manually a bridge thing, either of type ip or serial depending on how your openHAB server is connected to the alarm system. Then the binding will automatically discover all zones and X10 devices that are setup in your alarm system.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("There are no overall binding configuration settings that need to be set. All settings are through thing configuration parameters.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("The ip bridge thing requires the following configuration parameters:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("The serial bridge thing requires the following configuration parameters:")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Some notes:")]),t._v(" "),a("ul",[t._m(10),t._v(" "),a("li",[t._v("Also on Linux you may have issues with the USB if using two serial USB devices e.g. Powermax and RFXcom. See the wiki page for more on symlinking the USB ports "),a("a",{attrs:{href:"https://github.com/openhab/openhab1-addons/wiki/symlinks",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("The x10 thing requires the following configuration parameters:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("The zone thing requires the following configuration parameters:")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("The following channels are available:")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("demo.things:")]),t._v(" "),t._m(25),a("p",[t._v("demo.items:")]),t._v(" "),t._m(26),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"powermax-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powermax-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Powermax Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Thing")]),t._v(" "),a("th",[t._v("Thing Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ip")]),t._v(" "),a("td",[t._v("Bridge")]),t._v(" "),a("td",[t._v("The IP connection to the alarm system.")])]),t._v(" "),a("tr",[a("td",[t._v("serial")]),t._v(" "),a("td",[t._v("Bridge")]),t._v(" "),a("td",[t._v("The serial connection to the alarm system.")])]),t._v(" "),a("tr",[a("td",[t._v("x10")]),t._v(" "),a("td",[t._v("Thing")]),t._v(" "),a("td",[t._v("A X10 device.")])]),t._v(" "),a("tr",[a("td",[t._v("zone")]),t._v(" "),a("td",[t._v("Thing")]),t._v(" "),a("td",[t._v("A zone representing a physical device such as a door, window or a motion sensor.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ip-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip-connection","aria-hidden":"true"}},[this._v("#")]),this._v(" IP connection")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter Label")]),t._v(" "),a("th",[t._v("Parameter ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("IP address")]),t._v(" "),a("td",[t._v("ip")]),t._v(" "),a("td",[t._v("The IP address / The IP address to use for connecting to the Ethernet interface of the alarm system.")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("TCP port")]),t._v(" "),a("td",[t._v("tcpPort")]),t._v(" "),a("td",[t._v("The TCP port to use for connecting to the Ethernet interface of the alarm system.")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Motion reset delay")]),t._v(" "),a("td",[t._v("motionOffDelay")]),t._v(" "),a("td",[t._v("The delay in minutes to reset a motion detection.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("3")])]),t._v(" "),a("tr",[a("td",[t._v("Allow arming")]),t._v(" "),a("td",[t._v("allowArming")]),t._v(" "),a("td",[t._v("Enable or disable arming the alarm system from openHAB.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("Allow disarming")]),t._v(" "),a("td",[t._v("allowDisarming")]),t._v(" "),a("td",[t._v("Enable or disable disarming the alarm system from openHAB.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("PIN code")]),t._v(" "),a("td",[t._v("pinCode")]),t._v(" "),a("td",[t._v("The PIN code to use for arming/disarming the alarm system from openHAB. Not required except when Powerlink mode cannot be used.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Force standard mode")]),t._v(" "),a("td",[t._v("forceStandardMode")]),t._v(" "),a("td",[t._v("Force the standard mode rather than trying using the Powerlink mode.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("Panel type")]),t._v(" "),a("td",[t._v("panelType")]),t._v(" "),a("td",[t._v("Define the panel type. Only required when forcing the standard mode.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("PowerMaxPro")])]),t._v(" "),a("tr",[a("td",[t._v("Sync time")]),t._v(" "),a("td",[t._v("autoSyncTime")]),t._v(" "),a("td",[t._v("Automatic sync time at openHAB startup.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"serial-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serial-connection","aria-hidden":"true"}},[this._v("#")]),this._v(" Serial connection")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter Label")]),t._v(" "),a("th",[t._v("Parameter ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Serial port")]),t._v(" "),a("td",[t._v("serialPort")]),t._v(" "),a("td",[t._v("The serial port to use for connecting to the serial interface of the alarm system e.g. COM1 for Windows and /dev/ttyS0 or /dev/ttyUSB0 for Linux.")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Motion reset delay")]),t._v(" "),a("td",[t._v("motionOffDelay")]),t._v(" "),a("td",[t._v("The delay in minutes to reset a motion detection.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("3")])]),t._v(" "),a("tr",[a("td",[t._v("Allow arming")]),t._v(" "),a("td",[t._v("allowArming")]),t._v(" "),a("td",[t._v("Enable or disable arming the alarm system from openHAB.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("Allow disarming")]),t._v(" "),a("td",[t._v("allowDisarming")]),t._v(" "),a("td",[t._v("Enable or disable disarming the alarm system from openHAB.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("PIN code")]),t._v(" "),a("td",[t._v("pinCode")]),t._v(" "),a("td",[t._v("The PIN code to use for arming/disarming the alarm system from openHAB. Not required except when Powerlink mode cannot be used.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Force standard mode")]),t._v(" "),a("td",[t._v("forceStandardMode")]),t._v(" "),a("td",[t._v("Force the standard mode rather than trying using the Powerlink mode.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("Panel type")]),t._v(" "),a("td",[t._v("panelType")]),t._v(" "),a("td",[t._v("Define the panel type. Only required when forcing the standard mode.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("PowerMaxPro")])]),t._v(" "),a("tr",[a("td",[t._v("Sync time")]),t._v(" "),a("td",[t._v("autoSyncTime")]),t._v(" "),a("td",[t._v("Automatic sync time at openHAB startup.")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("On Linux, you may get an error stating the serial port cannot be opened when the Powermax binding tries to load.  You can get around this by adding the "),s("code",[this._v("openhab")]),this._v(" user to the "),s("code",[this._v("dialout")]),this._v(" group like this: "),s("code",[this._v("usermod -a -G dialout openhab")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"x10-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x10-device","aria-hidden":"true"}},[this._v("#")]),this._v(" X10 device")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter Label")]),t._v(" "),a("th",[t._v("Parameter ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Device number")]),t._v(" "),a("td",[t._v("deviceNumber")]),t._v(" "),a("td",[t._v("The device number.")]),t._v(" "),a("td",[t._v("true")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"zone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zone","aria-hidden":"true"}},[this._v("#")]),this._v(" Zone")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter Label")]),t._v(" "),a("th",[t._v("Parameter ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Zone number")]),t._v(" "),a("td",[t._v("zoneNumber")]),t._v(" "),a("td",[t._v("The zone number.")]),t._v(" "),a("td",[t._v("true")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Thing Types")]),t._v(" "),a("th",[t._v("Channel Type ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Access Mode")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("system_status")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("A short status summary of the system")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("system_armed")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Whether or not the system is armed")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("arm_mode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("System arm mode (accepted values: Disarmed, Stay, Armed, StayInstant, ArmedInstant, Night and NightInstant)")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("alarm_active")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Whether or not an alarm is active")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Whether or not the system is ready for arming")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("with_zones_bypassed")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Whether or not at least one zone is bypassed")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("trouble")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Whether or not a trouble is detected")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("alert_in_memory")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Whether or not an alert is saved in system memory")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("pgm_status")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("PGM status")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("System current mode (Standard, Powerlink or Download)")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("event_log_1 ... event_log_10")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Event log entry (1 is the most recent)")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("update_event_logs")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Switch command to update the event logs")])]),t._v(" "),a("tr",[a("td",[t._v("ip / serial")]),t._v(" "),a("td",[t._v("download_setup")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Switch command to download the setup")])]),t._v(" "),a("tr",[a("td",[t._v("x10")]),t._v(" "),a("td",[t._v("x10_status")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("X10 device status (accepted values: OFF, ON, DIM and BRIGHT)")])]),t._v(" "),a("tr",[a("td",[t._v("zone")]),t._v(" "),a("td",[t._v("tripped")]),t._v(" "),a("td",[t._v("Contact")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Whether or not the zone is tripped")])]),t._v(" "),a("tr",[a("td",[t._v("zone")]),t._v(" "),a("td",[t._v("armed")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Whether or not the zone is armed")])]),t._v(" "),a("tr",[a("td",[t._v("zone")]),t._v(" "),a("td",[t._v("last_trip")]),t._v(" "),a("td",[t._v("DateTime")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Timestamp when the zone was last tripped")])]),t._v(" "),a("tr",[a("td",[t._v("zone")]),t._v(" "),a("td",[t._v("low_battery")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Whether or not the sensor battery is low")])]),t._v(" "),a("tr",[a("td",[t._v("zone")]),t._v(" "),a("td",[t._v("bypassed")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Whether or not the zone is bypassed")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"console-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Console Commands")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The binding provides few specific commands you can use in the console. Enter the command "),s("code",[this._v("smarthome:powermax")]),this._v(" to get the usage of each available command.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("openhab> smarthome:powermax\nUsage: smarthome:powermax <bridgeUID> info_setup - information on setup\nUsage: smarthome:powermax <bridgeUID> download_setup - download setup\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The command "),s("code",[this._v("info_setup")]),this._v(" displays in the console informations about your current panel setup. The command "),s("code",[this._v("download_setup")]),this._v(" will trigger a new download of the panel setup.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Here is an example of command you can run: "),s("code",[this._v("smarthome:powermax powermax:serial:home info_setup")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"notes-limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes-limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes & Limitations")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("For Powerlink mode to work, the enrollment procedure has to be followed. If you don't enroll the Powerlink on the PowerMax the binding will operate in Standard mode, and if enrolled in Powerlink mode. On the newer software versions of the PowerMax the Powerlink enrollment is automatic, and the binding should only operate in 'Powerlink' mode (if enrollment is successful).")]),t._v(" "),a("li",[t._v("In Powerlink mode, the binding is downloading the panel setup at startup. When openHAB is starting, unfortunately this download is often failing on a RPI for an unclear reason (maybe too many things running at the same time). A retry mechanism is implemented in the binding to retry until 3 times with a delay of 1 minute between each try. My experience is that the download finally succeeds. In case it fails after all the retries, you still have the option to later trigger the download either by using the channel "),a("code",[t._v("download_setup")]),t._v(" or the appropriate console command.")]),t._v(" "),a("li",[t._v("Visonic does not provide a specification of the RS232 protocol and, thus, use this binding at your own risk.")]),t._v(" "),a("li",[t._v("The binding is not able to arm/disarm a particular partition.")]),t._v(" "),a("li",[t._v("The compatibility of the binding with the Powermaster alarm panel series is probably only partial.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("powermax"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("serial"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("home")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Alarm Home"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" serialPort"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"/dev/ttyUSB0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" allowArming"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" panelType"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"PowerMaxProPart"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoSyncTime"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("zone")]),t._v(" kitchen "),a("span",{attrs:{class:"token string"}},[t._v('"Window kitchen"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" zoneNumber"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("x10")]),t._v(" lamp1 "),a("span",{attrs:{class:"token string"}},[t._v('"Lamp 1"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceNumber"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SystemArmed")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"System armed"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:system_armed"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SystemArmMode")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"System arm mode"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:arm_mode"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("PGM")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"PGM"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:pgm_status"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SystemStatus")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"System status"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:system_status"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SystemReady")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"System ready"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:ready"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WithZonesBypassed")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"With zones bypassed"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:with_zones_bypassed"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AlarmActive")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Alarm active"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:alarm_active"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Trouble")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Trouble detected"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:trouble"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AlertInMem")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Alert in memory"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:alert_in_memory"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SystemMode")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"System mode"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:mode"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UpdateEventLogs")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Update Event logs"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:update_event_logs"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventLog1")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Event log 1"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:event_log_1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventLog2")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Event log 2"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:event_log_2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventLog3")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Event log 3"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:event_log_3"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventLog4")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Event log 4"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:event_log_4"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventLog5")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Event log 5"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:event_log_5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventLog6")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Event log 6"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:event_log_6"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventLog7")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Event log 7"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:event_log_7"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventLog8")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Event log 8"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:event_log_8"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventLog9")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Event log 9"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:event_log_9"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EventLog10")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Event log 10"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:event_log_10"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("DownloadSetup")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Download setup"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:serial:home:download_setup"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WindowKitchenTripped")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Tripped [%s]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <contact>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:zone:home:kitchen:tripped"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WindowKitchenArmed")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Armed"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:zone:home:kitchen:armed"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WindowKitcheneLastTrip")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Last trip"')]),a("span",{attrs:{class:"token function"}},[t._v(" <clock>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:zone:home:kitchen:last_trip"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WindowKitchenLowBattery")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Low bettary"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:zone:home:kitchen:low_battery"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("WindowKitchenBypassed")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Bypassed"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:zone:home:kitchen:bypassed"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Lamp1")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Lamp 1"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"powermax:x10:home:lamp1:x10_status"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"false"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="readme.md";s.default=n.exports}}]);