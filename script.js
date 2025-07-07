const projectLink = document.querySelectorAll(".projectDesignFt");

projectLink.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "translateX(10px)";
    link.style.transition = "transform 0.3s ease";
  });

  link.addEventListener("mouseout", () => {
    link.style.transform = "translateX(0)";
  });
});