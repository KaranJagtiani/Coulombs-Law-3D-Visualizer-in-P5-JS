


disableFriendlyErrors = true;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

const PI = 3.14159265358979;
const E0 = 8.8541878128 * Math.pow(10, -12);
const k = 1 / (4 * PI * E0);
const xLeftMargin = -536;
const yLeftMargin = 270;

class Particle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    generate(x, y, z) {
        this.x = this.x + x;
        this.y = this.y + y;
        this.z = this.z + z;
        point(this.x, this.y, this.z);
    }
}

function formatStr(str) {
    var res;
    if (str == "NaN")
        res = String("0");
    else {
        res = str.substring(0, 4);
    }
    return res;
}

function integrate() {
    // First Particle Charge
    var Q1 = document.getElementById("q1").value;
    var qP = document.getElementById("qP").value;
    Q1 *= Math.pow(10, qP);

    // First Particle Coordinate (x, y, z) Input
    var x1 = document.getElementById("input1").value;
    var y1 = document.getElementById("input2").value;
    var z1 = document.getElementById("input3").value;

    // 35 is one unit
    x1 *= 35;
    y1 *= (-35);
    z1 *= (-35);

    // Displaying First Particle
    push();
    if (x1) {
        translate(-535, 270, 0);
        ambientMaterial(250);
        transBox(x1, y1, z1);
        fill(0, 0, 200);
        pop();
    }

    // Second Particle Charge
    var Q2 = document.getElementById("q2").value;
    var qP2 = document.getElementById("qP2").value;
    Q2 *= Math.pow(10, qP2);

    // Second Particle Coordinate (x, y, z) Input
    var x2 = document.getElementById("input4").value;
    var y2 = document.getElementById("input5").value;
    var z2 = document.getElementById("input6").value;

    x2 *= 35;
    y2 *= (-35);
    z2 *= (-35);
    
    // Displaying Second Particle
    push();
    if (x2) {
        translate(-535, 270, 0);
        ambientMaterial(250);
        transBox(x2, y2, z2);
        fill(0, 0, 200);
        pop();
    }

    // Resetting both particle coordinates back to their original value.
    x1 /= 35;
    y1 /= (-35);
    z1 /= (-35);
    x2 /= 35;
    y2 /= (-35);
    z2 /= (-35);

    let r21i = x2 - x1; // x1 - x2
    let r21j = y2 - y1; // y1 - 22
    let r21k = z2 - z1; // z1 - z2

    let r21 = Math.sqrt(
        Math.pow(r21i, 2) + Math.pow(r21j, 2) + Math.pow(r21j, 2)
    );
    
    let r213 = Math.pow(r21, 3);

    let t1 = (k * r21i * Q1 * Q2) / r213;
    t1 = formatStr(String(t1));
    document.getElementById("t1").innerHTML = t1;

    let t2 = (k * r21j * Q1 * Q2) / r213;
    t2 = formatStr(String(t2));
    document.getElementById("t2").innerHTML = t2;

    let t3 = (k * r21k * Q1 * Q2) / r213;
    t3 = formatStr(String(t3));
    document.getElementById("t3").innerHTML = t3;

    let t4 = (k * r21i * Q1 * Q2) / r213;
    t4 = formatStr(String(t4));
    document.getElementById("t4").innerHTML = t4;

    let t5 = (k * r21j * Q1 * Q2) / r213;
    t5 = formatStr(String(t5));
    document.getElementById("t5").innerHTML = t5;

    let t6 = (k * r21k * Q1 * Q2) / r213;
    t6 = formatStr(String(t6));
    document.getElementById("t6").innerHTML = t6;
}


function transBox(x, y, z) {
    push();
    p1 = new Particle;
    strokeWeight(20);
    p1.generate(x, y, z);
    strokeWeight(12);
    pop();
}

function draw() {
    orbitControl();

    background(0);
    stroke(255);

    // Paticles
    integrate();

    /*Origin (-535, 270, 0) */
    stroke(255, 255, 255);
    strokeWeight(4);
    //X-Axis
    push();
    translate(xLeftMargin, yLeftMargin, 0);
    line(900, 0, 0, 0);
    pop();

    //Y-Axis
    push();
    translate(xLeftMargin, yLeftMargin, 0);
    line(0, -550, 0, 0);
    pop();

    //Z-Axis
    push();
    rotateX(PI / 2);
    translate(xLeftMargin, 0, -270);
    line(0, -600, 0, 0);
    pop();

    strokeWeight(6);

    var a1 = 500;
    // Points on the X-Axis, denoted by Red Color
    for (var i = 0; i < 25; i++) {
        push();
        stroke(255, 50, 50);
        translate(-a1, 260, 0);
        line(0, 20, 0, 0);
        pop();
        a1 = a1 - 35;
    }
    
    var b1 = 235;
    // Points on the Y-Axis, denoted by Green Color
    for (var i = 0; i < 15; i++) {
        push();
        stroke(54, 255, 121);
        translate(-545, b1, 0);
        line(20, 0, 0, 0);
        pop();
        b1 = b1 - 35;
    }

    var c1 = 35
    // Points on the Z-Axis, denoted by Blue Color
    for (var i = 0; i < 15; i++) {
        push();
        stroke(30, 30, 255);
        translate(-535, 260, -c1);
        line(0, 20, 0, 0);
        pop();
        c1 = c1 + 35;
    }
}