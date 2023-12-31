// Name: AirSense
// ID: airsense
// Description: Fetches air quality. API Key required.
// By: Wolfieboy09 <https://scratch.mit.edu/users/Wolfieboy09/>

(function (Scratch) {
  "use strict";

  var userLAT = "0";
  var userLONG = "0";

  class AirSense {
    getInfo() {
      return {
        id: "airsense",
        name: "AirSense",
        color1: "#0a7044",
        blocks: [
          {
            blockType: "label",
            text: "Configuration",
          },
          {
            opcode: "setLocation",
            blockType: Scratch.BlockType.COMMAND,
            text: "set latitude [LATITUDE] and longitude [LONGITUDE]",
            arguments: {
              LATITUDE: {
                type: Scratch.ArgumentType.NUMBER,
              },
              LONGITUDE: {
                type: Scratch.ArgumentType.NUMBER,
              },
            },
          },
        ],
      };
    }

    setLocation(args) {
      userLAT = args.LATITUDE;
      userLONG = args.LONGITUDE;
    }
  }

  Scratch.extensions.register(new AirSense());
})(Scratch);
