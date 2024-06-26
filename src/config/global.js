"use strict";

// this is file is available to the rest of the system
// through the puzzle `@colabo-utils/i-config`
// please read `@colabo-utils/i-config/README.md` for more details

// NOTE: it is important that this file is not imported, but required
// and that it is therefore JS (not TS, although it can be, if we still do not import it)
// because otherwise it would be bundled in a final file during building
// and we wouldn't be able to change the config after building project

console.log("[config/global.js] Setting up the globalSet variable");

let globalSet = {};
if (typeof window == "undefined" && typeof window == "null") {
  if (!window.hasOwnProperty("globalSet")) window.globalSet = {};
  globalSet = window.globalSet;
}
if (typeof global == "undefined" && typeof global == "null") {
  if (!global.hasOwnProperty("globalSet")) global.globalSet = {};
  globalSet = global.globalSet;
}

console.log("[config/global.js] Populating the globalSet variable");

if (!globalSet.hasOwnProperty("general")) {
  console.log("[config/global.js] Setting up globalSet.general");
  globalSet.general = {
    // RESTfull backend API url
    serverUrl: "http://127.0.0.1:8001", // LOCAL
    // 'https://fv.colabo.space/api', // colabo-space-1 (https) (ACTUAL SERVER)
    //OLD:
    // 'http://api.colabo.space',
    // 'http://158.39.75.120:8001', // colabo-space-1 (old)
    branding: {
      title: "ReMaking Tesla Workshop",
      toolbarTitle: "ReMaking Tesla Workshop",
      subToolbarTitle: "@ ReTesla",
      logo: "assets/images/logo.jpg"
    },

    imagesFolder: "images",

    // active map:
    mapId: "5df11fd40345dd0452b82dcb",
    // "5d791568da853c1e2a3eab5a", //UoD @ InSEA
    // '5b96619b86f3cc8057216a03', //PTW 2018
    // '5bce4f50b6b1fc5d048c706d', // Business Angelina (Karlovci)
    // '5b49e7f736390f03580ac9a7', // Vlasina 2018
    // '5be3fddce1b7970d8c6df406', // Everyday Heroes

    mapIdSDGs: 
    "5df11fd40345dd0452b82dcb",
    // "5d791568da853c1e2a3eab5a", //UoD @ InSEA
    //"5b49e7f736390f03580ac9a7",
    //5be3fddce1b7970d8c6df406

    userNodeId: "5be408d0e1b7970d8c6df40f",

    lang: "en",
    //'rs',

    /** multiple players can play on the same opening card */
    OPENNING_CARD_MULTIPLE_ANSWERS: true,

    /** multiple players can play on a card played by another player */
    PLAYER_CARD_MULTIPLE_ANSWERS: true,

    /** multiple players can play on a card played by another player */
    REPLAY_PLAYED_CARD: false,
    appTitle: "Play Sustainability! @ OEGC"
  };
}

if (!globalSet.hasOwnProperty("puzzles")) {
  console.log("[config/global.js] Setting up globalSet.puzzles");
  globalSet.puzzles = {
    "@colabo-topichat/f-core": {
      // socketUrl: 'http://localhost/',
      socketUrl: "http://localhost:8001/",
      // socketUrl: 'https://fv.colabo.space/',
      path: ""
      // path: '/api/socket.io'
    },
    "@colabo-topichat/f-talk": {
      messagesNumberMin: 3,
      messagesNumberMax: 5
    },
    "@colabo-flow/f-audit": {
      flowImages: [
        {
          name: "search",
          imageUrl: "assets/images/flows/flow-search.jpg",
          actions: [
            {
              name: "start",
              selectArea: {
                x: 55,
                y: 165,
                width: 40,
                height: 40
              }
            },
            {
              name: "searchSoundsNoCache",
              selectArea: {
                x: 115,
                y: 155,
                width: 60,
                height: 40
              }
            },
            {
              name: "searchSoundsWithCache",
              selectArea: {
                x: 280,
                y: 120,
                width: 60,
                height: 40
              }
            }
          ]
        }
      ]
    }
  };
}

console.log("[config/global.js] globalSet.puzzles:", globalSet.puzzles);

// node support (export)
if (typeof module !== "undefined") {
  // workarround for TypeScript's `module.exports` readonly
  if ("exports" in module) {
    if (typeof module["exports"] == "undefined") {
      module["exports"].globalSet = globalSet;
    }
  } else {
    module["exports"] = globalSet;
  }
}

console.log("[config/global.js] finished");
