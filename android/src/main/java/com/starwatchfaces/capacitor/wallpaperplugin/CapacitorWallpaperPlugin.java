package com.starwatchfaces.capacitor.wallpaperplugin;

import android.util.Log;

public class CapacitorWallpaperPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
