input.onButtonPressed(Button.A, function () {
    if (Rapport > 0) {
        Rapport += -1
        pins.digitalWritePin(DigitalPin.P0, Rapport)
        basic.showString("" + Rapport / 1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Rapport < 20) {
        Rapport += 1
        pins.digitalWritePin(DigitalPin.P0, Rapport)
        basic.showString("" + Rapport / 1)
    }
})
let Rapport = 0
Rapport = 0
basic.showString("Moteur!")
