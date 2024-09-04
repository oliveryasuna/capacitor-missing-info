//
//  TraitsView.swift
//
//
//  Created by Oliver Yasuna on 9/3/24.
//

import Foundation
import Capacitor

// Based on https://github.com/aparajita/capacitor-dark-mode.
public class TraitsView: UIView {
    
    let listener: ((UIUserInterfaceStyle) -> Void)?
    
    public init(bridge: CAPBridgeProtocol?, listener: @escaping ((UIUserInterfaceStyle) -> Void)) {
        self.listener = listener
        
        super.init(frame: CGRect.zero)
        
        self.isHidden = true
        
        if let view = bridge?.viewController?.view {
            view.insertSubview(self, belowSubview: view)
        }
    }
    
    required init?(coder: NSCoder) {
        self.listener = nil
        
        super.init(coder: coder)
    }
    
    override public func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        
        guard UIApplication.shared.applicationState != .background else {
            return
        }
        
        if let previous = previousTraitCollection,
           previous.userInterfaceStyle != traitCollection.userInterfaceStyle {
            if let listener = self.listener {
                listener(traitCollection.userInterfaceStyle)
            }
        }
    }
    
}
