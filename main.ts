input.onButtonPressed(Button.A, function () {
    if (Rapport > 0) {
        Rapport += -10
        pins.digitalWritePin(DigitalPin.P0, Rapport)
        basic.showString("" + (Rapport))
    }
})
input.onButtonPressed(Button.B, function () {
    if (Rapport < 1020) {
        Rapport += 10
        pins.digitalWritePin(DigitalPin.P0, Rapport)
        basic.showString("" + (Rapport))
    }
})
let Rapport = 0
Rapport = 0
