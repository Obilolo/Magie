input.onButtonPressed(Button.A, function () {
    if (Rapport >= 10) {
        Rapport += -10
        pins.digitalWritePin(DigitalPin.P0, Rapport)
        basic.showString("" + (Rapport / 10))
    }
})
input.onButtonPressed(Button.B, function () {
    if (Rapport < 1013) {
        Rapport += 10
        pins.digitalWritePin(DigitalPin.P0, Rapport)
        basic.showString("" + (Rapport / 10))
    }
})
let Rapport = 0
Rapport = 0
basic.showString("Moteur!")
