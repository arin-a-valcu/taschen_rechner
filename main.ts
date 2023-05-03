input.onButtonEvent(Button.A, input.buttonEventClick(), function on_button_a() {
    
    b = b + 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function on_button_b() {
    
    b = b - 1
})
let b = 0
b = 0
basic.forever(function on_forever() {
    basic.showNumber(b)
})
