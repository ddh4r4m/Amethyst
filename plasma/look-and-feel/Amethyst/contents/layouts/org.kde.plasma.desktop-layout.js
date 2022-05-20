var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "-1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "480",
                    "DialogWidth": "640"
                },
                "/General": {
                    "showToolbox": "false"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/lara/Imágenes/stretched-1366-768-320259.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "start-here-kde"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Preferences": {
                            "DesktopLabelsStyle": 1
                        },
                    },
                    "plugin": "org.kde.plasma.virtualdesktopbar"
                },
                {
                  "config": {
                      "/": {
                          "immutability": "1"
                      },
                      "/Configuration": {
                          "PreloadWeight": "0"
                      },
                      "/Configuration/General": {
                          "length": "1108"
                      }
                  },
                  "plugin": "org.kde.plasma.panelspacer"
              },
              {
                "config": {
                    "/": {
                        "immutability": "1"
                    },
                    "/Configuration": {
                        "PreloadWeight": "0"
                    }
                },
                "plugin": "org.kde.plasma.icontasks"
            },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/General": {
                            "length": "1108"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1",
                            "showDate":false
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "82",
                    "DialogWidth": "1366"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.8,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 80.375,
            "minimumLength": 80.375,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
