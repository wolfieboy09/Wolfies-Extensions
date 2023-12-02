// Name: Accounter
// ID: accounter
// Description: OriginOS Account handler system.
// By: Wolfieboy09 <https://scratch.mit.edu/users/Wolfieboy09/>

(function(Scratch) {
    "use strict";

    const basePayload = {'username': '', 'id': '', 'profile_url': '', 'version_created_on': '', 'badges': [], 'clean': true, 'offenses': {'warnings': []}};
    const badges = ['Server Booster', 'ICN Expert', 'Front Creator', 'OS Developer']

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
                        text: 'new account with username [USERNAME] with an id of [UID] with a profile url of [PROFILE_URL] with version of [VERSION]',
                        arguments: {
                            USERNAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'username' },
                            UID: { type: Scratch.ArgumentType.STRING, defaultValue: '' },
                            PROFILE_URL: { type: Scratch.ArgumentType.STRING, defaultValue: ''},
                            VERSION: { type: Scratch.ArgumentType.STRING, defaultValue: '0.0.0' }
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
                        text: 'grant user badge [BADGE]',
                        arguments: {
                            BADGE: { menu: 'BADGE', defaultValue: ''}
                        }
                    },
                    {
                        opcode: 'revokeBadge',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'revoke user badge [BADGE]',
                        arguments: {
                            BADGE: { menu: 'BADGE', defaultValue: ''}
                        }
                    }
                ],
                menus: {
                    BADGE: { items: badges },
                }
            }
        }

        createAccount({ USERNAME, UID, PROFILE_URL, VERSION }) {
            payload['username'] = USERNAME;
            payload['id'] = UID;
            payload['profile_url'] = PROFILE_URL;
            payload['version_created_on'] = VERSION;
        }

        resetPayload() {
            payload = basePayload;
        }

        newBadge({ BADGE }) {
            if (!payload['badges'].includes(BADGE)) {
                payload['badges'].push(BADGE)
            }
        }

        revokeBadge({ BADGE }) {
            console.log(`Before: ${payload['badges']}`);
            payload['badges'].splice(payload['badges'].indexOf(BADGE));
            console.log(`After: ${payload['badges']}`);
        }
        
    }
    Scratch.extensions.register(new Accounter())
})(Scratch)