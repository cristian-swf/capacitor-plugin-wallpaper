// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorPluginWallpaper",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorPluginWallpaper",
            targets: ["CapacitorWallpaperPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "CapacitorWallpaperPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorWallpaperPluginPlugin"),
        .testTarget(
            name: "CapacitorWallpaperPluginPluginTests",
            dependencies: ["CapacitorWallpaperPluginPlugin"],
            path: "ios/Tests/CapacitorWallpaperPluginPluginTests")
    ]
)