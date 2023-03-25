// Redirect to blog.html page
function blog() {
  window.location = "blog.html";
}

// area section - serial no
let serial = 0;

// first function
function functionOne(inputOne, inputTwo, areaA, areaB, areaName) {
  const input1 = document.getElementById(inputOne).value;
  const input2 = document.getElementById(inputTwo).value;

  // check validation
  if (isNaN(input1) || isNaN(input2)) {
    alert("Enter valid Number");
    return;
  } else if (input1 < 0 || input2 < 0) {
    alert("Enter Positive Number");
    return;
  } else if (input1 == "" || input2 == "") {
    alert("Please fill out this field ");
    return;
  }

  const area_A = (document.getElementById(areaA).innerText = input1);
  const area_B = (document.getElementById(areaB).innerText = input2);

  const calculate = (0.5 * parseFloat(input1) * parseFloat(input2)).toFixed(2);

  const getName = document.getElementById(areaName).innerText;

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th scope="row">${serial}</th>
    <td>${getName}</td>
    <td>${calculate} <span>cm<sup>2</sup></span></td>
    <td><input type="button" value="Convert" class="btn btn-primary w-[20%]" "></td>
    `;
  container.appendChild(tr);
}

// second function
function functionTwo(inputOne, inputTwo, areaA, areaB, areaName) {
  const input1 = document.getElementById(inputOne).value;
  const input2 = document.getElementById(inputTwo).value;

  // check validation
  if (isNaN(input1) || isNaN(input2)) {
    alert("Enter valid Number");
    return;
  } else if (input1 < 0 || input2 < 0) {
    alert("Enter Positive Number");
    return;
  } else if (input1 == "" || input2 == "") {
    alert("Please fill out this field ");
    return;
  }

  const area_A = (document.getElementById(areaA).innerText = input1);
  const area_B = (document.getElementById(areaB).innerText = input2);
  
  const calculate = parseFloat(input1) * parseFloat(input2).toFixed(2);

  const getName = document.getElementById(areaName).innerText;
  
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th scope="row">${serial}</th>
    <td>${getName}</td>
    <td>${calculate} <span>cm<sup>2</sup></span></td>
    <td><input type="button" value="Convert" class="btn btn-primary w-[20%]" "></td>
    `;
  container.appendChild(tr);
}


// function checkValidation(valueOne, valuetwo, ) {
//   if (isNaN(valueOne) || isNaN(valuetwo)) {
//     alert("Enter valid Number");
//     return;
//   } else if (valueOne < 0 || valuetwo < 0) {
//     alert("Enter Positive Number");
//     return;
//   } else if (valueOne == "" || valuetwo == "") {
//     alert("Please fill out this field ");
//     return;
//   }
// }


// Triangle
document.getElementById("triangleBtn").addEventListener("click", function () {
  serial += 1;
  functionOne("triangleInput-b", "triangleInput-h", "triangle-b", "triangle-h", "triangle");
});

// Rectangle
document.getElementById("rectangleBtn").addEventListener("click", function () {
  serial += 1;
  functionTwo("rectangleInput-w", "rectangleInput-l", "rectangle-w", "rectangle-l", "rectangle");
});

// Parallelogram
document.getElementById("parallelogramBtn").addEventListener("click", function () {
  serial += 1;
  functionTwo("parallelogramInput-b","parallelogramInput-h","parallelogram-b","parallelogram-h","parallelogram");
});

// Rhombus
document.getElementById("rhombusBtn").addEventListener("click", function () {
  serial += 1;
  functionOne("rhombusInput-d1", "rhombusInput-d2", "rhombus-d1", "rhombus-d2", "rhombus");
});

// Pentagone
document.getElementById("pentagoneBtn").addEventListener("click", function () {
  serial += 1;
  functionOne("pentagoneInput-p", "pentagoneInput-b", "pentagone-p", "pentagone-b", "pentagone");
});

// Ellipse
document.getElementById("ellipseBtn").addEventListener("click", function () {
  serial += 1;

  const input1 = document.getElementById("ellipseInput-a").value;
  const input2 = document.getElementById("ellipseInput-b").value;

   if (isNaN(input1) || isNaN(input2)) {
     alert("Enter valid Number");
     return;
   } else if (input1 < 0 || input2 < 0) {
     alert("Enter Positive Number");
     return;
   } else if (input1 == "" || input2 == "") {
     alert("Please fill out this field ");
     return;
   }

  const area_A = (document.getElementById("ellipse-a").innerText = input1);
  const area_B = (document.getElementById("ellipse-b").innerText = input2);

  const piValue = 3.1416;
  const calculate = (piValue * parseFloat(input1) * parseFloat(input2)).toFixed(2);

  const getName = document.getElementById("ellipse").innerText;

  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th scope="row">${serial}</th>
    <td>${getName}</td>
    <td>${calculate} <span>cm<sup>2</sup></span></td>
    <td><input type="button" value="Convert" class="btn btn-primary w-[20%]" "></td>
    `;
  container.appendChild(tr);
});
