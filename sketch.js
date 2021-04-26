let dot;

function setup() {
    createCanvas(windowWidth, windowHeight);


    // dot = new Walker(width / 2, height / 2);
    smooth();
    noFill();
}

function draw() {
    for (i = 0; i < width; i += width / 100) {
        for (j = 0; j < height; j += height / 100) {
            dot = new Walker(i, j);
            dot.step();
            dot.display();
        }
    }

}


class Walker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        stroke(0);
        point(this.x, this.y);
    }

    step() {
        let ampx = random(-100, 100);
        let ampy = random(-100, 100);

        this.x += ampx;
        this.y += ampy;

    }
}