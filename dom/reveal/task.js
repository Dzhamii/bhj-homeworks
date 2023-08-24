document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
  
    window.addEventListener("scroll", () => {
      revealElements.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (revealTop < windowHeight) {
          element.classList.add("reveal_active");
        } else {
          element.classList.remove("reveal_active");
        }
      });
    });
  });
  