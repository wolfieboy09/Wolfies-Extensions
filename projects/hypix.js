(function (Scratch) {
  "use strict";
  // API key
  var APIkey = "";

  // ratelimites
  // var RateLimitLimit = 0;
  // var RateLimitRemaining = 0;
  // var RateLimitReset = 0;

  // http stuff
  // var success = false;
  // var cause = "";

  // 429 responce
  // var throttle = false;
  // var global = false;

  // game type
  var setGameType = "";

  // internal varables
  var GAME_CLEAN_NAMES = [
    "Quake",
    "Walls",
    "Paintball",
    "Blitz Survival Games",
    "TNT Games",
    "VampireZ",
    "Mega Walls",
    "Arcade",
    "Arena",
    "UHC Champions",
    "Cops and Crims",
    "Warlords",
    "Smash Heroes",
    "Turbo Kart Racers",
    "Housing",
    "SkyWars",
    "Crazy Walls",
    "Speed UHC",
    "SkyClash",
    "Classic Games",
    "Prototype",
    "Bed Wars",
    "Murder Mystery",
    "Build Battle",
    "Duels",
    "SkyBlock",
    "Pit",
    "Replay",
    "SMP",
    "Wool Wars",
  ];

  class Hypix {
    getInfo() {
      return {
        id: "hypix",
        name: "Hypix",
        color1: "#bada55",
        blocks: [
          {
            opcode: "setAPIkey",
            blockType: Scratch.BlockType.COMMAND,
            text: "set API key to [APIKEY]",
            arguments: {
              APIKEY: { type: Scratch.ArgumentType.STRING },
            },
          },
          {
            blockType: "label",
            text: "Set GameType",
          },
          {
            opcode: "setGAMETYPEbyCLEANNAME",
            blockType: Scratch.BlockType.COMMAND,
            text: "set gametype by clean name [GAMECN]",
            arguments: {
              GAMECN: { menu: "GAMECN", defaultValue: "Quake" },
            },
          },
          {
            blockType: "label",
            text: "Resources",
          },
          {
            opcode: "getGAMEINFOMATION",
            blockType: Scratch.BlockType.REPORTER,
            text: "get game infomation",
          },
        ],
        menus: {
          GAMECN: { items: GAME_CLEAN_NAMES },
        },
      };
    }

    setAPIkey({ APIKEY }) {
      APIkey = APIKEY;
    }

    setGAMETYPEbyCLEANNAME({ GAMECN }) {
      setGameType = GAMECN;
    }

    getGAMEINFOMATION({ GAME }) {
      return (
        fetch("https://api.hypixel.net/v2/resources/games", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "API-Key": APIkey,
            game: GAME, // not  true
          },
        })
          // MUST be .text() for it to work
          .then((response) => response.text())
          .catch((error) => error)
      );
    }
  }

  Scratch.extensions.register(new Hypix());
})(Scratch);
