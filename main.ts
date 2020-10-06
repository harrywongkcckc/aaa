let index = 0
input.onButtonPressed(Button.A, function () {
    index = 0
    if (randint(0, 6) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        if (randint(0, 6) == 2) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . . . . .
                `)
        }
        if (randint(0, 6) == 3) {
            if (true) {
                basic.showLeds(`
                    . . . . .
                    . # . . .
                    . . # . .
                    . . . # .
                    . . . . .
                    `)
            }
        } else {
            if (randint(0, 6) == 4) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # . # .
                    . . . . .
                    `)
            }
        }
        if (randint(0, 6) == 5) {
            if (true) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . # . .
                    . # . # .
                    . . . . .
                    `)
            }
        } else {
            if (randint(0, 6) == 6) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . # . # .
                    . # . # .
                    . . . . .
                    `)
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
