import { registerPlugin } from '@capacitor/core';

import { CapacitorWallpaperPlugin } from './definitions';

const CapacitorWallpaperPlugin = registerPlugin<CapacitorWallpaperPlugin>('CapacitorWallpaperPlugin', {
  web: () => import('./web').then((m) => new m.CapacitorWallpaperPluginWeb()),
});

export * from './definitions';
export { CapacitorWallpaperPlugin };
