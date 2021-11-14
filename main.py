def on_button_pressed_a():
    global Lumiere
    Lumiere += -1
    basic.show_string("" + str((Lumiere)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Lumiere
    Lumiere += 1
    basic.show_string("" + str((Lumiere)))
input.on_button_pressed(Button.B, on_button_pressed_b)

Lumiere = 0
basic.show_string("Magie !")
Lumiere = input.light_level()
Coeur = 1
basic.show_string("" + str((Lumiere)))
basic.show_icon(IconNames.HEART)

def on_forever():
    global Coeur
    if input.light_level() < Lumiere:
        if Coeur == 0:
            basic.show_icon(IconNames.HEART)
            Coeur = 1
        else:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
            Coeur = 0
basic.forever(on_forever)
