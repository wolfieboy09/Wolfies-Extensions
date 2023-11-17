// Name: Interneter
// ID: interneter
// Description: Checks if the user is connected to the internet or not.
// By: Wolfieboy09 <https://scratch.mit.edu/users/Wolfieboy09/>

(function (Scratch) {
  class Interneter {
    getInfo() {
      return {
        id: "interneter",
        name: "Interneter",
        color1: "#ba4c14",
        blocks: [
          {
            opcode: "isConnected",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "connected to internet?",
          },
        ],
      };
    }
    isConnected() {
      return navigator.onLine;
    }
  }
  Scratch.extensions.register(new Interneter());
})(Scratch);
