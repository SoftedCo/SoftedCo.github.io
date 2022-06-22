class FetchByURL {
    getInfo() {
        return {
            id: 'fetchByURL',
            name: 'Fetch By URL',
            blocks: [
                {
                    opcode: 'fetchByURL',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Fetch data from [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://softedco.github.io/FetchByURL/FetchTest'
                        }
                    }
                }
            ]
        };
    }
    fetchByURL(args) {
        return fetch(args.URL).then(response => response.text())
    }
}
Scratch.extensions.register(new FetchByURL());
