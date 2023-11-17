(function (Scratch) {
  "use strict";

  class Muter {
    getInfo() {
      return {
        id: "muter",
        name: "Muter",
        blocks: [
          {
            opcode: "muteTab",
            blockType: Scratch.BlockType.COMMAND,
            text: "mute tab",
          },
          {
            opcode: "unmuteTab",
            blockType: Scratch.BlockType.COMMAND,
            text: "unmute tab",
          },
        ],
      };
    }

    muteTab() {
      const mediaElements = document.querySelectorAll("audio, video");
      mediaElements.forEach((mediaElement) => {
        mediaElement.muted = true;
      });
    }

    unmuteTab() {
      const mediaElements = document.querySelectorAll("audio, video");
      mediaElements.forEach((mediaElement) => {
        mediaElement.muted = false;
      });
    }
  }

  Scratch.extensions.register(new Muter());
})(Scratch);
