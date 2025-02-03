import { registerPlugin } from '@capacitor/core';
const CapacitorWallpaperPlugin = registerPlugin('CapacitorWallpaperPlugin', {
    web: () => import('./web').then((m) => new m.CapacitorWallpaperPluginWeb()),
});
export * from './definitions';
export { CapacitorWallpaperPlugin };
//# sourceMappingURL=index.js.map