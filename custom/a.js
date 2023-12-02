(function(Scratch) {
    "use strict";

    const basePayload = {'username': '', 'id': '', 'profile_url': '', 'badges': [], 'clean': true, 'offenses': {'warnings': []}};
    const badges = ['Server Booster', 'Top 10', 'OSL Savent', 'ICN Expert', 'Front Creator', 'OS Developer', 'Oki Dev Team', 'Chatter']

    var payload = basePayload;

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
                        text: 'new account with username [USERNAME] with an id of [UID] with a profile url of [PROFILE_URL]',
                        arguments: {
                            USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'username' },
                            UID: { type: Scratch.ArgumentType.STRING, defaultValue: '' },
                            PROFILE_URL: { type: Scratch.ArgumentType.STRING, defaultValue: ''}
                        }
                    },
                    {
                        opcode: 'resetPayload',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'reset user payload'
                    },
                    {
                        opcode: 'newBadge',
                        blockType: Scratch.BlockType.COMMAND,
                        text: ''
                    }
                ]
            }
        }

        createAccount({ USERNAME, UID, PROFILE_URL }) {
            payload['username'] = USERNAME;
            payload['id'] = UID;
            payload['profile_url'] = PROFILE_URL;
        }

        resetPayload() {
            payload = basePayload;
        }
    }
    Scratch.extensions.register(new Accounter())
})(Scratch)