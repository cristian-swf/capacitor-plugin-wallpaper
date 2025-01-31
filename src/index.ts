import { registerPlugin } from '@capacitor/core';

import type { CapacitorWallpaperPluginPlugin } from './definitions';

const CapacitorWallpaperPlugin = registerPlugin<CapacitorWallpaperPluginPlugin>('CapacitorWallpaperPlugin', {
  web: () => import('./web').then((m) => new m.CapacitorWallpaperPluginWeb()),
});

export * from './definitions';
export { CapacitorWallpaperPlugin };
