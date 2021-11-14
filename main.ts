let Rapport = 0
basic.forever(function () {
    while (Rapport < 1023) {
        pins.digitalWritePin(DigitalPin.P0, Rapport)
        Rapport += 1
        basic.pause(10)
    }
    while (Rapport > 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        Rapport += -1
        basic.pause(10)
    }
})
