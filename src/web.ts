import { WebPlugin } from '@capacitor/core';

import type { CapacitorWallpaperPluginPlugin } from './definitions';

export class CapacitorWallpaperPluginWeb extends WebPlugin implements CapacitorWallpaperPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
