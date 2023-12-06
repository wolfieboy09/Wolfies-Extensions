// Name: Accounter
// ID: accounter
// Description: OriginOS Account handler system.
// By: Wolfieboy09 <https://scratch.mit.edu/users/Wolfieboy09/>


// This script is designed for the OriginOS Account handler system.
// Use outside of OriginOS is prohibited without prior permission.
// Unauthorized redistribution of Accounter will lead to extension takedown.

/*

OriginOS Accounter License

This software, referred to as "Accounter," is licensed under the terms of the GNU General Public License v3.0, with the following additional restrictions:

1. The use of this software is permitted only within the OriginOS Account handler system. Use outside of OriginOS is strictly prohibited without prior written permission from the original authors.

2. Redistribution or usage of Accounter outside the scope of the OriginOS Account handler system is prohibited. Unauthorized redistribution may result in legal action and the takedown of the extended usage.

3. Any modification or extension of this software must adhere to these terms and maintain the attribution to the original authors.

This license does not grant any additional rights and is supplemental to the terms of the GNU GPL v3.0. By using, modifying, or redistributing this software, you agree to be bound by both this license and the GNU GPL v3.0.

For inquiries regarding licensing or usage permissions, please contact [Contact Information].

*/
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
                    },
                    { blockType: 'label', text: 'User Data'},
                    {
                        opcode: 'getCurrentData',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'get current data',
                    },
                    {
                        opcode: 'getOffense',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'get offence'
                    },
                    { blockType: 'label', text: 'User Offenses'},
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

        getCurrentData() {
            return JSON.stringify(payload);
        }

        newOffence({ WARNING }) {
            payload.clean = false;
            payload.offenses.warnings.push(WARNING);
        }
        
    }
    Scratch.extensions.register(new Accounter())
})(Scratch);