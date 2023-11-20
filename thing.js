(function(Scratch) {
    
    class SomeRandomThings {
        getInfo() {
            return {
                id: 'somerandomness',
                name: 'idk really',
                blocks: [
                    {
                        opcode: 'copyToCLIPBOARD',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'copy [TEXT] to clipboard',
                        arguments: {
                            TEXT: { type: Scratch.ArgumentType.STRING }
                        }
                    }
                ]
            }
        }

        copyToCLIPBOARD({ TEXT }) {
            navigator.clipboard.writeText(TEXT)
        }
    }

})(Scratch);