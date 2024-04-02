export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DXim8iVa.js","app":"_app/immutable/entry/app.CjiQmvU6.js","imports":["_app/immutable/entry/start.DXim8iVa.js","_app/immutable/chunks/entry.DtCZ-AVF.js","_app/immutable/chunks/scheduler.D3hV8Tfu.js","_app/immutable/entry/app.CjiQmvU6.js","_app/immutable/chunks/scheduler.D3hV8Tfu.js","_app/immutable/chunks/index.C40e2whc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
