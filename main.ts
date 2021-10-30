input.onButtonPressed(Button.A, function () {
    Lumiere += -1
    basic.showString("" + (Lumiere))
})
input.onButtonPressed(Button.B, function () {
    Lumiere += 1
    basic.showString("" + (Lumiere))
})
let Lumiere = 0
basic.showString("Magie !")
Lumiere = input.lightLevel()
let Coeur = 1
basic.showString("" + (Lumiere))
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.lightLevel() < Lumiere) {
        if (Coeur == 0) {
            basic.showIcon(IconNames.Heart)
            Coeur = 1
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            Coeur = 0
        }
    }
})
