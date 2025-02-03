import { WebPlugin } from '@capacitor/core';
export class CapacitorWallpaperPluginWeb extends WebPlugin {
    async setWallpaper() {
        throw this.unavailable('Wallpaper plugin is not available in web context.');
    }
}
//# sourceMappingURL=web.js.map