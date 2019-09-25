


const PI = 3.14159265358979;
const E0 = 8.8541878128 * Math.pow(10, -12);
const k = 1 / (4 * PI * E0);

console.log("PI: ", PI);
console.log("E0: ", E0);
console.log("1/4piE0: ", k);



class PointOne {

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

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// formatAns( str => {
//     return str;
// })

function formatStr(str) {
    var res;
    if (str == "NaN")
        res = String("0");
    else {
        res = str.substring(0, 4);
    }
    return res;
}

function integrate(x, y, z) {

    // First Particle
    var Q1 = document.getElementById("q1").value;
    var qP = document.getElementById("qP").value;
    Q1 *= Math.pow(10, qP);
    // document.getElementById("qD").innerHTML = String(Q1);

    var m = document.getElementById("input1").value;
    var n = document.getElementById("input2").value;
    var p = document.getElementById("input3").value;

    m *= 35;
    n *= (-35);
    p *= (-35);

    // var x1, y1, z1;

    // x1 = m /= 35;
    // document.write(x1);



    push();
    if (m) {
        translate(-535, 270, 0);
        ambientMaterial(250);
        transBox(m, n, p);
        fill(0, 0, 200);
        pop();
    }

    var x1, y1, z1;
    x1 = m / 35;
    y1 = n / 35;
    z1 = p / 35;


    // Second Particle

    var Q2 = document.getElementById("q2").value;
    var qP2 = document.getElementById("qP2").value;
    Q2 *= Math.pow(10, qP2);
    //document.getElementById("qD2").innerHTML = String(Q2);

    //Q2.value = 
    var q = document.getElementById("input4").value;
    var r = document.getElementById("input5").value;
    var s = document.getElementById("input6").value;

    q *= 35;
    r *= (-35);
    s *= (-35);

    push();
    if (q) {
        translate(-535, 270, 0);
        ambientMaterial(250);
        transBox(q, r, s);
        fill(0, 0, 200);
        pop();
    }
    m /= 35;
    q /= 35;
    n /= (-35);
    r /= (-35);
    p /= (-35);
    s /= (-35);
    /*document.getElementById("p1").innerHTML = " ( " + String(m /= 35);
    document.getElementById("p4").innerHTML = " - " + String(q /= 35);

    document.getElementById("p2").innerHTML = " + ( " + String(n /= (-35));
    document.getElementById("p5").innerHTML = " - " + String(r /= (-35));

    document.getElementById("p3").innerHTML = " + ( " + String(p /= (-35));
    document.getElementById("p6").innerHTML = " - " + String(s /= (-35));

    document.getElementById("l1").innerHTML = "_______________________";

    if (m < 10 && n < 10 && p < 10) {
        document.getElementById("l1").innerHTML = "________________________";
    }

    if (q < 10 && r < 10 && s < 10) {
        document.getElementById("l1").innerHTML = "________________________";
    }

    if (m > 10 && n > 10 && p > 10) {
        document.getElementById("l1").innerHTML = "___________________________";
    }

    if (q > 10 && r > 10 && s > 10) {
        document.getElementById("l1").innerHTML = "___________________________";
    }

    if (q > 10 && r > 10 && s > 10 && m > 10 && n > 10 && p > 10) {
        document.getElementById("l1").innerHTML = "_____________________________";
    }

    document.getElementById("r21i").innerHTML = String(r21i) + "i   ";
    document.getElementById("r21j").innerHTML = String(r21j) + "j   ";
    document.getElementById("r21k").innerHTML = String(r21k) + "k   ";

*/

    let r21i = m - q;
    let r21j = n - r;
    let r21k = p - s;
    let r21 = Math.sqrt(
        Math.pow(m - q, 2) + Math.pow(n - r, 2) + Math.pow(p - s, 2)
    );
    let r213 = Math.pow(r21, 3);
    //document.getElementById("r21").innerHTML = String(r21);
    //document.getElementById("r213").innerHTML = String(r213);

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

    btn = document.getElementById('aboutBtn');
    
}


function transBox(x, y, z) {


    push();

    p1 = new PointOne;
    strokeWeight(20);
    p1.generate(x, y, z);
    strokeWeight(12);

    pop();
    /*var p1 = boxSize;
    var p2 = p1+boxSize;
    var p3 = p2+boxSize;
    var p4 = p3+boxSize;
    push();
    stroke(255,255,255); //White
    strokeWeight(3);  
    translate(-75, 228, -265);
    rotateX(PI/2);
    line(p3, p2, p3, p3);
    rotateZ(PI/3);
    translate(94, -346, 0);
    line(p2, p3, p2, p2);

    rotateZ(PI/3);
    translate(184, -283, 0);
    line(p2, p3, p2, p2);

    translate(-121, 169, 0);
    rotateZ(-(PI/3));
    line(p2, p3, p2, p2);

    translate(-120, 170, 0);
    rotateZ(-(PI/3));
    line(p2, p3, p2, p2);
    
    translate(-122, 169, 0);
    rotateZ(-(PI/3));
    line(p2, p3, p2, p2);

    //Upper Hex
    translate(-206, -2, 78.94);
    line(p3, p2, p3, p3);
    rotateZ(PI/3);
    translate(94, -346, 0);
    line(p2, p3, p2, p2);

    rotateZ(PI/3);
    translate(184, -283, 0);
    line(p2, p3, p2, p2);

    translate(-121, 169, 0);
    rotateZ(-(PI/3));
    line(p2, p3, p2, p2);

    translate(-120, 170, 0);
    rotateZ(-(PI/3));
    line(p2, p3, p2, p2);
    
    translate(-122, 169, 0);
    rotateZ(-(PI/3));
    line(p2, p3, p2, p2);
    
    translate(-128, 150, -228);
    rotateX(PI/2);
    line(p2, p3, p2, p2);

    translate(-1, -2, -78);
    line(p2, p3, p2, p2);

    translate(63, 0, -38);
    line(p2, p3, p2, p2);

    translate(68, 0, 40);
    line(p2, p3, p2, p2);

    translate(-65, 0, 110);
    line(p2, p3, p2, p2);
    
    
    translate(65, 0, -38);
    line(p2, p3, p2, p2);
    stroke(255,56,56); //rgb(255, 56, 56)
    
    strokeWeight(12);
    point(149, 152, -71);  
    point(149, 152, 0); 
    point(85, 152, 37);
    point(22, 152, 3);
    point(22, 152, -75);
    point(87, 152, -110);
    
    translate(0, 75.6, 0);
    point(149, 152, -71);  
    point(149, 152, 0); 
    point(85, 152, 37);
    point(22, 152, 3);
    point(22, 152, -75);
    point(87, 152, -110);

    stroke(55, 79, 255); // rgb(55, 79, 255)
    translate(-10, -75.6/2, 55);
    point(87, 152, -110);
    translate(0, 0, 40);
    point(87, 152, -110);
    translate(30, 0, -20);
    point(87, 152, -110);

    stroke(54, 255, 121); // rgb(54, 255, 121)
    translate(-20, +75.6/2, 0);
    point(87, 152, -110);

    translate(0, -75.6, 0);
    point(87, 152, -110);

    pop();*/
}

function draw() {
    var xLeftMargin = -536;
    var yLeftMargin = 270;

    orbitControl();

    background(0);
    stroke(255);

    // Paticles
    integrate();

    // Axes
    stroke(255, 255, 255);
    strokeWeight(4);

    /*Origin (-535, 270, 0) */

    //X-Axis
    push();
    translate(xLeftMargin, yLeftMargin, 0);
    line(900, 0, 0, 0);
    pop();

    strokeWeight(6);
    var a1 = 500;

    // -500 to +375 eg -500, -465, -430, -395...
    for (var i = 0; i < 25; i++) {
        push();
        stroke(255, 50, 50);
        translate(-a1, 260, 0);
        line(0, 20, 0, 0);
        pop();
        a1 = a1 - 35;
    }

    var b1 = 235;

    // -235 to +525
    for (var i = 0; i < 15; i++) {
        push();
        stroke(54, 255, 121);
        translate(-545, b1, 0);
        line(20, 0, 0, 0);
        pop();
        b1 = b1 - 35;
    }

    var c1 = 35
    for (var i = 0; i < 15; i++) {
        push();
        stroke(30, 30, 255);
        translate(-535, 260, -c1);
        line(0, 20, 0, 0);
        pop();
        c1 = c1 + 35;
    }

    strokeWeight(4);
    stroke(255, 255, 255);
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
}