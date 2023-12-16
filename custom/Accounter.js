// Name: Accounter
// ID: accounter
// Description: OriginOS Account handler system.
// By: Wolfieboy09 <https://scratch.mit.edu/users/Wolfieboy09/>

(function(Scratch) {
    "use strict";

    const basePayload = {
        'username': '', 
        'id': '', 
        'profile_url': '', 
        'version_created_on': '', 
        'password': '', // hashed
        'email': '',
        'badges': [], 
        'clean': true, 
        'offenses': {
            'warnings': []
        }
    };

    var badges = [""];

    var payload = basePayload;
    var toBeDeleted = [""];

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
                        opcode: 'setEmailAndPassword',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set email to [EMAIL] and a password of [PASSWORD]',
                        arguments: { 
                            EMAIL: { type: Scratch.ArgumentType.STRING, defaultValue: 'user@abc.xyz'},
                            PASSWORD: { type: Scratch.ArgumentType.STRING, defaultValue: 'aaaaaaaaa'}
                        }
                    },
                    {
                        opcode: 'getCurrentData',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'get current data',
                    },
                    {
                        opcode: 'getUserBadges',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'get user badges',
                    },
                    {
                        opcode: 'resetPayload',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'reset user payload'
                    },

                    '---',

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
                    },

                    '---',

                    {
                        opcode: 'addBadgeToList',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'add [BADGE] to options',
                        arguments: {
                            BADGE: { type: Scratch.ArgumentType.STRING, defaultValue: 'member'}
                        }
                    },
                    {
                        opcode: 'removeBadgeFromList',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'remove [BADGE] from options',
                        arguments: {
                            BADGE: { type: Scratch.ArgumentType.STRING, defaultValue: 'member'}
                        }
                    },

                    '---',

                    {
                        opcode: 'newAccountForDeletion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'grant [ACCOUNT_ID] into deletion',
                        arguments: {
                            ACCOUNT_ID: { type: Scratch.ArgumentType.STRING, defaultValue: 'act/failure' }
                        }
                    },
                    {
                        opcode: 'removeAccountForDeletion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'revoke [ACCOUNT_ID] from deletion',
                        arguments: {
                            ACCOUNT_ID: { type: Scratch.ArgumentType.STRING, defaultValue: 'act/saved'}
                        }
                    },
                    {
                        opcode: 'getAccountsUpForDeletion',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'accounts up for deletion'
                    },


                    '---',

                    {
                        opcode: 'newOffence',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'new offence warning [WARNING]',
                        arguments: {
                            WARNING: { type: Scratch.ArgumentType.STRING, defaultValue: 'not being smart'}
                        }
                    }
                ],
                menus: {
                    BADGE: { items: badges },
                }
            }
        }

        createAccount({ USERNAME, UID, PROFILE_URL, VERSION }) {
            payload.username = USERNAME;
            payload.id = UID;
            payload.profile_url = PROFILE_URL;
            payload.version_created_on = VERSION;
        }
        
        setEmailAndPassword({ EMAIL, PASSWORD }) {
            payload.email = EMAIL;
            payload.password = PASSWORD;
            // the password is HASHED
        }

        resetPayload() {
            payload = basePayload;
        }

        newBadge({ BADGE }) {
            if (!payload.badges.includes(BADGE)) {
                payload.badges.push(BADGE)
            }
        }

        revokeBadge({ BADGE }) {
            payload.badges.splice(payload.badges.indexOf(BADGE));
        }

        addBadgeToList({ BADGE }) {
            if (!badges.includes(BADGE)) {
                if (badges[0] === "") {
                    badges[0] = BADGE;
                } else {
                    badges.push(BADGE);
                }
            }
        }

        removeBadgeFromList({ BADGE }) {
            let index = badges.indexOf(BADGE);
            if (index !== -1) {
                badges.splice(index, 1);
            }
        }

        getCurrentData() {
            return JSON.stringify(payload);
        }

        newOffence({ WARNING }) {
            payload.clean = false;
            payload.offenses.warnings.push(WARNING);
        }

        newAccountForDeletion({ ACCOUNT_ID }) {
            if (!toBeDeleted.includes(ACCOUNT_ID)) {
                toBeDeleted.push(ACCOUNT_ID)
            }
        }

        removeAccountForDeletion({ ACCOUNT_ID }) {
            let index = toBeDeleted.indexOf(ACCOUNT_ID);
            if (index !== -1) {
                toBeDeleted.splice(index, 1)
            }
        }

        getAccountsUpForDeletion() {
            return `"sys/tobedeleted": ${JSON.stringify(toBeDeleted)}`;
        }
        
    }
    Scratch.extensions.register(new Accounter())
})(Scratch)
