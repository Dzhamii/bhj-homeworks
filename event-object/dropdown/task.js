document.addEventListener("DOMContentLoaded", () => {
    const dropdownValues = document.querySelectorAll(".dropdown__value");
    const dropdownLists = document.querySelectorAll(".dropdown__list");
  
    dropdownValues.forEach((value, index) => {
      value.addEventListener('click', () => {
        dropdownLists[index].classList.toggle("dropdown__list_active");
      });
    });
  
    dropdownLists.forEach((list, index) => {
      list.addEventListener("click", (event) => {
        if (event.target.classList.contains("dropdown__link")) {
          const selectedValue = event.target.textContent;
          dropdownValues[index].textContent = selectedValue;
          list.classList.remove("dropdown__list_active");
          event.preventDefault();
        }
      });
    });
  });
  