/* GET ELEMENT CONSTANTS */

const clearBtn = document.getElementById("clear");
const gridContainer = document.querySelector(".grid-container");

/* FUNCTIONS */

const buildGrid = (rowN, colN) => {
  const tempContainer = document.createDocumentFragment();

  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-square");
      div.id = `r${i}-c${j}`;
      tempContainer.appendChild(div);
    }
  }

  return tempContainer;
};

const getGridSizeFromUser = () => {
  const size = prompt("What size grid would you like to use? (Max 100)");
  console.log(+size);
  if (isNaN(+size)) {
    alert("Input type error. Using default 16x16 grid.");
    return false;
  }
  return +size;
};

/* EVENT HANDLERS */

const hoverSquareHandler = (e) => {
  if (e.target.classList.contains("grid-square")) {
    e.target.classList.add("hovered");
    // e.target.classList.add("filled");
    e.target.style.background = randomHex();
  }
};

const leaveSquareHandler = (e) => {
  if (e.target.classList.contains("grid-square")) {
    e.target.classList.remove("hovered");
  }
};

const clearBtnHandler = (e) => {
  let newSize = getGridSizeFromUser();
  gridContainer.innerHTML = "";
  if (!newSize) {
    gridContainer.appendChild(buildGrid(16, 16));
    gridContainer.style.gridTemplateColumns = `repeat(${16},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${16},1fr)`;
  } else {
    newSize = newSize <= 100 ? newSize : 100;
    gridContainer.appendChild(buildGrid(newSize, newSize));
    gridContainer.style.gridTemplateColumns = `repeat(${newSize},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${newSize},1fr)`;
  }
};

/* BUILD ELEMENTS */

const gridFragment = buildGrid(16, 16);

gridContainer.appendChild(gridFragment);

/* EVENT LISTENERS */

gridContainer.addEventListener("mouseover", hoverSquareHandler);
gridContainer.addEventListener("mouseout", leaveSquareHandler);
clearBtn.addEventListener("click", clearBtnHandler);

console.log(document.querySelector(".grid-square").style);
