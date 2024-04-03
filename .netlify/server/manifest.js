export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","fonts/Light.otf","fonts/LightItalic.otf","fonts/Medium.otf","fonts/MediumItalic.otf","fonts/Regular.otf","fonts/RegularItalic.otf","fonts/Semibold.otf","fonts/SemiboldItalic.otf","robots.txt"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DsTyhFMP.js","app":"_app/immutable/entry/app._PeKqmeA.js","imports":["_app/immutable/entry/start.DsTyhFMP.js","_app/immutable/chunks/entry.DylLps2Z.js","_app/immutable/chunks/scheduler.Dcu0g0pW.js","_app/immutable/entry/app._PeKqmeA.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.Dcu0g0pW.js","_app/immutable/chunks/index.vpYndAI0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
