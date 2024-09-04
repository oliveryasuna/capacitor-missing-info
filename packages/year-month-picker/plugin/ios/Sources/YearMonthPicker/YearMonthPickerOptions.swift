import Foundation
import Capacitor

public class YearMonthPickerOptions: NSObject {
    
    public let value: Date?
    public let min: Date?
    public let max: Date?
    public let title: String
    public let style: Style
    public let doneButtonLabel: String
    public let cancelButtonLabel: String
    public let theme: Theme?
    public let forceTheme: Bool
    public let titleFontColor: String?
    public let titleBackgroundColor: String?
    public let fontColor: String?
    public let backgroundColor: String?
    public let buttonFontColor: String?
    public let buttonBackgroundColor: String?
    
    init(
        value: Date?,
        min: Date?,
        max: Date?,
        title: String?,
        style: Style?,
        doneButtonLabel: String?,
        cancelButtonLabel: String?,
        theme: Theme?,
        forceTheme: Bool?,
        titleFontColor: String?,
        titleBackgroundColor: String?,
        fontColor: String?,
        backgroundColor: String?,
        buttonFontColor: String?,
        buttonBackgroundColor: String?
    ) {
        self.value = value
        self.min = min
        self.max = max
        self.title = title ?? "Select a date"
        self.style = style ?? .WHEELS
        self.doneButtonLabel = doneButtonLabel ?? "Done"
        self.cancelButtonLabel = cancelButtonLabel ?? "Cancel"
        self.theme = theme
        self.forceTheme = forceTheme ?? false
        self.titleFontColor = titleFontColor
        self.titleBackgroundColor = titleBackgroundColor
        self.fontColor = fontColor
        self.backgroundColor = backgroundColor
        self.buttonFontColor = buttonFontColor
        self.buttonBackgroundColor = buttonBackgroundColor
    }
    
    public enum Theme {
        case LIGHT
        case DARK
    }
    
    public enum Style {
        case INLINE
        case WHEELS
    }
    
}
