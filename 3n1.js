let n

function setup() {
  createCanvas(windowWidth - 10 , windowHeight - 10)
  noLoop()
}

function getHeight() {
  return Math.abs(n - (height - 20))
}

function graph(input) {
  n = (height - 20) - input
  let newY
  background(240)

  for (let i = 2; i < (width / 20); i++) {
    if (getHeight() % 2 == 1) {
      newY = (height - 20) - (getHeight() * 3 + 1)
    } else {
      newY = n + (getHeight() / 2)
    }

    stroke("#00f")
    strokeWeight(2)
    line(i * 20 - 20, n, i * 20, newY)

    stroke(240)
    strokeWeight(5)
    fill("#f00")
    text(getHeight(), i * 20 - 30 , n - 10)
    
    n = newY
  }
}

function draw() {
  graph(prompt())
}