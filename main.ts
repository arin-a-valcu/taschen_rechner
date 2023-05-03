input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    b = b + 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    b = b - 1
})
let b = 0
b = 0
basic.forever(function () {
    basic.showNumber(b)
})
