// education script work
const educationPanel = document.querySelector("h2");
const educationTab = document.querySelector(".education-tab");
const tabContents = document.querySelector("#education");

educationPanel.addEventListener("click", () => {
  tabContents.classList.toggle("active-tab");

  educationTab.style.boxShadow = tabContents.classList.contains("active-tab")
    ? "0 6px 10px rgba(0, 0, 0, 0.3)"
    : "none";
});

/* View Certificate Functionality*/
const certificateLinks = document.querySelectorAll(".certificate");

certificateLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Map the links to respective PDF URLs
    const certificateURLs = [
      "",
      "certificates/bsc-certificate.pdf",
      "certificates/12th-certificate.pdf",
    ];

    // Open the respective certificate in a new tab
    window.open(certificateURLs[index], "_blank");
  });
});
