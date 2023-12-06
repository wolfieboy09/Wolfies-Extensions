// Name: CloudedRoblox
// ID: cloudedroblox
// Description: Uses Roblox's cloud API.
// By: Wolfieboy09 <https://scratch.mit.edu/users/Wolfieboy09/>



// https://create.roblox.com/docs/cloud/open-cloud

(function (Scratch) {
  "use strict";

  var API_key = "";

  class CloudedRoblox {
    getInfo() {
      return {
        id: "cloudedroblox",
        name: "CloudedRoblox",
        blocks: [
          {
            opcode: "setAPIkey",
            blockType: Scratch.BlockType.COMMAND,
            text: "set API key to [APIKEY]",
            arguments: {
              APIKEY: { type: Scratch.ArgumentType.STRING },
            },
          },
        ],
      };
    }

    setAPIkey(args) {
      API_key = args.APIKEY;
    }
  }

  Scratch.extensions.register(new CloudedRoblox());
})(Scratch);
