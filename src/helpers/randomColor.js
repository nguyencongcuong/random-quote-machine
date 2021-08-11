import random from "./random"

function randomColor() {
    const h = random(0, 360)
    const s = 20
    const l = 60
    const hsl = `hsl(${h}, ${s}%, ${l}%)`
    return hsl
}

export default randomColor