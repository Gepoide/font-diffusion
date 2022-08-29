class Letters {
  constructor(x, y,size, i, f) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.i = i;
    this.f = f;
    this.gepoide = ["G", "e", "p", "o", "i", "d", "e"];
    this.fonts = [suisseLight,suisseBook, suisseBlack]
  }

  display() {
    textSize(this.size);
    textAlign(CENTER, CENTER);
    fill(0, 0, 255);
    stroke(255);
    strokeWeight(1.4);
    textFont(this.fonts[this.f]);
    text(this.gepoide[this.i], this.x, this.y);
  }

  decrease() {
    this.size = max(this.size - 10 + random(9), 0);
  }
}
