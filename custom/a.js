(function(Scratch) {
    var payload = {'username': '', 'id': '', 'profile_url': '', 'badges': [], 'clean': true, 'offenses': {'warnings': []}};

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
                            UID: { type: Scratch.ArgumentType.STRING, defaultValue: "" }
                        }
                    }
                ]
            }
        }

        createAccount({ USERNAME, UID }) {
            payload['username'] = USERNAME;
            payload['id'] = UID;
        }
    }
    Scratch.extensions.register(new Accounter())
})(Scratch)