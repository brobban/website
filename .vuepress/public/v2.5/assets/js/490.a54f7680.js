(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{704:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("The console offers the option to:")]),e._v(" "),s("ul",[s("li",[e._v("Monitor the "),s("router-link",{attrs:{to:"./logging.html#karaf-console"}},[e._v("log")]),e._v(" in realtime")],1),e._v(" "),s("li",[e._v("Manage "),s("router-link",{attrs:{to:"./bundles.html"}},[e._v("bundles")])],1),e._v(" "),s("li",[e._v("Execute "),s("router-link",{attrs:{to:"./runtime.html"}},[e._v("runtime commands")])],1)]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("The method to access the console depends on how openHAB was started.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("The console can also be reached via secure shell connection ("),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Secure_Shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSH"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("p",[e._v("To reach the console using SSH, use the following command to connect to the localhost interface on TCP port 8101:")]),e._v(" "),e._m(5),e._m(6),e._v(" "),s("p",[e._v("A security warning is expected upon the first connection:")]),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),s("p",[e._v("The first successful connection triggers generation of the Karaf remote console key and will take a few seconds longer than subsequent attempts.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("After successful connection and authentication, the console will appear:")]),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),s("p",[e._v("The session is ended by using the logout command:")]),e._v(" "),e._m(20),e._m(21),e._v(" "),e._m(22),e._v(" "),s("p",[e._v("Changing the console password, interface, and port is described here.")]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),s("p",[e._v("To enable binding to all interfaces, uncomment the line")]),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),s("hr"),e._v(" "),s("p",[e._v("Please check the "),s("a",{attrs:{href:"http://karaf.apache.org/manual/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Karaf reference"),s("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"the-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-console","aria-hidden":"true"}},[this._v("#")]),this._v(" The Console")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"accessing-the-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-console","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing the Console")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("When started in interactive mode using the provided command line scripts (e.g. "),s("code",[e._v("start.sh")]),e._v(" or "),s("code",[e._v("start.bat")]),e._v("), openHAB naturally transitions directly to the console prompt.")]),e._v(" "),s("li",[e._v("When started as a service (i.e. when openHAB is running as a background process), access to the console is given by running the "),s("code",[e._v("$OPENHAB_RUNTIME/bin/client")]),e._v(" ("),s("code",[e._v("client.bat")]),e._v(" for Windows) script or by "),s("a",{attrs:{href:"#connecting-via-ssh"}},[e._v("connecting via SSH")]),e._v(".\nLinux package based installations can also use the command "),s("code",[e._v("openhab-cli console")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The default username/password is "),t("strong",[this._v("openhab:habopen")]),this._v(", so enter "),t("code",[this._v("habopen")]),this._v(" at the password prompt.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"connecting-via-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-via-ssh","aria-hidden":"true"}},[this._v("#")]),this._v(" Connecting via SSH")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("ssh")]),this._v(" -p "),t("span",{pre:!0,attrs:{class:"token number"}},[this._v("8101")]),this._v(" openhab@localhost\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Note:")]),this._v(" By default, connection is only allowed from localhost, i.e. only from the machine running openHAB.\nConnections are intentionally not allowed from remote hosts due to security concerns.\nTo change this, see "),t("a",{attrs:{href:"#bind-console-to-all-interfaces"}},[this._v("Bind Console to All Interfaces")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("The authenticity of host '[localhost]:8101 ([127.0.0.1]:8101)' can't be established.\nRSA key fingerprint is SHA256:XjQxBPit+K5m3HuSsEUI/842NTCxLTu3EMGGBuQKNVg.\nAre you sure you want to continue connecting (yes/no)?\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Enter "),t("code",[this._v("yes")]),this._v(" to proceed.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Warning: Permanently added '[localhost]:8101' (RSA) to the list of known hosts.\nPassword authentication\nPassword:\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The default username/password is "),t("strong",[this._v("openhab:habopen")]),this._v(", so enter "),t("code",[this._v("habopen")]),this._v(" at the password prompt.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Note:")]),this._v(" On slower systems, such as Raspberry Pi or Pine64, this first SSH connection may even time out.\nIf this happens, simply try connecting again until successful.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"using-the-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-console","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the Console")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("                          __  _____    ____\n  ____  ____  ___  ____  / / / /   |  / __ )\n / __ \\/ __ \\/ _ \\/ __ \\/ /_/ / /| | / __  |\n/ /_/ / /_/ /  __/ / / / __  / ___ |/ /_/ /\n\\____/ .___/\\___/_/ /_/_/ /_/_/  |_/_____/\n    /_/                        2.2.0\n                               Release Build\n\nHit '<tab>' for a list of available commands\nand '[cmd] --help' for help on a specific command.\nHit '<ctrl-d>' or type 'system:shutdown' or 'logout' to shutdown openHAB.\n\nopenhab>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The command "),t("code",[this._v("help")]),this._v(" is listing all available commands or describes a specific subsystem/command:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("openhab> help\n...\nopenhab> help bundle\n...\nopenhab> help bundle:stop\n...\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('The console also supports auto-completion during input.\nAuto-completion proposes possible commands based on the current input and is triggered by a <TAB> press on your keyboard.\nSo for example entering "'),t("em",[this._v("bund")]),this._v('" and pressing the <TAB> key will first extend to the only viable candidate "bundle", a subsequent <TAB> press will result in:')])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("openhab> bundle\nbundle                   bundle:capabilities      bundle:classes           bundle:diag              bundle:dynamic-import\nbundle:find-class        bundle:headers           bundle:id                bundle:info              bundle:install\nbundle:list              bundle:load-test         bundle:refresh           bundle:requirements      bundle:resolve\nbundle:restart           bundle:services          bundle:start             bundle:start-level       bundle:stop\nbundle:tree-show         bundle:uninstall         bundle:update            bundle:watch\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Another useful feature is the combination of the "),t("code",[this._v("|")]),this._v(" (pipe) and "),t("code",[this._v("grep")]),this._v(" functionality, which can be used to filter output:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("openhab> bundle:list | grep openHAB\n164 | Active    |  90 | 2.0.0.201607210102    | openHAB Core\n165 | Active    |  80 | 2.0.0.201607210102    | openHAB Karaf Integration\n195 | Active    |  80 | 2.0.0.201607210102    | openHAB 1.x Compatibility Layer\n196 | Active    |  80 | 2.0.0.201607210102    | openHAB REST Documentation\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("openhab> logout\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Learn about all available commands by using the initially introduced "),t("code",[this._v("help")]),this._v(" command.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"modifying-the-console-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modifying-the-console-settings","aria-hidden":"true"}},[this._v("#")]),this._v(" Modifying the Console Settings")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"console-settings-files-and-directories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#console-settings-files-and-directories","aria-hidden":"true"}},[this._v("#")]),this._v(" Console Settings Files and Directories")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The pertinent files controlling console settings are stored under "),t("code",[this._v("$OPENHAB_USERDATA/etc/")]),this._v(":")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("File")]),e._v(" "),s("th",[e._v("Purpose")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("org.apache.karaf.shell.cfg")])]),e._v(" "),s("td",[e._v("Controls most console settings")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("users.properties")])]),e._v(" "),s("td",[e._v("Stores console password")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The exact locations of these files will vary based on your platform and installation method, e.g. "),t("code",[this._v("/var/lib/openhab2/etc/")]),this._v(" or "),t("code",[this._v("openhab2/userdata/etc/")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Be aware that the these files may get overwritten when upgrading openHAB.\nTo add custom parameters or overwrite the default values, you can change the configuration file "),t("code",[this._v("runtime.cfg")]),this._v(" which can be found in the "),t("code",[this._v("$OPENHAB_CONF/services")]),this._v(" directory, e.g. "),t("code",[this._v("/etc/openhab2/services/runtime.cfg")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"changing-the-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-password","aria-hidden":"true"}},[this._v("#")]),this._v(" Changing the Password")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The password is stored in the file "),s("code",[e._v("users.properties")]),e._v(", located in the "),s("code",[e._v("etc")]),e._v(" directory as "),s("a",{attrs:{href:"#console-settings-files-and-directories"}},[e._v("mentioned above")]),e._v(".\nBy default, the line with the password contains the text "),s("code",[e._v("openhab =")]),e._v(", followed by the current password (e.g. "),s("code",[e._v("habopen")]),e._v(") or a password hash (e.g. "),s("code",[e._v("{CRYPT}4AE1A0FD...{CRYPT}")]),e._v(").")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To change the authentication password edit the file manually, replacing the password or password hash (including "),t("code",[this._v("{CRYPT}")]),this._v(") with your new password in clear text.\nAlternately, run the following Linux shell command, which will perform the replacement for you.\nSubstitute "),t("code",[this._v("securePassword")]),this._v(" with your desired password.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[e._v("sudo sed "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("e "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"s/openhab = .*,/openhab = securePassword,/g"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("lib"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("openhab2"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("properties\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Depending on your system, you may have to "),t("a",{attrs:{href:"#console-settings-files-and-directories"}},[this._v("change the directory")]),this._v(" at the end of the command.\nPlease restart openHAB for the changes to take effect. The clear text password will be replaced by a unique cryptographic password hash.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"bind-console-to-all-interfaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bind-console-to-all-interfaces","aria-hidden":"true"}},[this._v("#")]),this._v(" Bind Console to All Interfaces")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The network interface configuration is defined in the file "),s("code",[e._v("org.apache.karaf.shell.cfg")]),e._v(", located in the "),s("code",[e._v("etc")]),e._v(" directory as "),s("a",{attrs:{href:"#console-settings-files-and-directories"}},[e._v("mentioned above")]),e._v(".\nAs this file may get overwritten when upgrading openHAB, you can change this parameter in the "),s("code",[e._v("runtime.cfg")]),e._v(" file which can be found in the "),s("code",[e._v("$OPENHAB_CONF/services")]),e._v(" directory, e.g. "),s("code",[e._v("/etc/openhab2/services/runtime.cfg")]),e._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The "),s("code",[e._v("sshHost")]),e._v(" entry controls the interface address to bind to.\n"),s("code",[e._v("sshHost = 127.0.0.1")]),e._v(" (localhost) is the default due to obvious security reasons.\nIf you are on a local network or you are fully aware of all risks of exposing your system to the public, you can change the bind address.\nReplace the "),s("code",[e._v("sshHost")]),e._v(" IP "),s("code",[e._v("127.0.0.1")]),e._v(" by "),s("code",[e._v("0.0.0.0")]),e._v(" to bind to all available network interfaces.\nPlease be aware, that the console will now be accessible from all devices in your subnet and is only secured by the password defined in "),s("code",[e._v("users.properties")]),e._v(" (same path).\nYou should thereby "),s("a",{attrs:{href:"#changing-the-password"}},[e._v("change the password")]),e._v(".\nDepending on your network configuration the console may also be exposed to the public internet, so check your routing and firewall configuration.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("#org.apache.karaf.shell:sshHost = 0.0.0.0")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("in "),t("code",[this._v("services/runtime.cfg")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"change-the-port-number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-the-port-number","aria-hidden":"true"}},[this._v("#")]),this._v(" Change the Port Number")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The SSH port configuration is done through the file "),s("code",[e._v("org.apache.karaf.shell.cfg")]),e._v(", located in the "),s("code",[e._v("etc")]),e._v(" directory as "),s("a",{attrs:{href:"#console-settings-files-and-directories"}},[e._v("mentioned above")]),e._v(".\nThe "),s("code",[e._v("sshPort")]),e._v(" entry controls the port number.\n"),s("code",[e._v("sshPort = 8101")]),e._v(" is the default, but can be changed to any available port per your choosing.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Alternately, run the following Linux shell command, which will perform the replacement for you.\nSubstitute "),t("code",[this._v("1234")]),this._v(" with your desired port number.\nDepending on your system, you may have to substitute "),t("a",{attrs:{href:"#console-settings-files-and-directories"}},[this._v("the directory")]),this._v(" at the end of the command.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[e._v("sudo sed "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("e "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"s/sshPort = .*/sshPort = 1234/g"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("lib"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("openhab2"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("karaf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("shell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("cfg\n")])])])}],!1,null,null,null);t.default=a.exports}}]);