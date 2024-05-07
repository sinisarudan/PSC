"use strict";

// this is file is available to the rest of the system
// through the puzzle `@colabo-utils/i-config`
// please read `@colabo-utils/i-config/README.md` for more details

// NOTE: it is important that this file is not imported, but required
// and that it is therefore JS (not TS, although it can be, if we still do not import it)
// because otherwise it would be bundled in a final file during building
// and we wouldn't be able to change the config after building project

console.log("[config/global.js] Setting up the globalSet variable");

let globalSet: any = {};

enum EContext {
	LOCAL = "local",
	CLIMATHON = "climathon",
	KNALLEDGE = "knalledge",
}

// eslint-disable-next-line prefer-const
// const context: string = EContext.CLIMATHON;
const context: string = EContext.LOCAL;

if (typeof window !== "undefined") {
	const _window: any = window;
	console.log("[config/global] global variable `window` is available.");
	if (!_window.hasOwnProperty("globalSet")) {
		console.log("[config/global] global variable `_window.globalSet` was not available: ", _window.globalSet);
		_window.globalSet = globalSet;
	} else {
		console.log("[config/global] global variable `_window.globalSet` is available: ", _window.globalSet);
		globalSet = _window.globalSet;
	}
} else {
	console.log("[config/global] global variable `window` is NOT available");
}

if (typeof global !== "undefined") {
	const _global: any = global;
	if (!_global.hasOwnProperty("globalSet")) {
		console.log("[config/global] global variable `_global.globalSet` was not available: ", _global.globalSet);
		_global.globalSet = globalSet;
	} else {
		console.log("[config/global] global variable `_global.globalSet` is available: ", _global.globalSet);
		globalSet = _global.globalSet;
	}
} else {
	console.log("[config/global] global variable `global` is NOT available");
}

// just to be sure if window/global overwrote globalSet from window
if (typeof window !== "undefined") {
	(<any>window).globalSet = globalSet;
}
if (typeof global !== "undefined") {
	(<any>global).globalSet = globalSet;
}

console.log("[config/global.js] Populating the globalSet variable");

if (!globalSet.hasOwnProperty("general")) {
	console.log("[config/global.js] Setting up globalSet.general");
	globalSet.general = {
		branding: {
			title: "ReMaking Tesla Workshop",
			toolbarTitle: "ReMaking Tesla Workshop",
			subToolbarTitle: "@ ReTesla",
			logo: "assets/images/logo.jpg",
		},

		imagesFolder: "images",

		// active map:
		mapId: "5df15060c377ab0c32fa7627",
		// "5d791568da853c1e2a3eab5a", //UoD @ InSEA
		// '5b96619b86f3cc8057216a03', //PTW 2018
		// '5bce4f50b6b1fc5d048c706d', // Business Angelina (Karlovci)
		// '5b49e7f736390f03580ac9a7', // Vlasina 2018
		// '5be3fddce1b7970d8c6df406', // Everyday Heroes

		mapIdSDGs: "5df15060c377ab0c32fa7627",
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
		appTitle: "Climathon Bg",
	};

	switch (context) {
		case EContext.LOCAL:
			// RESTfull backend API url
			globalSet.general.serverUrl = "http://127.0.0.1:8001";
			break;
		case EContext.KNALLEDGE:
			// RESTfull backend API url
			globalSet.general.serverUrl = "https://apps.colabo.space/api";
			// colabo-space-1 (https) (ACTUAL SERVER)
			//OLD:
			// 'http://api.colabo.space',
			// 'http://158.39.75.120:8001', // colabo-space-1 (old)
			break;
		case EContext.CLIMATHON:
			globalSet.general.serverUrl = "https://climathon-apps.colabo.space/api"; // Climathon backend
			break;
	}
}

if (!globalSet.hasOwnProperty("puzzles")) {
	console.log("[config/global.js] Setting up globalSet.puzzles");
	globalSet.puzzles = {
		"@colabo-topichat/f-talk": {
			messagesNumberMin: 3,
			messagesNumberMax: 5,
		},
		"@colabo-media/f-upload": {
			mediaTypes: {
				default: {
					type: "default",
					imagesFolder: "/tmp/www/fv/images/default",
					webPath: "/images/default",
				},
				user: {
					type: "user",
					imagesFolder: "/tmp/www/fv/images/users",
					webPath: "/images/users",
				},
				playsust: {
					type: "playsust",
					imagesFolder: "/tmp/www/fv/images/playsust",
					webPath: "/images/playsust",
				},
			},
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
								height: 40,
							},
						},
						{
							name: "searchSoundsNoCache",
							selectArea: {
								x: 115,
								y: 155,
								width: 60,
								height: 40,
							},
						},
						{
							name: "searchSoundsWithCache",
							selectArea: {
								x: 280,
								y: 120,
								width: 60,
								height: 40,
							},
						},
					],
				},
			],
		},
	};
	globalSet.puzzles["@colabo-knalledge/i-core-services"] = {
		debug: true,
		iAmId: "1b96619b86f3cc8057216a05",
		voId: "5edf009bbfe65bffe29b2fd5",
		name: "Test container 1",
		type: "colabo.knalledge.dataset",
		structureType: "colabo.knalledge.container.ordered",
	};

	switch (context) {
		case EContext.LOCAL:
			// RESTful backend API url
			globalSet.puzzles["@colabo-knalledge/i-core-services"].serverUrl = "http://127.0.0.1:8001";
			break;
		case EContext.KNALLEDGE:
			globalSet.puzzles["@colabo-knalledge/i-core-services"].serverUrl = "https://apps.colabo.space/api";
			break;
		case EContext.CLIMATHON:
			globalSet.puzzles["@colabo-knalledge/i-core-services"].serverUrl = "https://climathon-apps.colabo.space/api";
			break;
	}

	globalSet.puzzles["@colabo-topichat/f-core"] = {
		// localhost
		// socketUrl: 'http://localhost/',
		// socketUrl: "http://localhost:8001/",
		// path: "",

		// Climathon backend
		socketUrl: "https://climathon-apps.colabo.space/api",
		path: "/api/socket.io",

		// socketUrl: 'https://fv.colabo.space/',
		// path: '/api/socket.io'
	};

	switch (context) {
		case EContext.LOCAL:
			// RESTfull backend API url
			globalSet.puzzles["@colabo-topichat/f-core"].socketUrl = "http://127.0.0.1:8001";
			globalSet.puzzles["@colabo-topichat/f-core"].path = "";
			break;
		case EContext.KNALLEDGE:
			globalSet.puzzles["@colabo-topichat/f-core"].socketUrl = "https://apps.colabo.space";
			globalSet.puzzles["@colabo-topichat/f-core"].path = "/api/socket.io";
			break;
		case EContext.CLIMATHON:
			globalSet.puzzles["@colabo-topichat/f-core"].socketUrl = "https://climathon-apps.colabo.space";
			globalSet.puzzles["@colabo-topichat/f-core"].path = "/api/socket.io";
			break;
	}
}

// console.log("[config/global.js] globalSet.puzzles:", globalSet.puzzles);

const _module: any = module;
// node support (export)
if (typeof _module !== "undefined") {
	// workarround for TypeScript's `module.exports` readonly
	if ("exports" in _module) {
		if (typeof _module["exports"] !== "undefined") {
			_module["exports"].globalSet = globalSet;
		}
	} else {
		_module["exports"] = globalSet;
	}
}

console.log("[config/global.js] finished");

export { globalSet };
