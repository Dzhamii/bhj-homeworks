document.addEventListener("DOMContentLoaded", function () {
    const rotators = document.querySelectorAll(".rotator");
  
    rotators.forEach((rotator) => {
      const cases = rotator.querySelectorAll(".rotator__case");
      let currentCaseIndex = 0;
  
      const rotate = () => {
        cases[currentCaseIndex].classList.remove("rotator__case_active");
        currentCaseIndex = (currentCaseIndex + 1) % cases.length;
        cases[currentCaseIndex].classList.add("rotator__case_active");
  
        const nextSpeed = cases[currentCaseIndex].getAttribute("data-speed");
        setTimeout(rotate, nextSpeed);
      };
  
      rotate(); 
    });
  });
  