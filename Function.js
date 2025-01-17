// education script work
const educationTab = document.querySelector(".education-tab");
const tabContents = document.querySelector("#education");

educationTab.addEventListener("click", () => {
  tabContents.classList.toggle("active-tab");

  educationTab.style.backgroundColor = tabContents.classList.contains(
    "active-tab"
  )
    ? "#e3f2fd"
    : "#f3f3f3";
});
