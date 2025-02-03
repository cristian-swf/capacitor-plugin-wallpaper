var capacitorCapacitorWallpaperPlugin = (function (exports, core) {
    'use strict';

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

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
