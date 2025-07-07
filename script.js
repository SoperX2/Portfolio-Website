const projectLink = document.querySelectorAll(".projectDesignFt");

projectLink.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "translateX(10px)";
    link.style.transition = "transform 0.3s ease";
  });

  link.addEventListener("mouseout", () => {
    link.style.transform = "translateX(0)";
  });
});

const timezone = "Europe/Stockholm";
const now = new Date();

const currentTime = new Intl.DateTimeFormat("en-US", {
  timeZone: timezone,
  timeStyle: "short",
  hour12: false,
}).format(now);

document.querySelector(".timeFooter").textContent = "CEST (Stockholm time) " + currentTime;