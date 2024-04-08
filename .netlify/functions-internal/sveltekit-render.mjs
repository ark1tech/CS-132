import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.B7mjMz_-.js","app":"_app/immutable/entry/app.Bu6u3X1P.js","imports":["_app/immutable/entry/start.B7mjMz_-.js","_app/immutable/chunks/entry.Dg5MFQGc.js","_app/immutable/chunks/scheduler.Dcu0g0pW.js","_app/immutable/entry/app.Bu6u3X1P.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.Dcu0g0pW.js","_app/immutable/chunks/index.vpYndAI0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
