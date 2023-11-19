(function (Scratch) {
  "use strict";

  class ThreeDmathConverter {
    getInfo() {
      return {
        id: "easier3dmath",
        name: "Easier 3D Math",
        color1: "#1d6604",
        blocks: [
          {
            blockType: "label",
            text: "Array to X Y Z",
          },
          {
            opcode: "convertARRAYtoXYZ",
            blockType: Scratch.BlockType.REPORTER,
            text: "convert [ARRAY] to [XYZ]",
            arguments: {
              ARRAY: { type: Scratch.ArgumentType.STRING },
              XYZ: { menu: "XYZ", defaultValue: "X" },
            },
          },
        ],
        menus: {
          XYZ: {
            acceptReporters: true,
            items: ["X", "Y", "Z"],
          },
        },
      };
    }

    convertARRAYtoXYZ({ ARRAY, XYZ }) {
      if (XYZ == "X") {
        return ARRAY[0];
      } else if (XYZ == "Y") {
        return ARRAY[1];
      } else if (XYZ == "Z") {
        return ARRAY[2];
      }
    }
  }

  Scratch.extension.register(new ThreeDmathConverter());
})(Scratch);