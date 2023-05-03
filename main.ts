input.onPinTouchEvent(TouchPin.P3, ButtonEvent.Down, function () {
    loesung = b + a
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    b = b + 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    b = b - 1
})
input.onPinTouchEvent(TouchPin.P1, ButtonEvent.Click, function () {
    b = 0
    b += a
    if (input.buttonIsPressed(Button.A)) {
        a = a - 1
    }
    if (input.buttonIsPressed(Button.B)) {
        a = a + 1
    }
})
let a = 0
let loesung = 0
let b = 0
b = 0
basic.forever(function () {
    basic.showNumber(b)
})
