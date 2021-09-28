input.onButtonPressed(Button.A, function () {
    basic.showNumber(Passi)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Passi += 1
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Passi = 0
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.clearScreen()
})
let Passi = 0
Passi = 0
