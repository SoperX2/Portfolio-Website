// Hover effect for project links
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

// Timezone and current time display in footer
const timezone = "Europe/Stockholm";
const now = new Date();

const currentTime = new Intl.DateTimeFormat("en-US", {
  timeZone: timezone,
  timeStyle: "short",
  hour12: false,
}).format(now);

document.querySelector(".timeFooter").textContent = "CEST (Stockholm time) " + currentTime;

// Button hover effect
const buttons = document.querySelectorAll(".button1");
buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#7289da"; // Lighter blue
    button.style.color = "#ffffff"; // White text
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#2c2f33"; // Original dark grey
    button.style.color = "#ffffff"; // White text
  });
});