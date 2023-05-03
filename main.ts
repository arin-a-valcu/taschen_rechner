input.onPinTouchEvent(TouchPin.P3, ButtonEvent.Click, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    loesung = b * a
    for (let index = 0; index < 4; index++) {
        basic.showNumber(loesung)
    }
})
input.onPinTouchEvent(TouchPin.P2, ButtonEvent.Click, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    loesung = b - a
    for (let index = 0; index < 4; index++) {
        basic.showNumber(loesung)
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
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showNumber(a)
    b += a
    a = 0
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
