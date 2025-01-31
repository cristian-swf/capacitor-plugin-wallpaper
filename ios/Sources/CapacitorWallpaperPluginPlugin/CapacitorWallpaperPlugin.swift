import Foundation

@objc public class CapacitorWallpaperPlugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
