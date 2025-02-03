import { WebPlugin } from '@capacitor/core';
import type { CapacitorWallpaperPlugin } from './definitions';
export declare class CapacitorWallpaperPluginWeb extends WebPlugin implements CapacitorWallpaperPlugin {
    setWallpaper(): Promise<{
        success: boolean;
    }>;
}
