function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

// for triangle
function triangleMouseOver() {
  const sectionColor = document.getElementById("randomColor1");
  sectionColor.style.backgroundColor = randomColor();
}

function triangleMouseOut() {
  const sectionColor = document.getElementById("randomColor1");
  sectionColor.style.background = "white";
}


// Rectangle
function rectangleMouseOver() {
  const sectionColor = document.getElementById("randomColor2");
  sectionColor.style.backgroundColor = randomColor();
}

function rectangleMouseOut() {
  const sectionColor = document.getElementById("randomColor2");
  sectionColor.style.background = "white";
}


// Parallelogram
function parallelogramMouseOver() {
  const sectionColor = document.getElementById("randomColor3");
  sectionColor.style.backgroundColor = randomColor();
}

function parallelogramMouseOut() {
  const sectionColor = document.getElementById("randomColor3");
  sectionColor.style.background = "white";
}


// Rhombus
function rhombusMouseOver() {
  const sectionColor = document.getElementById("randomColor4");
  sectionColor.style.backgroundColor = randomColor();
}

function rhombusMouseOut() {
  const sectionColor = document.getElementById("randomColor4");
  sectionColor.style.background = "white";
}


// Pentagone
function pentagoneMouseOver() {
  const sectionColor = document.getElementById("randomColor5");
  sectionColor.style.backgroundColor = randomColor();
}

function pentagoneMouseOut() {
  const sectionColor = document.getElementById("randomColor5");
  sectionColor.style.background = "white";
}


// Ellipse
function ellipseMouseOver() {
  const sectionColor = document.getElementById("randomColor6");
  sectionColor.style.backgroundColor = randomColor();
}

function ellipseMouseOut() {
  const sectionColor = document.getElementById("randomColor6");
  sectionColor.style.background = "white";
}

// function mouseOverColor() {
//     const sectionColor = document.getElementById("randomColor1");
//     sectionColor.style.backgroundColor = randomColor();
// }

// function mouseOutColor() {
//     const sectionColor = document.getElementById("randomColor1");
//     sectionColor.style.background='white';
// }