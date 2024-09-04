import Foundation
import Capacitor

public class YearMonthPickerOptions: NSObject {
    
    public let value: Date?
    public let min: Date?
    public let max: Date?
    public let theme: Theme?
    public let title: String
    public let style: Style
    public let doneButtonLabel: String
    public let cancelButtonLabel: String
    
    init(value: Date?, min: Date?, max: Date?, theme: Theme?, title: String?, style: Style?, doneButtonLabel: String?, cancelButtonLabel: String?) {
        self.value = value
        self.min = min
        self.max = max
        self.theme = theme
        self.title = title ?? "Select a date"
        self.style = style ?? .WHEELS
        self.doneButtonLabel = doneButtonLabel ?? "Done"
        self.cancelButtonLabel = cancelButtonLabel ?? "Cancel"
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
