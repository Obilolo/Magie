let Coeur = 0
basic.forever(function () {
    if (input.lightLevel() < 64) {
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
