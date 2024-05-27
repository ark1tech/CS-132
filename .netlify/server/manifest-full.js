export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.png","2.png","3.png","4.png","5.png","favicon.ico","favicon.png","fonts/Light.otf","fonts/LightItalic.otf","fonts/Medium.otf","fonts/MediumItalic.otf","fonts/Regular.otf","fonts/RegularItalic.otf","fonts/Semibold.otf","fonts/SemiboldItalic.otf","robots.txt"]),
	mimeTypes: {".png":"image/png",".otf":"font/otf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.C8BsnD5G.js","app":"_app/immutable/entry/app.D7SI7Fdd.js","imports":["_app/immutable/entry/start.C8BsnD5G.js","_app/immutable/chunks/entry.CLP4QAwm.js","_app/immutable/chunks/scheduler.DTjso0PO.js","_app/immutable/entry/app.D7SI7Fdd.js","_app/immutable/chunks/scheduler.DTjso0PO.js","_app/immutable/chunks/index.BK9-SU27.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
