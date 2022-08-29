let letters = [];
let i = 0,
  f = 0;
let n = 0;
let b;
let t = 0;
let sz = 200;
let x = 0,
  y = 0;
let t1 = 0;
let font1 = "FixtureUltra-Medium.ttf",
  fixtureUltraMedium;
let font2 = "NeueMetana-Bold.otf",
  neueMetana;
let font3 = "SuisseIntl-Book.otf",
  suisseBook;
let font4 = "SuisseIntl-Black.otf",
  suisseBlack;
let font5 = "SuisseIntl-Thin.otf",
  suisseThin;
let fonts = [];
let fontNames = [];
let opacity = 0;
let count, status;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noCursor();

  fixtureUltraMedium = loadFont(font1);
  neueMetana = loadFont(font2);
  suisseBook = loadFont(font3);
  suisseBlack = loadFont(font4);
  suisseLight = loadFont(font5);

  fonts = [suisseLight, suisseBook, suisseBlack];
  fontNames = ["Light", "Book", "Black"];
  background(0, 0, 255);
}

// function mouseDragged(){
//   let b = new Letters(mouseX,mouseY,i);
//   letters.push(b);
//   if (letters.length>40){
//     letters.splice(0,1)
//   }
// }

function touchStarted() {
  f = (f + 1) % 3;

  if (isLooping()) {
  } else {
    loop();
    opacity = 255;
  }
  return false;
}

function draw() {
  t1++;

  noStroke();
  fill(0, 0, 255, opacity);
  rect(0, 0, width, height);

  i = round(t1 / 30) % 7;

  x = width / 2 + 30 * sin(t1 / 10) * random(10);
  y = height / 2 + 30 * cos(t1 / 10) * random(10);

  if (t1 % 60 === 0) {
    noLoop();
  }

  opacity = 0;

  // strokeWeight(1);
  // line(0,70,width,70);

  if (mouseIsPressed === true) {
    sz = min(sz + 10, 400);
  } else {
    sz = max(sz - 10, 200);
  }

  for (t = 0; t < 10; t++) {
    b = new Letters(x, y, 200, i, f);
    letters.push(b);
    if (letters.length > 100) {
      letters.splice(0, 1);
    }
  }

  for (n = 0; n < letters.length; n += 2) {
    letters[n].display();
    letters[n].decrease();
  }

  noStroke();
  fill(0, 0, 255);
  rect(0, 0, 70, height);

  fill(255);
  translate(0, 90);
  rotate(-PI / 2);
  textAlign(LEFT, BOTTOM);
  textFont(fonts[1]);
  textSize(22);
  text(fontNames[f], 10, 45);
  // textSize(22);
  if (isLooping()) {
    if (t1 % 60 < 10) {
      count = "0" + (t1 % 60);
    } else {
      count = t1 % 60;
    }
    status = "Running";
  } else {
    count = "60";
    status = "Done";
  }
  text(count + "/60", -height / 2 - 100, 45);
  text(status, -height + 110, 45);
  resetMatrix();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  background(0, 0, 255);
}
