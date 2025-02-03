export interface CapacitorWallpaperPlugin {
    setWallpaper(options: {
        url: string;
    }): Promise<{
        success: boolean;
    }>;
}
