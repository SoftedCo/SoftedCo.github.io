const documentationUrl = 'https://softedco.github.io/CrazyGamesDeveloperToolKit';
const versionUrl = 'https://softedco.github.io/CrazyGamesDeveloperToolKit/version';

class CGDTK {
    getInfo() {
        return {
            id: 'CGDTK',
            color1: '#6937b9',
            color2: '#27193f',
            color3: '#27193f',
            name: 'CrazyGames Developer ToolKit',
            blocks: [
                {
                    opcode: 'documentation',
                    blockType: Scratch.BlockType.BUTTON,
                    text: 'Open documentation'
                },
                {
                    opcode: 'version',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Extension`s [TYPE] version',
                    arguments: {
                        TYPE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'versions',
                            defaultValue: 'current'
                        }
                    }
                },
                {
                    opcode: 'userInfo',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Get info about user`s [OB] [NV]',
                    arguments: {
                        OB: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'osOrBrowser',
                            defaultValue: 'OS'
                        },
                        NV: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'nameOrVersion',
                            defaultValue: 'name'
                        }
                    }
                },
                {
                    opcode: 'countryOrDeviceUserInfo',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Get info about user`s [CD]',
                    arguments: {
                        CD: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'countryOrDevice',
                            defaultValue: 'country code'
                        }
                    }
                },
                {
                    opcode: 'inviteLinkGenerator',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Generate an invite link with [DATA]',
                    arguments: {
                        DATA: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'data'
                        }
                    }
                },
                {
                    opcode: 'inviteLinkReciever',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Invite link data'
                },
                {
                    opcode: 'detector',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'Is [DETECTION] active?',
                    arguments: {
                        DETECTION: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'detections',
                            defaultValue: 'Adblock'
                        }
                    }
                },
                {
                    opcode: 'adState',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'Is an ad break at the [STATE] state?',
                    arguments: {
                        STATE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'adStates',
                            defaultValue: 'start'
                        }
                    }
                },
                {
                    opcode: 'eventListener',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '[ACT] an event listener',
                    arguments: {
                        ACT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'eventListenerActions',
                            defaultValue: 'Install'
                        }
                    }
                },
                {
                    opcode: 'loadingTrigger',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set loading state at [STATE]',
                    arguments: {
                        STATE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'loadingStates',
                            defaultValue: 'started'
                        }
                    }
                },
                {
                    opcode: 'gameplayTrigger',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set gameplay state at [STATE]',
                    arguments: {
                        STATE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'gameplayStates',
                            defaultValue: 'started/resumed'
                        }
                    }
                },
                {
                    opcode: 'adBreak',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Start a [TYPE] ad break',
                    arguments: {
                        TYPE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'adTypes',
                            defaultValue: 'rewarded'
                        }
                    }
                },
                {
                    opcode: 'adBanner',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Add [BC] with [RES] resolution',
                    arguments: {
                        BC: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'bannerOrContainer',
                            defaultValue: 'an ad banner'
                        },
                        RES: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'resolution',
                            defaultValue: '300*250'
                        }
                    }
                },
                {
                    opcode: 'bannerRemove',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Remove [BC]',
                    arguments: {
                        BC: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'bannerOrContainer',
                            defaultValue: 'a responsive banner container'
                        }
                    }
                },
                {
                    opcode: 'pageScroll',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '[ACT] page scroll',
                    arguments: {
                        ACT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'pageScrollActions',
                            defaultValue: 'Disable'
                        }
                    }
                }
            ],
            menus: {
                versions: {
                    items: ['current','up-to-date']
                },
                adTypes: {
                    items: ['rewarded','midgame']
                },
                adStates: {
                    items: ['start','stop','error']
                },
                eventListenerActions: {
                    items: ['Install','Remove']
                },
                pageScrollActions: {
                    items: ['Enable','Disable']
                },
                loadingStates: {
                    items: ['started','stopped']
                },
                gameplayStates: {
                    items: ['started/resumed','stopped/paused','celebrated']
                },
                resolution: {
                    items: ['970*90','320*50','160*600','336*280','728*90','300*600','468*60','970*250','300*250','250*250','120*600']
                },
                bannerOrContainer: {
                    items: ['an ad banner','a responsive banner container']
                },
                osOrBrowser: {
                    items: ['OS','browser']
                },
                nameOrVersion: {
                    items: ['name','version']
                },
                countryOrDevice: {
                    items: ['country code','device']
                },
                detections: {
                    items: ['adblock','ad banner','responsive banner container','event listener','page scroll']
                }
            }
        };
    }
    documentation() {
        window.open(documentationUrl, '_blank')
    }
    version(args) {
        if (args.TYPE == 'current') {
            return 'Alpha 12'
        } else if (args.TYPE == 'up-to-date') {
            return fetch(versionUrl).then(response => response.text())
        } else {
            return 'Error'
        }
    }
    userInfo(args) {
        if (args.OB == 'OS') {
            if (args.NV == 'name') {
                return 'Work In Progress'
            } else if (args.NV == 'version') {
                return 'Work In Progress'
            } else {
                return 'Error'
            }
        } else if (args.OB == 'browser') {
            if (args.NV == 'name') {
                return 'Work In Progress'
            } else if (args.NV == 'version') {
                return 'Work In Progress'
            } else {
                return 'Error'
            }
        } else {
            return 'Error'
        }
    }
    countryOrDeviceUserInfo(args) {
        return 'Work In Progress'
    }
    inviteLinkGenerator() {
        return 'Work In Progress'
    }
    inviteLinkReciever() {
        return 'Work In Progress'
    }
    detector(args) {
        return 'Work In Progress'
    }
    adState(args) {
        if (args.STATE == 'start') {
            return 'Work In Progress'
        } else if (args.STATE == 'stop') {
            return 'Work In Progress'
        } else if (args.STATE == 'error') {
            return 'Work In Progress'
        } else {
            return 'Error'
        }
    }
    eventListener(args) {
        if (args.ACT == 'Install') {
            return 'Work In Progress'
        } else if (args.ACT == 'Remove') {
            return 'Work In Progress'
        } else {
            return 'Error'
        }
    }
    adBreak(args) {
        if (args.TYPE == 'rewarded') {
            return 'Work In Progress'
        } else if (args.TYPE=='midgame') {
            return 'Work In Progress'
        } else {
            return 'Error'
        }
    }
    loadingTrigger(args) {
        if (args.STATE == 'started') {
            return 'Work In Progress'
        } else if (args.STATE == 'stopped') {
            return 'Work In Progress'
        } else {
            return 'Error'
        }
    }
    gameplayTrigger(args) {
        if (args.STATE == 'started/resumed') {
            return 'Work In Progress'
        } else if (args.STATE == 'stopped/paused') {
            return 'Work In Progress'
        } else if (args.STATE == 'celebrated') {
            return 'Work In Progress'
        } else {
            return 'Error'
        }
    }
    adBanner(args) {
        return 'Work In Progress'
    }
    bannerRemove(args) {
        return 'Work In Progress'
    }
    pageScroll(args) {
        return 'Work In Progress'
    }
}
Scratch.extensions.register(new CGDTK());
