import { WebPlugin } from '@capacitor/core';

import type { CapacitorWallpaperPlugin } from './definitions';

export class CapacitorWallpaperPluginWeb extends WebPlugin implements CapacitorWallpaperPlugin {
  async setWallpaper(): Promise<{ success: boolean }> {
    throw this.unavailable('Wallpaper plugin is not available in web context.');
  }
}
