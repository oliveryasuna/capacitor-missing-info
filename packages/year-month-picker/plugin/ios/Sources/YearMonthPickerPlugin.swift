import Foundation
import Capacitor

@objc(YearMonthPickerPlugin)
public class YearMonthPickerPlugin: CAPPlugin, CAPBridgedPlugin {
    
    public static let YEAR_MONTH_DATE_FORMATTER: DateFormatter = {
        let dateFormatter: DateFormatter = DateFormatter()
        
        dateFormatter.dateFormat = "yyyy-MM"
        
        return dateFormatter
    }()

    public let identifier: String = "YearMonthPickerPlugin"
    public let jsName: String = "YearMonthPicker"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "_nativeShowYearMonthPicker", returnType: CAPPluginReturnPromise)
    ]
    
    public var traitsView: TraitsView?
    
    public var currentCall: CAPPluginCall!
    public var currentPicker: YearMonthPicker!
    
    override public func load() {
        super.load()
        
        if #available(iOS 13.0, *) {
            traitsView = TraitsView(bridge: bridge, listener: {(style: UIUserInterfaceStyle) in
                if let currentPicker = self.currentPicker {
                    currentPicker.applyTheme(preferredStyle: style)
                }
            })
        }
    }

    @objc public func _nativeShowYearMonthPicker(_ call: CAPPluginCall) {
        if currentCall != nil || currentPicker != nil {
            call.reject("Already visible.")
            
            return
        }
        
        guard let viewController = bridge?.viewController else {
            call.reject("Failed to access view controller.")
            
            return
        }
        
        currentCall = call
        
        let options: YearMonthPickerOptions = buildShowYearMonthPickerOptions(call)
        
        DispatchQueue.main.async {
            self.currentPicker = YearMonthPicker(view: viewController.view, options: options)
            
            self.currentPicker.doneButton.addTarget(self, action: #selector(self.done(_:)), for: .touchUpInside)
            self.currentPicker.cancelButton.addTarget(self, action: #selector(self.cancel(_:)), for: .touchUpInside)
            
            if self.currentPicker.options.style != .INLINE {
                let tap: UITapGestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(self.cancel(_:)))
                
                self.currentPicker.background.addGestureRecognizer(tap)
            }
            
            viewController.view.addSubview(self.currentPicker.background)
        }
    }
    
    @objc public func done(_ sender: UITapGestureRecognizer? = nil) {
        currentCall.resolve(["value": YearMonthPickerPlugin.YEAR_MONTH_DATE_FORMATTER.string(from: currentPicker.picker.date)])
        
        dismissPicker()
    }
    
    @objc public func cancel(_ sender: UITapGestureRecognizer? = nil) {
        currentCall.resolve(["value": nil])
        
        dismissPicker()
    }
    
    public func dismissPicker() {
        currentPicker.dismiss()
        
        currentCall = nil
        currentPicker = nil
    }

    public func buildShowYearMonthPickerOptions(_ call: CAPPluginCall) -> YearMonthPickerOptions {
        return YearMonthPickerOptions(
            value: {
                if let value = call.getString("value"), let parsedValue = YearMonthPickerPlugin.YEAR_MONTH_DATE_FORMATTER.date(from: value) {
                    return parsedValue
                }
                
                return nil
            }(),
            min: {
                if let min = call.getString("min"), let parsedMin = YearMonthPickerPlugin.YEAR_MONTH_DATE_FORMATTER.date(from: min) {
                    return parsedMin
                }
                
                return nil
            }(),
            max: {
                if let max = call.getString("max"), let parsedMax = YearMonthPickerPlugin.YEAR_MONTH_DATE_FORMATTER.date(from: max) {
                    return parsedMax
                }
                
                return nil
            }(),
            theme: {
                if let theme = call.getString("theme") ?? getConfig().getString("theme") {
                    switch theme {
                    case "dark":
                        return .DARK
                    case "light":
                        return .LIGHT
                    default:
                        if #available(iOS 13.0, *), UITraitCollection.current.userInterfaceStyle == .dark {
                            return .DARK
                        }
                    }
                }
                
                if #available(iOS 13.0, *), UITraitCollection.current.userInterfaceStyle == .dark {
                    return .DARK
                }
                
                return nil
            }(),
            title: call.getString("title") ?? getConfig().getString("title"),
            style: {
                if #available(iOS 13.4, *) {
                    if let style = call.getString("style") ?? getConfig().getString("style") {
                        switch style {
                        case "inline":
                            return .INLINE
                        default:
                            return .WHEELS
                        }
                    }
                }
                
                return .WHEELS
            }(),
            doneButtonLabel: call.getString("doneButtonLabel") ?? getConfig().getString("doneButtonLabel"),
            cancelButtonLabel: call.getString("cancelButtonLabel") ?? getConfig().getString("cancelButtonLabel")
        )
    }

}
