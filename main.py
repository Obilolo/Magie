Coeur = 0

def on_forever():
    global Coeur
    if input.light_level() < 128:
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
