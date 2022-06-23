class resolution {
    getInfo() {
        return {
            id: 'resolution',
            name: 'Resolution',
            blocks: [
                {
                    opcode: 'width',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Width'
                },
                {
                    opcode: 'height',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Height'
                }
            ]
        };
    }
    width() {
        return scaffolding.width
    }
    height() {
        return scaffolding.height
    }
}
Scratch.extensions.register(new resolution());
