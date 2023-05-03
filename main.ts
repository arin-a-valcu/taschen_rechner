input.onPinTouchEvent(TouchPin.P3, ButtonEvent.Click, function () {
    music.playMelody("B C5 B C5 C D C D ", 120)
    loesung = b + a
    for (let index = 0; index < 4; index++) {
        basic.showNumber(loesung)
        music.playMelody("F G A B C5 B C5 C5 ", 119)
    }
})
input.onPinTouchEvent(TouchPin.P2, ButtonEvent.Click, function () {
    music.playMelody("B C5 B C5 C D C D ", 120)
    loesung = b - a
    for (let index = 0; index < 4; index++) {
        basic.showNumber(loesung)
        music.playMelody("F G A B C5 B C5 C5 ", 119)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    b = b + 1
    basic.showNumber(b)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    b = b - 1
    basic.showNumber(b)
})
input.onPinTouchEvent(TouchPin.P1, ButtonEvent.Click, function () {
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C ", 120)
    basic.showNumber(a)
    a = 0
    b += a
    if (input.buttonIsPressed(Button.A)) {
        a = a - 1
        for (let index = 0; index < 4; index++) {
            basic.showNumber(a)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        a = a + 1
        for (let index = 0; index < 4; index++) {
            basic.showNumber(a)
        }
    }
})
let a = 0
let loesung = 0
let b = 0
music.playMelody("A B C5 B A G F E ", 120)
b = 0
for (let index = 0; index < 4; index++) {
    basic.showNumber(b)
}
