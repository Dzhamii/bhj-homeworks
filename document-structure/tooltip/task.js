document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggers = document.querySelectorAll(".has-tooltip");
  
    tooltipTriggers.forEach((trigger) => {
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const tooltipText = this.getAttribute("title");
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.innerText = tooltipText;
  
        const existingTooltip = document.querySelector(".tooltip_active");
        if (existingTooltip) {
          existingTooltip.classList.remove("tooltip_active");
        }
  
        tooltip.style.left = event.clientX + "px";
        tooltip.style.top = event.clientY + "px";
        tooltip.classList.add("tooltip_active");
        document.body.appendChild(tooltip);
  
        document.addEventListener("click", function (e) {
          if (e.target !== trigger && e.target !== tooltip) {
            tooltip.remove();
          }
        });
      });
    });
  });
  