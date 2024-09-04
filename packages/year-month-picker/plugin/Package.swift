// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "OliveryasunaCmiYearMonthPickerPlugin",
    platforms: [.iOS(.v13)],
    products: [
     .library(
        name: "YearMonthPickerPlugin",
        targets: ["YearMonthPickerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "YearMonthPickerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources"
        ),
        .testTarget(
            name: "YearMonthPickerPluginTests",
            dependencies: ["YearMonthPickerPlugin"],
            path: "ios/Tests"
        )
    ]
)
