'use strict';

var core = require('@capacitor/core');

const CapacitorWallpaperPlugin = core.registerPlugin('CapacitorWallpaperPlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.CapacitorWallpaperPluginWeb()),
});

class CapacitorWallpaperPluginWeb extends core.WebPlugin {
    async setWallpaper() {
        throw this.unavailable('Wallpaper plugin is not available in web context.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorWallpaperPluginWeb: CapacitorWallpaperPluginWeb
});

exports.CapacitorWallpaperPlugin = CapacitorWallpaperPlugin;
//# sourceMappingURL=plugin.cjs.js.map
