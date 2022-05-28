const frame = document.getElementById("frame");
let sortedArray = [];

const noOfRows = 20;

//number of elements
const noOfColumns = prompt("Enter the number of elments");

let elements = createArray(noOfColumns, noOfRows);

function createArray(noOfElements, maxInteger) {
  let array = [];
  let prev = -1;
  while (true) {
    let number = Math.floor(Math.random() * maxInteger);
    if (array.indexOf(number) !== -1) {
      number = Math.floor(Math.random() * maxInteger);
    }
    if (prev !== number && number !== 0) {
      array.push(number);
      prev = number;
    }
    if (array.length == noOfElements) {
      return array;
    }
  }
}

function setFrame(row = noOfRows, column = noOfColumns) {
  frame.style.setProperty("--gridRow", row);
  frame.style.setProperty("--gridColumn", column);
}

function selectionSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
      sortedArray.push(inputArr.toString());
    }
  }
  return inputArr;
}

selectionSort(elements);
let lastRenderTime = 0;
let test = [];

let index = 0;
function main(currentTime) {
  if (index === sortedArray.length) {
    alert("sorting complete");
    window.cancelAnimationFrame(id);
    return;
  }
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / 5) return;
  lastRenderTime = currentTime;
  sorting(index++);
  update();
}

const id = window.requestAnimationFrame(main);

function sorting(i) {
  test = sortedArray[i].split(",");
  console.log(i);
}

function update() {
  frame.innerHTML = "";
  setFrame();
  addElements(test);
}

function addElements(elements) {
  elements.forEach((i) => {
    const Element = document.createElement("div");
    Element.style.gridRow = `1/ span ${i}`;
    frame.appendChild(Element);
  });
}
