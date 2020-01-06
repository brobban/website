(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{511:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("This binding integrates the "),a("a",{attrs:{href:"https://www.sonos.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sonos Multi-Room Audio system"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("All available Sonos (playback) devices are supported by this binding. This includes the One, Play:1, Play:3, Play:5, Connect, Connect:Amp, Playbar, Playbase, Beam and Sub. The Bridge and Boost are not supported, but these devices do only have an auxiliary role in the Sonos network and do not have any playback capability. All supported Sonos devices are registered as an audio sink in the framework.")]),t._v(" "),a("p",[t._v("When being defined in a *.things file, the specific thing types One, PLAY1, PLAY3, PLAY5, PLAYBAR, PLAYBASE, Beam, CONNECT and CONNECTAMP should be used.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("The Sonos devices are discovered through UPnP in the local network and all devices are put in the Inbox. Beware that all Sonos devices have to be added to the local Sonos installation as described in the Sonos setup procedure, e.g. through the Sonos Controller software or smartphone app.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v('The binding has the following configuration options, which can be set for "binding:sonos":')]),t._v(" "),a("table",[t._m(6),t._v(" "),a("tbody",[t._m(7),t._v(" "),a("tr",[a("td",[t._v("callbackUrl")]),t._v(" "),a("td",[t._v("Callback URL")]),t._v(" "),a("td",[t._v("URL to use for playing notification sounds, e.g. "),a("a",{attrs:{href:"http://192.168.0.2:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.0.2:8080"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("no")])])])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("The devices support the following channels:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("demo.things:")]),t._v(" "),t._m(17),a("p",[t._v("demo.items:")]),t._v(" "),t._m(18),a("p",[t._v("demo.sitemap:")]),t._v(" "),t._m(19),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"sonos-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sonos-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Sonos Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Attention:")]),this._v("\nYou might run into trouble if your control system (the binding) is in another subnet than your Sonos device.\nSonos devices make use of multicast which in most cases needs additional router configuration outside of a single subnet.\nIf you observe communication errors (COMMUNICATION_ERROR/not registered), you might need to configure your router to increase the TTL of the packets send by your Sonos device.\nThis happens because of a TTL=1 for ALIVE packets send by Sonos devices, resulting in dropped packets after one hop.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Please note that these thing types are case sensitive (you need to define them "),e("strong",[this._v("exactly as stated above")]),this._v(").")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Parameter")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Description")]),this._v(" "),e("th",[this._v("Required")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("opmlUrl")]),this._v(" "),e("td",[this._v("OPML Service URL")]),this._v(" "),e("td",[this._v("URL for the OPML/tunein.com service")]),this._v(" "),e("td",[this._v("no")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('The Sonos Thing requires the UPnP UDN (Unique Device Name) as a configuration value in order for the binding to know how to access it.\nAll the Sonos UDN have the "RINCON_000E58D8403A0XXXX" format (value to be found via Sonos item in the Paper UI Inbox).\nAdditionally, a refresh interval, used to poll the Sonos device, can be specified (in seconds).\nYou can use the '),e("code",[this._v("notificationVolume")]),this._v(" property for setting a default volume (in percent) to be used to play notifications.\nIn the thing file, this looks e.g. like")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("sonos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("PLAY1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("udn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RINCON_000E58D8403A0XXXX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("refresh")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notificationVolume"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Type ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Access Mode")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Thing types")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("add")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Add the given Zone Player to the group of this Zone Player")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("alarm")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Set the first occurring alarm either ON or OFF. Alarms first have to be defined through the Sonos Controller app")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("alarmproperties")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Properties of the alarm currently running")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("alarmrunning")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Set to ON if the alarm was triggered")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("clearqueue")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Suppress all songs from the current queue")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("control")]),t._v(" "),a("td",[t._v("Player")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Control the Zone Player, e.g. PLAY/PAUSE/NEXT/PREVIOUS")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("coordinator")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("UDN of the coordinator for the current group")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("currentalbum")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Name of the album currently playing")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("currentalbumart")]),t._v(" "),a("td",[t._v("Image")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Cover art of the album currently playing")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("currentalbumarturl")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Cover art URL of the album currently playing")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("currentartist")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Name of the artist currently playing")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("currenttitle")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Title of the song currently playing")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("currenttrack")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Name of the current track or radio station currently playing")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("currenttrackuri")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("URI of the current track")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("currenttransporturi")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("URI of the current AV transport")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("favorite")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Play the given favorite entry. The favorite entry has to be predefined in the Sonos Controller app")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("led")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Set or get the status of the white LED on the front of the Zone Player")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("linein")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Indicator set to ON when the line-in of the Zone Player is connected")]),t._v(" "),a("td",[t._v("PLAY5, CONNECT, CONNECTAMP, PLAYBASE")])]),t._v(" "),a("tr",[a("td",[t._v("localcoordinator")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Indicator set to ON if the this Zone Player is the Zone Group Coordinator")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("mute")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Set or get the mute state of the master volume of the Zone Player")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("nightmode")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Enable or disable the night mode feature")]),t._v(" "),a("td",[t._v("PLAYBAR, PLAYBASE, Beam")])]),t._v(" "),a("tr",[a("td",[t._v("notificationsound")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Play a notification sound by a given URI")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("playlinein")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("This channel supports playing the audio source connected to the line-in of the zoneplayer identified by the Thing UID or UPnP UDN provided by the String.")]),t._v(" "),a("td",[t._v("PLAY5, CONNECT, CONNECTAMP, PLAYBAR, PLAYBASE, Beam")])]),t._v(" "),a("tr",[a("td",[t._v("playlist")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Play the given playlist. The playlist has to predefined in the Sonos Controller app")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("playqueue")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Play the songs from the current queue")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("playtrack")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Play the given track number from the current queue")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("playuri")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Play the given URI")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("publicaddress")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Put all Zone Players in one group, and stream audio from the line-in from the Zone Player that triggered the command")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("radio")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Play the given radio station. The radio station has to be predefined in the Sonos Controller app")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("remove")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Remove the given Zone Player from the group of this Zone Player")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("repeat")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Repeat the track or queue playback. The accepted values are OFF, ONE and ALL")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("restore")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Restore the state of the Zone Player")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("restoreall")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Restore the state of all the Zone Players")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("save")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Save the state of the Zone Player")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("saveall")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Save the state of all the Zone Players")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("shuffle")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Shuffle the queue playback")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("sleeptimer")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Set/show the duration of the SleepTimer in seconds")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("snooze")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Snooze the running alarm, if any, with the given number of minutes")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("speechenhancement")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Enable or disable the speech enhancement feature")]),t._v(" "),a("td",[t._v("PLAYBAR, PLAYBASE, Beam")])]),t._v(" "),a("tr",[a("td",[t._v("standalone")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Make the Zone Player leave its Group and become a standalone Zone Player")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("state")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("The State channel contains state of the Zone Player, e.g. PLAYING, STOPPED, ...")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("stop")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("Write "),a("code",[t._v("ON")]),t._v(" to this channel: Stops the Zone Player player.")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("tuneinstationid")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Provide the current TuneIn station id or play the TuneIn radio given by its station id")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("Dimmer")]),t._v(" "),a("td",[t._v("RW")]),t._v(" "),a("td",[t._v("Set or get the master volume of the Zone Player")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("zonegroupid")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Id of the Zone Group the Zone Player belongs to")]),t._v(" "),a("td",[t._v("all")])]),t._v(" "),a("tr",[a("td",[t._v("zonename")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("R")]),t._v(" "),a("td",[t._v("Name of the Zone associated to the Zone Player")]),t._v(" "),a("td",[t._v("all")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"audio-support"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#audio-support","aria-hidden":"true"}},[this._v("#")]),this._v(" Audio Support")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All supported Sonos devices are registered as an audio sink in the framework.\nAudio streams are treated as notifications, i.e. they are fed into the "),e("code",[this._v("notificationsound")]),this._v(" channel.\nThe "),e("code",[this._v("notificationsound")]),this._v(" channel change the volume of the audio sink to the value defined in the "),e("code",[this._v("notificationVolume")]),this._v(" property of the thing and restores it after finished playing.\nNote that the Sonos binding has a limit of 20 seconds for notification sounds.\nAny sound that is longer than that will be cut off.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("URL audio streams (e.g. an Internet radio stream) are an exception and do not get sent to the "),e("code",[this._v("notificationsound")]),this._v(" channel.\nInstead, these will be sent to the "),e("code",[this._v("playuri")]),this._v(" channel.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("sonos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("PLAY1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("living")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" udn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RINCON_000E58D8403A0XXXX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("refresh")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sonos")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <player>")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Player")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sonos_Controller")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Controller"')]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Sonos)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sonos:PLAY1:living:control"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sonos_Volume")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Volume [%.1f %%]"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <soundvolume>")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Sonos)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sonos:PLAY1:living:volume"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sonos_Mute")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mute"')]),t._v("            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <soundvolume_mute>")]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Sonos)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sonos:PLAY1:living:mute"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sonos_LED")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LED"')]),t._v("             "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <switch>")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Sonos)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sonos:PLAY1:living:led"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sonos_CurrentTrack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Now playing [%s]"')]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <text>")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Sonos)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sonos:PLAY1:living:currenttrack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sonos_State")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Status [%s]"')]),t._v("     "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <text>")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Sonos)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sonos:PLAY1:living:state"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sonos"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonos_Controller\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Slider")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonos_Volume\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonos_Mute\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonos_LED\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonos_CurrentTrack\t\t\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonos_State\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=s.exports}}]);