const url = 'https://github.com/SoftedCo/CrazyGamesDeveloperToolKit#how-to-use';

class CGDTK {
    getInfo() {
        return {
            id: 'CGDTK',
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
                    text: 'Extension [TYPE] version',
                    arguments: {
                        TYPE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'versions',
                            defaultValue: 'current'
                        }
                    }
                },
                {
                    opcode: 'userinfo',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Get info about user [OB] [NV]',
                    arguments: {
                        OB: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'osorbrowser',
                            defaultValue: 'OS'
                        },
                        NV: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'nameorversion',
                            defaultValue: 'name'
                        }
                    }
                },
                {
                    opcode: 'countryordeviceuserinfo',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Get info about user [CD]',
                    arguments: {
                        CD: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'countryordevice',
                            defaultValue: 'country'
                        }
                    }
                },
                {
                    opcode: 'invitelinkgenerator',
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
                    opcode: 'invitelinkreciever',
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
                    opcode: 'adstate',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'Ad break [STATE] state',
                    arguments: {
                        STATE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'adstate',
                            defaultValue: 'start'
                        }
                    }
                },
                {
                    opcode: 'eventlistener',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '[ACT] an event listener',
                    arguments: {
                        ACT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'eventlisteneractions',
                            defaultValue: 'Install'
                        }
                    }
                },
                {
                    opcode: 'loadingtrigger',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set loading state at [STATE]',
                    arguments: {
                        STATE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'loadingstate',
                            defaultValue: 'started'
                        }
                    }
                },
                {
                    opcode: 'gameplaytrigger',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set gameplay state at [STATE]',
                    arguments: {
                        STATE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'gameplaystate',
                            defaultValue: 'started/resumed'
                        }
                    }
                },
                {
                    opcode: 'adbreak',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Start a [TYPE] ad break',
                    arguments: {
                        TYPE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'adtype',
                            defaultValue: 'rewarded'
                        }
                    }
                },
                {
                    opcode: 'adbanner',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Add [BC] with [RES] resolution',
                    arguments: {
                        BC: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'bannerorcontainer',
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
                    opcode: 'bannerremove',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Remove [BC]',
                    arguments: {
                        BC: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'bannerorcontainer',
                            defaultValue: 'a responsive banner container'
                        }
                    }
                },
                {
                    opcode: 'pagescroll',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '[ACT] page scroll',
                    arguments: {
                        ACT: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'pagescrollactions',
                            defaultValue: 'Disable'
                        }
                    }
                }
            ],
            menus: {
                versions: {
                    items: ['current','up-to-date']
                },
                adtype: {
                    items: ['rewarded','midgame']
                },
                adstate: {
                    items: ['start','stop','error']
                },
                eventlisteneractions: {
                    items: ['Install','Remove']
                },
                pagescrollactions: {
                    items: ['Enable','Disable']
                },
                loadingstate: {
                    items: ['started','stopped']
                },
                gameplaystate: {
                    items: ['started/resumed','stopped/paused','celebrated']
                },
                resolution: {
                    items: ['970*90','320*50','160*600','336*280','728*90','300*600','468*60','970*250','300*250','250*250','120*600']
                },
                bannerorcontainer: {
                    items: ['an ad banner','a responsive banner container']
                },
                osorbrowser: {
                    items: ['OS','browser']
                },
                nameorversion: {
                    items: ['name','version']
                },
                countryordevice: {
                    items: ['country','device']
                },
                detections: {
                    items: ['adblock','ad banner','responsive banner container','event listener','page scroll']
                }
            }
        };
    }
    documentation() {
        window.open(url, '_blank')
    }
    version(args) {
        if (args.TYPE == 'current') {
            return 'Alpha 11'
        } else if (args.TYPE == 'up-to-date') {
            return fetch('https://softedco.github.io/CrazyGamesDeveloperToolKit/version').then(response => response.text())
        } else {
            return 'Error'
        }
    }
    userinfo(args) {
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
    countryordeviceuserinfo(args) {
        return 'Work In Progress'
    }
    invitelinkgenerator() {
        return 'Work In Progress'
    }
    invitelinkreciever() {
        return 'Work In Progress'
    }
    detector(args) {
        return 'Work In Progress'
    }
    adstate(args) {
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
    eventlistener(args) {
        if (args.ACT == 'Install') {
            return 'Work In Progress'
        } else if (args.ACT == 'Remove') {
            return 'Work In Progress'
        } else {
            return 'Error'
        }
    }
    adbreak(args) {
        if (args.TYPE == 'rewarded') {
            return 'Work In Progress'
        } else if (args.TYPE=='midgame') {
            return 'Work In Progress'
        } else {
            return 'Error'
        }
    }
    loadingtrigger(args) {
        if (args.STATE == 'started') {
            return 'Work In Progress'
        } else if (args.STATE == 'stopped') {
            return 'Work In Progress'
        } else {
            return 'Error'
        }
    }
    gameplaytrigger(args) {
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
    adbanner(args) {
        return 'Work In Progress'
    }
    bannerremove(args) {
        return 'Work In Progress'
    }
    pagescroll(args) {
        return 'Work In Progress'
    }
}
Scratch.extensions.register(new CGDTK());
