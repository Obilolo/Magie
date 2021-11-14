let Lumiere = 0
input.onPinPressed(TouchPin.P0, function () {
    if (Lumiere == 0) {
        Lumiere = 1
    } else {
        Lumiere = 0
    }
})
basic.forever(function () {
    if (Lumiere == 1) {
        pins.digitalWritePin(DigitalPin.P2, pins.analogReadPin(AnalogPin.P1))
    } else {
        pins.analogWritePin(AnalogPin.P2, 0)
    }
})
