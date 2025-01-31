export interface CapacitorWallpaperPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
