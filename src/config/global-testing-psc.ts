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
		// RESTfull backend API url
		serverUrl:
			"http://127.0.0.1:8001", // LOCAL
			// "https://climathon-apps.colabo.space/api", // Climathon backend
		// 'https://fv.colabo.space/api', // colabo-space-1 (https) (ACTUAL SERVER)
		//OLD:
		// 'http://api.colabo.space',
		// 'http://158.39.75.120:8001', // colabo-space-1 (old)
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
		appTitle: "Play Sustainability! @ Climathon BG",
	};
}

if (!globalSet.hasOwnProperty("puzzles")) {
	console.log("[config/global.js] Setting up globalSet.puzzles");
	globalSet.puzzles = {
		"@colabo-knalledge/i-core-services": {
			debug: true,
			iAmId: "1b96619b86f3cc8057216a05",
			voId: "5edf009bbfe65bffe29b2fd5",
			name: "Test container 1",
			type: "colabo.knalledge.dataset",
			serverUrl: "http://127.0.0.1:8001",
			structureType: "colabo.knalledge.container.ordered",
		},
		"@colabo-topichat/f-core": {
			// socketUrl: 'http://localhost/',
			socketUrl: "http://localhost:8001/",
			// socketUrl: 'https://fv.colabo.space/',
			path: "",
			// path: '/api/socket.io'
		},
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
