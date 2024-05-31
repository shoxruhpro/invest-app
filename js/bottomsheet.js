const bottomSheet = document.querySelector("#bottom-sheet");
const overlay = document.querySelector(".overlay");
const content = document.querySelector(".content");
const dragIcon = document.querySelector(".drag-icon");
let defaultHeight = 97;

let isDragging = false,
  startY,
  startHeight;

const updateHeight = (height) => {
  //updating sheet height
  content.style.height = height ? `${height}vh` : "max-content";

  // if the sheet height is equal to 100 then toggling fullsceen class to bottom sheet
  bottomSheet.classList.toggle("fullscreen", height === 100);
};

const showSheet = (height) => {
  defaultHeight = height;
  bottomSheet.classList.add("show");
  // updating sheet height with default height 58
  updateHeight(height);
  document.body.style.overflow = "hidden";
  document.documentElement.requestFullscreen({ navigationUI: "hide" });
};

const hideSheet = () => {
  bottomSheet.classList.remove("show");
  document.body.style.overflow = "auto";
  document
    .querySelectorAll("#bottom-sheet > .content > .body > section")
    .forEach((elem) => {
      elem.style.display = "none";
    });
};

const dragStart = (e) => {
  isDragging = true;
  bottomSheet.classList.add("dragging");
  //recording intitial y position and sheet height
  startY = e.pageY || e.touches?.[0].pageY;
  startHeight = parseInt(content.style.height);
};

const dragging = (e) => {
  //return if isDragging is false
  if (!isDragging) return;

  //calculating new height of sheet by using starty and start height
  //calling updateHeight function with new height as argument

  let delta = startY - (e.pageY || e.touches?.[0].pageY);
  let newHeight = startHeight + (delta / window.innerHeight) * 100;

  updateHeight(newHeight);
};

const dragStop = () => {
  isDragging = false;
  bottomSheet.classList.remove("dragging");

  //setting sheet height based on the sheet current height or position
  let sheetHeight = parseInt(content.style.height);

  sheetHeight < ~~(defaultHeight / 2)
    ? hideSheet()
    : sheetHeight > defaultHeight
    ? updateHeight(100)
    : updateHeight(defaultHeight);
  //if height is greater than 75 making sheet full screen else making it to 58vh
};

dragIcon.addEventListener("mousedown", dragStart);
dragIcon.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

dragIcon.addEventListener("touchstart", dragStart);
dragIcon.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

overlay.addEventListener("click", hideSheet);
