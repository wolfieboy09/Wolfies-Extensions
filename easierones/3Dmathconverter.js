(function (Scratch) {
    'use strict';

    class Easier3DMath {
      getInfo() {
        return {
          id: 'easier3dmath',
          name: 'Easier 3D Math',
          color1: '#1d6604',
          blocks: [
            {
              blockType: 'label',
              text: 'Array to X Y Z'
            },
            {
              opcode: 'convertARRAYtoXYZ',
              blockType: Scratch.BlockType.REPORTER,
              text: 'convert [ARRAY] to [XYZOPT]',
              arguments: {
                ARRAY: { type: Scratch.ArgumentType.STRING },
                XYZOPT: { menu: 'XYZOPT', defaultValue: 'X'},
              },
            }
          ],
          menus: {
            XYZOPT: {
              acceptReporters: true,
              items: ['X', 'Y', 'Z'],
            }
          }
        }
      }
    }
    
    Scratch.extenstions.register(new Easier3DMath());
  })(Scratch);