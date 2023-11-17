// https://create.roblox.com/docs/cloud/open-cloud

(function (Scratch) {
    'use strict';
    
    var API_key = "";
  
    
    class CloudedRoblox {
      getInfo() {
        return {
          id: 'cloudedroblox',
          name: 'CloudedRoblox',
          blocks: [
            {
              opcode: 'setAPIkey',
              blockType: Scratch.BlockType.COMMAND,
              text: 'set API key to [APIKEY]',
              arguments: {
                APIKEY: { type: Scratch.ArgumentType.STRING }
              },
            }
          ],
        };
      } 
  
      setAPIkey(args) {
        API_key = args.APIKEY;
      }
      }    
    }
              
    Scratch.extensions.register(new CloudedRoblox());
})(Scratch);