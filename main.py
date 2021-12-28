def on_button_pressed_a():
    global Rapport
    if Rapport > 0:
        Rapport += -1
        pins.digital_write_pin(DigitalPin.P0, Rapport)
        basic.show_string("" + str((Rapport / 1)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Rapport
    if Rapport < 20:
        Rapport += 1
        pins.digital_write_pin(DigitalPin.P0, Rapport)
        basic.show_string("" + str((Rapport / 1)))
input.on_button_pressed(Button.B, on_button_pressed_b)

Rapport = 0
Rapport = 0