const cardInBottomSheet = document.querySelector("#bottom-sheet .card");

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.requestFullscreen();
  document.querySelector("main.container").style.display = "block";
  document.querySelector("nav").style.display = "flex";
  document.querySelector(".loading").style.display = "none";
});

document.querySelector("#faq-btn").addEventListener("click", () => {
  document.querySelector("#faq-content").style.display = "block";
  cardInBottomSheet.style.display = "none";
  showSheet(80);
});

document.querySelector("#invest-btn")?.addEventListener("click", () => {
  document.querySelector("#invest-content").style.display = "block";
  cardInBottomSheet.style.display = "block";
  showSheet(80);
});

document.querySelector("#withdraw-btn").addEventListener("click", () => {
  document.querySelector("#withdraw-content").style.display = "block";
  cardInBottomSheet.style.display = "block";
  showSheet(97);
});

document.querySelector("#withdraw-nav-btn").addEventListener("click", () => {
  document.querySelector("#withdraw-content").style.display = "block";
  cardInBottomSheet.style.display = "block";
  showSheet(97);
});

document.querySelector("#topup-btn").addEventListener("click", () => {
  document.querySelector("#topup-content").style.display = "block";
  cardInBottomSheet.style.display = "block";
  showSheet(75);
});

document.querySelector("#topup-nav-btn").addEventListener("click", () => {
  document.querySelector("#topup-content").style.display = "block";
  cardInBottomSheet.style.display = "block";
  showSheet(75);
});

/**
 * @param {Element} elem
 */
const handleTabChange = (elem, order) => {
  document.querySelectorAll("#tabbar > div").forEach((elem) => {
    elem.classList.remove("active-tab");
  });
  elem.classList.add("active-tab");
  document.querySelectorAll("#tab-contents > div").forEach((elem) => {
    elem.style.display = "none";
  });
  document.querySelector("#tab-content-" + order).style.display = "block";
};
