import Foundation
import Capacitor

// Based on https://github.com/capacitor-community/date-picker.
public class YearMonthPicker {
    
    public static let BUTTON_HEIGHT: CGFloat = 40
    
    public let view: UIView
    public let options: YearMonthPickerOptions
    
    public let padding: CGFloat
    
    public let title: UILabel
    public let picker: UIDatePicker
    public let alert: UIView
    public let line: UIView
    public let cancelButton: UIButton
    public let doneButton: UIButton
    public let effect: UIVisualEffectView
    public let background: UIView
    
    public init(view: UIView, options: YearMonthPickerOptions) {
        self.view = view
        self.options = options
        
        self.padding = {
            if #available(iOS 11.0, *), let window = UIApplication.shared.windows.filter({$0.isKeyWindow}).first {
                return window.safeAreaInsets.bottom
            } else {
                return 0
            }
        }()
        
        self.title = UILabel()
        self.picker = UIDatePicker()
        self.alert = UIView()
        self.line = UIView()
        self.cancelButton = UIButton()
        self.doneButton = UIButton()
        self.effect = UIVisualEffectView()
        self.background = UIView()
        
        prepareTitle()
        preparePicker()
        prepareAlert()
        prepareLine()
        prepareButtons()
        prepareEffect()
        prepareBackground()
        
        if(self.options.style != .INLINE) {
            self.alert.addSubview(self.title)
        }
        self.alert.addSubview(picker)
        self.alert.addSubview(line)
        self.alert.addSubview(cancelButton)
        self.alert.addSubview(doneButton)
        
        self.background.addSubview(self.effect)
        self.background.addSubview(self.alert)
        
        applyTheme()
        
        if options.style == .INLINE {
            self.alert.transform = CGAffineTransform(scaleX: 0.90, y: 0.90)
            self.alert.alpha = 0
            
            UIView.animate(withDuration: 0.2, delay: 0, options: [.curveEaseInOut], animations: {
                self.alert.transform = CGAffineTransform(scaleX: 1, y: 1)
                self.alert.alpha = 1
            }, completion: nil)
        } else {
            self.alert.frame.origin.y = self.view.frame.height
            
            UIView.animate(withDuration: 0.2, delay: 0, options: [.curveEaseInOut], animations: {
                self.alert.frame.origin.y = self.view.frame.height - self.alert.frame.height
            }, completion: nil)
        }
        
        self.effect.alpha = 0
        
        UIView.animate(withDuration: 0.3, delay: 0, options: [.curveEaseInOut], animations: {
            self.effect.alpha = 0.5
            self.effect.effect = UIBlurEffect(style: .dark)
        }, completion: nil)
    }
    
    public func dismiss() {
        if options.style == .INLINE {
            UIView.animate(withDuration: 0.2, delay: 0, options: [.curveEaseInOut], animations: {
                self.alert.transform = CGAffineTransform(scaleX: 0.4, y: 0.4)
                self.alert.alpha = 0
            }, completion: nil)
        } else {
            UIView.animate(withDuration: 0.2, delay: 0, options: [.curveEaseInOut], animations: {
                self.alert.frame.origin.y = self.view.frame.height
            }, completion: {(_: Bool) in
                self.alert.removeFromSuperview()
            })
        }
        
        UIView.animate(withDuration: 0.3, delay: 0.1, options: [.curveEaseInOut], animations: {
            self.effect.alpha = 0
        }, completion: {(_: Bool) in
            self.background.removeFromSuperview()
        })
    }
    
    public func prepareTitle() {
        title.frame.size = CGSize(width: view.frame.width, height: 40)
        title.textAlignment = .center
        title.text = options.title
    }
    
    public func preparePicker() {
        if #available(iOS 17.4, *) {
            picker.datePickerMode = .yearAndMonth
        } else {
            picker.datePickerMode = .init(rawValue: 4269) ?? .date
        }
        
        if options.value != nil {
            picker.setDate(options.value!, animated: true)
        }
        
        picker.minimumDate ?= options.min
        picker.maximumDate ?= options.max
        
        if #available(iOS 14.0, *), options.style == .INLINE {
            picker.preferredDatePickerStyle = .inline
            picker.frame.origin = CGPoint(x: 10, y: 10)
        } else {
            if #available(iOS 13.4, *) {
                picker.preferredDatePickerStyle = .wheels
            }
            picker.frame.origin = CGPoint(x: (view.frame.width - picker.frame.width) / 2, y: title.frame.height)
        }
    }
    
    public func prepareAlert() {
        if options.style == .INLINE {
            alert.frame.size = CGSize(width: picker.frame.width + 20, height: picker.frame.height + YearMonthPicker.BUTTON_HEIGHT + 11)
            alert.frame.origin = CGPoint(x: (view.frame.width - alert.frame.width) / 2, y: (view.frame.height - alert.frame.height) / 2)
            alert.layer.cornerRadius = 10
        } else {
            alert.frame.size = CGSize(width: view.frame.width, height: picker.frame.height + title.frame.height + YearMonthPicker.BUTTON_HEIGHT + padding)
            alert.frame.origin = CGPoint(x: 0, y: view.frame.height - alert.frame.height)
        }
    }
    
    public func prepareLine() {
        line.frame.size = CGSize(width: alert.frame.width, height: 1)
        line.backgroundColor = UIColor(red: 198 / 255, green: 198 / 255, blue: 198 / 255, alpha: 1)
        
        if options.style == .INLINE {
            line.frame.origin.y = picker.frame.height
        } else {
            line.frame.origin.y = picker.frame.height + title.frame.height
        }
    }
    
    public func prepareButtons() {
        let size: CGSize = CGSize(width: alert.frame.width / 2, height: YearMonthPicker.BUTTON_HEIGHT)
        
        doneButton.frame.size = size
        cancelButton.frame.size = size
        
        doneButton.setTitle(options.doneButtonLabel, for: .normal)
        cancelButton.setTitle(options.cancelButtonLabel, for: .normal)
        
        doneButton.contentVerticalAlignment = .center
        cancelButton.contentVerticalAlignment = .center
        
        if options.style == .INLINE {
            doneButton.frame.origin = CGPoint(x: size.width, y: picker.frame.height + 1)
            cancelButton.frame.origin = CGPoint(x: 0, y: picker.frame.height + 1)
        } else {
            doneButton.frame.origin = CGPoint(x: size.width, y: picker.frame.height + title.frame.height + 1)
            cancelButton.frame.origin = CGPoint(x: 0, y: picker.frame.height + title.frame.height + 1)
        }
    }
    
    public func prepareEffect() {
        effect.frame.size = view.frame.size
        effect.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        effect.backgroundColor = UIColor.capacitor.color(fromHex: "#000000")
    }
    
    public func prepareBackground() {
        background.frame.size = view.frame.size
    }
    
    public func applyTheme(preferredStyle: UIUserInterfaceStyle? = nil) {
        let style: UIUserInterfaceStyle = preferredStyle ?? (options.theme == .DARK ? .dark : .light)
        
        var titleFontColorHex: String = "#000000"
        var titleBackgroundColorHex: String = "#ffffff"
        var fontColorHex: String = "#000000"
        var backgroundColorHex: String = "#ffffff"
        var buttonFontColorHex: String = "#000000"
        var buttonBackgroundColorHex: String = "#ffffff"

        if style == .dark {
            titleFontColorHex = "#fafafa"
            titleBackgroundColorHex = "#121212"
            fontColorHex = "#fafafa"
            backgroundColorHex = "#121212"
            buttonFontColorHex = "#fafafa"
            buttonBackgroundColorHex = "#121212"
        }
        
        // TODO: From options.
        let titleFontColor = UIColor.capacitor.color(fromHex: titleFontColorHex)
        let titleBackgroundColor = UIColor.capacitor.color(fromHex: titleBackgroundColorHex)
        let fontColor = UIColor.capacitor.color(fromHex: fontColorHex)
        let backgroundColor = UIColor.capacitor.color(fromHex: backgroundColorHex)
        let buttonFontColor = UIColor.capacitor.color(fromHex: buttonFontColorHex)
        let buttonBackgroundColor = UIColor.capacitor.color(fromHex: buttonBackgroundColorHex)
        
        doneButton.setTitleColor(buttonFontColor, for: .normal)
        cancelButton.setTitleColor(buttonFontColor, for: .normal)
        
        doneButton.backgroundColor = buttonBackgroundColor
        cancelButton.backgroundColor = buttonBackgroundColor
        
        if #available(iOS 13.0, *) {
            picker.overrideUserInterfaceStyle = style
        } else {
            picker.setValue(fontColor, forKey: "textColor")
        }
        
        title.textColor = titleFontColor
        title.backgroundColor = titleBackgroundColor
        
        alert.backgroundColor = backgroundColor
    }
    
}
