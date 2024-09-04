// TODO: Belongs in a common package.

precedencegroup OptionalAssignment {
    associativity: right
    assignment: true
}
infix operator ?= : OptionalAssignment
public func ?= <T>(variable: inout T, value: T?) {
    if let value = value {
        variable = value
    }
}
