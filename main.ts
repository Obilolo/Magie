basic.showString("Magie !")
let Lumiere = input.lightLevel()
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
