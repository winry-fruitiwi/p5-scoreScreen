/**
 *  @author
 *  @date 2022.03.
 *
 *
 */
let font
let instructions

let accuracyPos, timePos, WPMPos


function preload() {
    font = loadFont('data/meiryo.ttf')
}


function setup() {
    let cnv = createCanvas(600, 300)
    // noinspection JSUnresolvedFunction
    cnv.parent('#canvas')
    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 16)

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [1,2,3,4,5] → no function
        z → freeze sketch</pre>`)

    // positions for the different widgets
    accuracyPos = new p5.Vector(width/4, height/2)
    timePos = new p5.Vector(width/2, height/2)
    WPMPos = new p5.Vector(3*width/4, height/2)
}


function draw() {
    background(234, 34, 24)

    stroke(0, 0, 100)
    strokeWeight(10)
    noFill()

    textAlign(CENTER)

    // display different widgets. This really should be in a class though...
    stroke(193, 36, 31)
    circle(timePos.x, timePos.y, 68)

    stroke(194, 36, 50)
    circle(accuracyPos.x, accuracyPos.y, 120)
    circle(timePos.x, timePos.y, 85)
    circle(WPMPos.x, WPMPos.y, 120)

    // display text in different widgets.
    // accuracy
    fill(0, 0, 100)
    noStroke()
    textSize(36)
    text("98%", accuracyPos.x, accuracyPos.y - 5)
    textSize(16)
    text("\nreal accuracy\n98%", accuracyPos.x, accuracyPos.y - 10)

    // time
    textSize(23)
    text("0:29", timePos.x, timePos.y + 7)

    // WPM
    textSize(36)
    text("99", WPMPos.x, WPMPos.y - 10)
    textSize(16)
    fill(201, 96, 83)
    text("WPM", WPMPos.x, WPMPos.y + 20)

    displayDebugCorner()
}


/** 🧹 shows debugging info using text() 🧹 */
function displayDebugCorner() {
    const LEFT_MARGIN = 10
    const DEBUG_Y_OFFSET = height - 10 /* floor of debug corner */
    const LINE_SPACING = 2
    const LINE_HEIGHT = textAscent() + textDescent() + LINE_SPACING
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)

    textFont(font, 14)
    textAlign(LEFT)

    text(`frameCount: ${frameCount}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET - LINE_HEIGHT)
    text(`frameRate: ${frameRate().toFixed(1)}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET)
}


function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
    }
}