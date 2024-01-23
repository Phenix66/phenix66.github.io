var relearn_search_index = [
  {
    "breadcrumb": "Phenix66",
    "content": "9001 times better than Windows.\n",
    "description": "",
    "tags": null,
    "title": "Linux",
    "uri": "/linux/index.html"
  },
  {
    "breadcrumb": "Phenix66 \u003e Linux",
    "content": "Boot Process POST Bootloader GRUB: Stage 1 # Loads stage 1.5 Stage 1.5 # Provides filesystem support, loads stage 2 Stage 2 # Contains the bulk of the bootloader, allows users to select kernel and kernel boot options. Loads kernel into RAM Solaris (pre-10 1/06) mboot pboot bootblk Kernel Init initrd or initramfs Provides temp filesystem required to load kernel modules and drivers User Space Init SysV Serial, starts processes one after the other When first booting up, kill scripts will generally not be ran init (PID 1) # Ancestor of all other processes /etc/inittab Defines default run level Tells the system what to do when rebooted or run level is changed Red Hat: /etc/rc.d/ Startup scripts /etc/rc.d/init.d/ Contains actual service control scripts /etc/rc.d/rc.sysinit Config to be run before other services. Time zone, hostname, etc /etc/rc.d/rc.local Config to be run after services are up. Typically system specific such as VPNs Debian: /etc/rc\u003c#\u003e.d/ /etc/init.d/rcS equivalent to rc.sysinit upstart Can run steps in parallel Init reads .conf files in /etc/init One of those scripts runs /etc/rc.d/rc script for desired runlevel. This provides the SysV backwards compatiability systemd Can run steps in parallel /usr/lib/systemd/systemd (PID 1) # May also be /sbin/init (symbolic link to systemd) Units Service # Daemons Socket # IPC and network Target # Similar to runlevel, groups units together during boot up Located in /etc/systemd/system and /usr/lib/systemd/system Units in /etc take precedence States Load Did it successfully read the unit’s configuration file? Active Is it running? Sub Low-level unit activation state /etc/systemd/system/default.target Symbolic link to default target SMF # Solaris 10+ Can run steps in parallel Milestones Replaces runlevels /etc/svc/repository.db Config database Shells Types https://phoenixnap.com/kb/linux-shells\nhttps://www.freecodecamp.org/news/linux-shells-explained/\nProfile Loading https://youngstone89.medium.com/unix-introduction-bash-startup-files-loading-order-562543ac12e9\nhttps://access.redhat.com/solutions/452073\nLogin ",
    "description": "",
    "tags": null,
    "title": "Basics",
    "uri": "/linux/basics/index.html"
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
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Phenix66",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]