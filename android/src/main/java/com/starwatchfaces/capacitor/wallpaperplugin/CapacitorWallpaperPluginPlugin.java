package com.starwatchfaces.capacitor.wallpaperplugin;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;

import androidx.core.content.FileProvider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

@CapacitorPlugin(name = "CapacitorWallpaperPlugin")
public class CapacitorWallpaperPluginPlugin extends Plugin {

    /**
     * Sets an image as wallpaper from a given URL or local URI.
     * 
     * @since 1.0.0
     * @param call {url: string} Plugin call containing the URL of the image
     * @return void
     */
    @PluginMethod
    public void setWallpaper(PluginCall call) {
        String url = call.getString("url");

        if (url == null) {
            call.reject("URL is required");
            return;
        }

        try {
            // Download and save image if it's a remote URL
            if (url.startsWith("https")) {
                File localFile = downloadImage(url);
                Uri contentUri = FileProvider.getUriForFile(getContext(),
                    getContext().getPackageName() + ".fileprovider",
                    localFile);
                launchWallpaperChooser(contentUri, call);
            } else {
                // Handle local file URI directly
                Uri uri = Uri.parse(url);
                launchWallpaperChooser(uri, call);
            }
        } catch (Exception e) {
            call.reject("Failed to set wallpaper", e);
        }
    }

    private File downloadImage(String imageUrl) throws IOException {
        URL url = new URL(imageUrl);
        String fileName = "temp_wallpaper_" + System.currentTimeMillis() + ".jpg";
        File file = new File(getContext().getCacheDir(), fileName);

        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setDoInput(true);
        connection.connect();

        try (InputStream input = connection.getInputStream();
             OutputStream output = new FileOutputStream(file)) {
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = input.read(buffer)) != -1) {
                output.write(buffer, 0, bytesRead);
            }
        }
        return file;
    }

    private void launchWallpaperChooser(Uri uri, PluginCall call) {
        Intent intent = new Intent(Intent.ACTION_ATTACH_DATA);
        intent.addCategory(Intent.CATEGORY_DEFAULT);
        intent.setDataAndType(uri, "image/*");
        intent.putExtra("mimeType", "image/*");
        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);

        try {
            getActivity().startActivityForResult(
                Intent.createChooser(intent, "Set as:"),
                1);
            JSObject ret = new JSObject();
            ret.put("success", true);
            call.resolve(ret);
        } catch (ActivityNotFoundException e) {
            call.reject("No app can handle wallpaper setting", e);
        }
    }
}
