def on_button_a():
    global b
    b = b + 1
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    global b
    b = b - 1
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

b = 0
b = 0

def on_forever():
    basic.show_number(b)
basic.forever(on_forever)
