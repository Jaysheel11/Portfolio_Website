function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function downloadResume() {
  var resumeUrl = "./assets/JaysheelGolani.pdf";
  var link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "JaysheelGolani_Resume.pdf";
  link.click();
}
