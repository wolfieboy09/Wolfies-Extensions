(function(Scratch) {
    var JSON = {};

    if (!Scratch.extensions.unsandboxed) {
        throw new Error("Accounter must be unsandboxed");
    }

    class Accounter {
        getInfo() {
            return {
                id: 'accounter',
                name: 'Accounter',
                color1: '#27a376',
                blocks: [
                    {
                        opcode: 'createAccount',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'new account with username [USERNAME] with an id of [UID]',
                        arguments: {
                            USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'mistium' },
                            NORUIDM_OR_DISC: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "",
                            }
                        }
                    }
                ]
            }
        }

        // functions go here
        createAccount() {
            
        }
    }
    Scratch.extensions.register(new Accounter())
})(Scratch)